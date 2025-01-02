import React, { useEffect, useMemo, useRef } from 'react';
import { apiResponse } from '../store';
import { useStore } from '@nanostores/react';
import { FormatDropdown } from './FormatDropdown';
import type { _downloadResult } from '../content/content';
export const sanitizeFilename = (filename: string): string => {
    // Remove invalid filename characters and trim
    return filename
        .replace(/[<>:"/\\|?*]+/g, '') // Remove invalid chars
        .replace(/\s+/g, '_')          // Replace spaces with underscores
        .replace(/_{2,}/g, '_')        // Replace multiple underscores with single
        .replace(/[.]+/g, '.')         // Replace multiple dots with single
        .replace(/^[.-]+|[.-]+$/g, '') // Remove leading/trailing dots and dashes
        .trim()
        .slice(0, 255);                // Limit length to 255 chars
};

const getDownloadFilename = (title: string, format: string): string => {
    const sanitizedTitle = sanitizeFilename(title);
    return `${sanitizedTitle}.${format}`;
};


// Main component
const DownloadResult = ({ content }: { content: _downloadResult }) => {
    // All hooks at the top level
    const [selectedUrl, setSelectedUrl] = React.useState<string>('');
    const data = useStore(apiResponse);
    const downloadAnchor = useRef(null);

    // Helper functions
    const decodeHtmlEntities = (encodedString: string): string => {
        const parser = new DOMParser();
        const decoded = parser.parseFromString(encodedString, 'text/html').body.textContent;
        return decoded || '';
    };

    const formatDuration = (seconds: number): string => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = Math.floor(seconds % 60);

        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
        }
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    // Memoized values
    const cleanTitle = useMemo(() => {
        if (!data?.title) return "Twitter Video";
        const title = decodeHtmlEntities(data.title);
        return title.replace(/- https:\/\/t\.co\/\w+$/, '').trim();
    }, [data?.title]);

    // Effects
    useEffect(() => {
        if (data?.downloadUrls?.length > 0) {
            setSelectedUrl(data.downloadUrls[0].url);
        }
    }, [data?.downloadUrls]);

    const handleDownload = () => {
        if (selectedUrl) {
            const link = downloadAnchor.current;
            if (link) {
                const selectedFormat = data?.downloadUrls.find(url => url.url === selectedUrl);
                const format = selectedFormat?.ext?.toLowerCase() || selectedFormat?.ext?.toLowerCase() || 'mp4';
                const filename = getDownloadFilename(cleanTitle, format);
                link.href = selectedUrl;
                link.download = filename;
                link.click();
            }

        }
    };


    if (!data) {
        return null;
    }

    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md">
            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Thumbnail Section */}
                    <div className="relative">
                        <div className="aspect-video">
                            <img
                                src={data.thumbnail}
                                alt={cleanTitle}
                                title={cleanTitle}
                                className="rounded-lg object-cover w-full h-full"
                            />
                            <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 px-2 py-1 rounded text-white text-sm">
                                {formatDuration(data.duration)}
                            </div>
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl font-semibold mb-4 line-clamp-2">
                                <bdi>{cleanTitle}</bdi>
                            </h2>

                            <div className="space-y-4">
                                <div className="flex flex-col space-y-2">
                                    <label className="text-sm font-medium">{content.select_quality}:</label>
                                    <FormatDropdown
                                        downloadUrls={data.downloadUrls}
                                        onFormatSelect={setSelectedUrl}
                                        content={content.select_quality}
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            className={`mt-4 w-full py-2 px-4 rounded-lg flex items-center justify-center space-x-2 
                                ${selectedUrl
                                    ? 'bg-main hover:bg-opacity-90 text-white'
                                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                            onClick={handleDownload}
                            disabled={!selectedUrl}
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                            </svg>
                            <span>{content.download}</span>
                        </button>
                        <a href={selectedUrl} ref={downloadAnchor} target="_blank" rel="noopener noreferrer"></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadResult;