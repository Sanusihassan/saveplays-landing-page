/**
 * Translate the given content into french while keeping the structure intact. Use the specified types { _featuresGridContent, _mainContent, _featuresAndCompatibilities } for the featuresGridContent, mainContent, and featuresAndCompatibilities sections. Here is the original content for reference:

*/
// typescript
import type { SeoProps } from "../partials/head";
export const title = "Free Online Video Downloader";
export const placeholder = "Paste your link here";
export const featuresGridContent = {
    youtube: {
        ariaLabel: "YouTube Downloader",
        title: "YouTube Downloader",
        description: "Download videos in multiple formats and resolutions from YouTube",
    },
    facebook: {
        ariaLabel: "Facebook Downloader",
        title: "Facebook Downloader",
        description: "Save videos from Facebook with high-quality downloads",
    },
    instagram: {
        ariaLabel: "Instagram Downloader",
        title: "Instagram Downloader",
        description: "Download Instagram reels, posts, and stories easily",
    },
    twitter: {
        ariaLabel: "Twitter Downloader",
        title: "X (Twitter) Downloader",
        description: "Grab videos and media from Twitter (X) with a single click",
    },
};
export const mainContent = {
    title: "Free Online Video Downloader.",
    guideTitle: "Guide to Using SavePlays.com's Online Video Downloader",
    introduction:
        "Efficiently download videos and music with SavePlays.com, the leading Online Video Downloader. Secure your favorite media directly from the web with no need for additional software. Our user-friendly platform ensures downloading videos is simple and effective.",
    details:
        "Conveniently access and download a wide array of content, from top movies and trending TV series to exciting sports clips. Just paste the video URL into the specified field and hit the Download button.",
    highQualityTitle: "Download High-Quality MP4 Videos",
    highQualityDescription:
        "Streaming videos online with a fast connection offers immediate access, but offline playback comes with its own advantages. SavePlays.com provides a powerful video downloader that keeps your downloads in pristine visual quality, enabling you to save videos in clear, high-definition MP4 format.",
    benefits:
        "With our reliable service, enjoy your favorite videos anytime, anywhere, by converting and saving them as high-quality HD MP4 files.",
    howToTitle: "How to Download Videos Online in MP4 Format with High Definition",
    steps: {
        step1: {
            title: "Paste your video link.",
            description:
                "Copy the URL of your desired video from your preferred platform and paste it into the input field on the SavePlays.com homepage.",
        },
        step2: {
            title: "Select download quality.",
            description:
                "Our platform provides a choice of resolutions and formats. Choose the one that suits your requirements.",
        },
        step3: {
            title: "Enjoy downloaded videos.",
            description:
                "Click the Download button and save the video file directly to your device. Play it anytime without internet dependency.",
        },
    },
};
export const featuresAndCompatibilities = {
    resolutionTitle:
        "Check out different video resolutions - From SD to 4K video download support",
    resolutionDescription:
        "Our versatile video downloader offers a wide range of video resolutions, including MP4, SD, HD, FullHD, 2K, and 4K formats. The available resolution options for download depend on the original quality of the source video. For example, if a video is uploaded in 1080p, you can download it in the same high definition (HD) quality.",
    resolutionImageAlt: "Download HD, Full HD, and 4K videos",
    resolutionImageTitle: "Download HD, Full HD, and 4K videos",
    compatibilityTitle: "Browser compatibility - Download videos easily",
    compatibilityDescription:
        "Maximize your video download experience with our tool's perfect compatibility across all major browsers, including Google Chrome, Mozilla Firefox, Safari, Opera, and other Chromium-based browsers. Enjoy smooth and efficient video downloads on any of these platforms.",
    compatibilityImageAlt:
        "Compatible with major browsers for video downloads",
};
export const pageProps: SeoProps = {
    title: "Free Online Video Downloader - saveplays.com",
    description:
        "Download videos from popular platforms with saveplays.com, the leading free online video downloader. Easily save videos in various formats and resolutions. Start downloading now!",
    image: "/images/saveplays.png",
    keywords: ["video downloader", "online video", "free download"],
    type: "website",
    publishedTime: "2024-01-05T00:00:00+00:00",
    modifiedTime: "2024-09-27T15:56:10+00:00",
    twitter: {
        handle: "@saveplays",
        site: "@saveplays",
    },
    structuredData: [
        {
            "@context": "http://schema.org/",
            "@type": "SoftwareApplication",
            name: "saveplays",
            description:
                "The leading free online video downloader for various platforms.",
            applicationCategory: "MultimediaApplication",
            operatingSystem: ["Windows", "macOS", "Android", "iOS"],
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
            },
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "53281",
                bestRating: "5",
                worstRating: "1",
            },
        },
    ],
    lang: "en",
    locale: "en_US",
    nofollow: false,
    noindex: false,
};

export type _featuresGridContent = typeof featuresGridContent;
export type _mainContent = typeof mainContent;
export type _featuresAndCompatibilities = typeof featuresAndCompatibilities;