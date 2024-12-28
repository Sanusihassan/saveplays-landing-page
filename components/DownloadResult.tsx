import React, { useEffect, useMemo } from 'react';
import { apiResponse, type DownloadUrl } from '../src/store';
import { useStore } from '@nanostores/react';
import { FormatDropdown } from './FormatDropdown';
import type { _downloadResult } from '../src/content/content';

// Main component
const DownloadResult = ({ content }: { content: _downloadResult }) => {
    // All hooks at the top level
    const [selectedUrl, setSelectedUrl] = React.useState<string>('');
    const data = useStore(apiResponse);

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
            window.open(selectedUrl, '_blank');
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadResult;