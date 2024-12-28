import type { DownloadUrl } from "../store";

// Format dropdown component
export const FormatDropdown = ({
    downloadUrls,
    onFormatSelect,
    content = "Select quality"
}: {
    downloadUrls: DownloadUrl[],
    onFormatSelect: (url: string) => void,
    content?: string
}) => {
    return (
        <select
            onChange={(e) => onFormatSelect(e.target.value)}
            className="w-full p-2 border rounded-lg bg-white shadow-sm"
        >
            <option value="">{content}</option>
            {downloadUrls.map((format) => (
                <option key={format.url} value={format.url}>
                    {format.quality} {format.filesize > 0 ? `(${(format.filesize / 1024 / 1024).toFixed(1)} MB)` : ''}
                </option>
            ))}
        </select>
    );
};