import React, { useEffect, useMemo, useRef } from 'react';
import { apiResponse, stateUrl } from '../store';
import { useStore } from '@nanostores/react';
import { FormatDropdown } from './FormatDropdown';
import { FiDownload, FiShare2 } from 'react-icons/fi';
import type { _downloadResult } from '../content/content';

export const sanitizeFilename = (filename: string): string => {
    return filename
        .replace(/[<>:"/\\|?*]+/g, '')
        .replace(/\s+/g, '_')
        .replace(/_{2,}/g, '_')
        .replace(/[.]+/g, '.')
        .replace(/^[.-]+|[.-]+$/g, '')
        .trim()
        .slice(0, 255);
};

const getDownloadFilename = (title: string, format: string): string => {
    const sanitizedTitle = sanitizeFilename(title);
    return `${sanitizedTitle}.${format}`;
};

const DownloadResult = ({ content }: { content: _downloadResult }) => {
    const [selectedUrl, setSelectedUrl] = React.useState<string>('');
    const data = useStore(apiResponse);
    const url = useStore(stateUrl);
    const downloadAnchor = useRef(null);

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

    const cleanTitle = useMemo(() => {
        if (!data?.title) return "Twitter Video";
        const title = decodeHtmlEntities(data.title);
        return title.replace(/- https:\/\/t\.co\/\w+$/, '').trim();
    }, [data?.title]);

    useEffect(() => {
        if (data?.downloadUrls?.length > 0) {
            setSelectedUrl(data.downloadUrls[0].url);
        }
    }, [data]);

    const handleDownload = () => {
        if (selectedUrl) {
            const link = downloadAnchor.current;
            if (link) {
                const selectedFormat = data?.downloadUrls.find(url => url.url === selectedUrl);
                const format = selectedFormat?.ext?.toLowerCase() || 'mp4';
                const filename = getDownloadFilename(cleanTitle, format);
                link.href = selectedUrl;
                link.download = filename;
                link.click();
            }
        }
    };

    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: cleanTitle,
                    text: `Check out this video: ${cleanTitle}`,
                    url: `${window.location.origin}${window.location.pathname}?url=${encodeURIComponent(url)}`,
                });
            } else {
                // Fallback: Copy to clipboard
                const shareUrl = `${window.location.origin}${window.location.pathname}?url=${encodeURIComponent(url)}`;
                await navigator.clipboard.writeText(shareUrl);
                alert('Link copied to clipboard!');
            }
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    if (!data) {
        return null;
    }

    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md">
            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        <div className="mt-4 grid grid-cols-2 gap-4">
                            <button
                                className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg space-y-1
            ${selectedUrl
                                        ? 'bg-main hover:bg-opacity-90 text-white'
                                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                                onClick={handleDownload}
                                disabled={!selectedUrl}
                            >
                                <FiDownload className="w-5 h-5" />
                                <span className="text-sm">{content.download}</span>
                            </button>

                            <button
                                className="flex flex-col items-center justify-center py-2 px-3 rounded-lg space-y-1 
            bg-gray-100 hover:bg-gray-200 text-gray-700"
                                onClick={handleShare}
                            >
                                <FiShare2 className="w-5 h-5" />
                                <span className="text-sm">Share</span>
                            </button>
                        </div>
                        <a href={selectedUrl} ref={downloadAnchor} target="_blank" rel="noopener noreferrer"></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadResult;