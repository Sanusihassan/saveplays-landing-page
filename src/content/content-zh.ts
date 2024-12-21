import type { SeoProps } from "../partials/head";
import type { _featuresAndCompatibilities, _featuresGridContent, _mainContent } from "./content";

export const title = "免费在线视频下载器";
export const placeholder = "在此处粘贴您的链接";
export const featuresGridContent: _featuresGridContent = {
    youtube: {
        ariaLabel: "YouTube 下载器",
        title: "YouTube 下载器",
        description: "从 YouTube 下载多种格式和分辨率的视频",
    },
    facebook: {
        ariaLabel: "Facebook 下载器",
        title: "Facebook 下载器",
        description: "高质量地保存 Facebook 视频",
    },
    instagram: {
        ariaLabel: "Instagram 下载器",
        title: "Instagram 下载器",
        description: "轻松下载 Instagram 的短视频、帖子和故事",
    },
    twitter: {
        ariaLabel: "Twitter 下载器",
        title: "X (Twitter) 下载器",
        description: "一键从 X (Twitter) 获取视频和媒体",
    },
};
export const mainContent: _mainContent = {
    title: "免费在线视频下载器。",
    guideTitle: "使用 SavePlays.com 在线视频下载器指南",
    introduction:
        "通过 SavePlays.com 高效下载视频和音乐，这是领先的在线视频下载器。无需额外软件，直接从网络安全获取您喜爱的媒体。我们用户友好的平台确保下载视频既简单又高效。",
    details:
        "方便地访问和下载各种内容，从热门电影和流行电视系列到精彩的体育视频片段。只需将视频 URL 粘贴到指定字段并点击下载按钮即可。",
    highQualityTitle: "下载高质量 MP4 视频",
    highQualityDescription:
        "通过快速连接在线播放视频提供即时访问，但离线播放具有其独特优势。SavePlays.com 提供强大的视频下载器，确保您的下载具有卓越的视觉质量，让您可以保存清晰的高清 MP4 视频。",
    benefits:
        "通过我们可靠的服务，将您喜欢的视频转换并保存为高质量的 HD MP4 文件，随时随地观看。",
    howToTitle: "如何在线下载高质量的 MP4 格式视频",
    steps: {
        step1: {
            title: "粘贴您的视频链接。",
            description:
                "从您喜欢的平台复制视频的 URL，并将其粘贴到 SavePlays.com 首页的输入框中。",
        },
        step2: {
            title: "选择下载质量。",
            description:
                "我们的平台提供多种分辨率和格式选项。选择最符合您需求的选项。",
        },
        step3: {
            title: "享受下载的视频。",
            description:
                "点击下载按钮，将视频文件直接保存到您的设备。无需网络即可随时播放。",
        },
    },
};
export const featuresAndCompatibilities: _featuresAndCompatibilities = {
    resolutionTitle:
        "探索多种视频分辨率 - 支持从 SD 到 4K 视频下载",
    resolutionDescription:
        "我们功能强大的视频下载器支持多种视频分辨率，包括 MP4、SD、HD、FullHD、2K 和 4K 格式。可用的下载分辨率取决于源视频的原始质量。例如，如果视频以 1080p 上传，您可以以相同的高清质量下载。",
    resolutionImageAlt: "下载 HD、Full HD 和 4K 视频",
    resolutionImageTitle: "下载 HD、Full HD 和 4K 视频",
    compatibilityTitle: "浏览器兼容性 - 轻松下载视频",
    compatibilityDescription:
        "我们的工具与所有主流浏览器（包括 Google Chrome、Mozilla Firefox、Safari、Opera 和其他基于 Chromium 的浏览器）完美兼容，优化您的视频下载体验。无论使用哪个平台，都可以享受流畅高效的视频下载。",
    compatibilityImageAlt:
        "与主流浏览器兼容以便下载视频",
};
export const pageProps: SeoProps = {
    title: "免费在线视频下载器 - saveplays.com",
    description:
        "通过 saveplays.com 从热门平台下载视频，领先的免费在线视频下载器。轻松以多种格式和分辨率保存视频。立即开始下载！",
    image: "/images/saveplays-zh.png",
    keywords: ["视频下载器", "在线视频", "免费下载"],
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
                "适用于多种平台的领先免费在线视频下载器。",
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
    locale: "zh_CN",
    nofollow: false,
    noindex: false,
};