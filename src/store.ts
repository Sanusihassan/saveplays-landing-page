import { atom } from 'nanostores';

// Define the types for the API response
export interface DownloadUrl {
    quality: string;
    url: string;
    ext: string;
    resolution: string;
    filesize: number;
}

interface ApiResponse {
    title: string;
    downloadUrls: DownloadUrl[];
    duration: number;
    thumbnail: string;
}

// Create a Nanostore for the API response
export const apiResponse = atom<ApiResponse | null>(null);

// Function to update the store with the API response
export const setApiResponse = (response: ApiResponse) => {
    apiResponse.set(response);
};
