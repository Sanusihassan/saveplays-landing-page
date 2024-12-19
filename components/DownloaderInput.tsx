import React, { useState } from "react";
import Select from "react-select";
import { FaDownload } from "react-icons/fa6";

interface OptionType {
    value: string;
    label: string;
}

const DownloaderInput: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

    // Options for the dropdown
    const options: OptionType[] = [
        { value: "MP4 720", label: "MP4 720" },
        { value: "MP4 1080", label: "MP4 1080" },
        { value: "WEBM 720", label: "WEBM 720" },
        { value: "WEBM 1080", label: "WEBM 1080" },
    ];

    // Handle download button click
    const handleDownload = () => {
        if (selectedOption) {
            alert(`Downloading file in ${selectedOption.value} format.`);
        } else {
            alert("Please select a format to download.");
        }
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
            }}
        >
            {/* Download Button */}
            <button
                onClick={handleDownload}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    backgroundColor: "#00796b",
                    color: "white",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    border: "none",
                    borderRadius: "5px",
                    padding: "10px 15px",
                    cursor: "pointer",
                    fontSize: "16px",
                }}
            >
                <FaDownload />
                Download
            </button>

            {/* Dropdown Select */}
            <Select
                options={options}
                placeholder="Select Format"
                onChange={(option) => setSelectedOption(option as OptionType)}
                styles={{
                    control: (provided) => ({
                        ...provided,
                        borderColor: "#00796b",
                        boxShadow: "none",
                        "&:hover": {
                            borderColor: "#00695c",
                        },
                    }),
                    placeholder: (provided) => ({
                        ...provided,
                        color: "#00796b",
                        fontWeight: "500",
                    }),
                }}
            />
        </div>
    );
};

export default DownloaderInput;
