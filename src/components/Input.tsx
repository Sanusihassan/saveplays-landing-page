import { useState } from "react";
import axios from "axios";
import { VscGitFetch } from "react-icons/vsc";
import { AiOutlineLoading } from "react-icons/ai";
import { setApiResponse } from "../store";



const base = process.env.NODE_ENV === "development" ? "https://laughing-robot-r65x9p4pv5jcpvq6-3000.app.github.dev" : "/api"

export const SearchInput = ({ placeholder = "Paste your link here" }: { placeholder?: string }) => {
    const [url, setUrl] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Determine the correct endpoint based on the URL
    const getEndpoint = (url: string): string | null => {
        if (url.includes("facebook.com")) return "/facebook-downloader";
        if (url.includes("youtube.com") || url.includes("youtu.be")) return "/youtube-downloader";
        if (url.includes("instagram.com")) return "/instagram-downloader";
        if (url.includes("tiktok.com")) return "/tiktok-downloader";
        if (url.includes("twitter.com") || url.includes("x.com")) return "/twitter-downloader";
        if (url.includes("snapchat")) return "/snapchat-downloader";
        return null;
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);


        const endpoint = base + getEndpoint(url);
        if (!endpoint) {
            setError("Unsupported URL. Please provide a valid link.");
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.post(endpoint, { url });
            setApiResponse(response.data); // Update the state/store with the API
        } catch (err) {
            console.error("Error fetching data:", err);
            setError("Failed to fetch data. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <form className="searh-input" onSubmit={handleSubmit}>
                <div className="input">
                    <input
                        type="url"
                        placeholder={placeholder}
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                    />
                </div>
                <button className="submit" type="submit" disabled={isLoading}>
                    {isLoading ? <AiOutlineLoading className="loading" /> : <VscGitFetch />}
                </button>
            </form>
            {error ? <p className="error-message text-red-500 text-center">{error}</p> : null}
        </>
    );
};
