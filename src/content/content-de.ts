// typescript
import type { SeoProps } from "../partials/head";
import type { _featuresAndCompatibilities, _featuresGridContent, _mainContent } from "./content";

export const title = "Kostenloser Online-Video-Downloader";
export const placeholder = "Fügen Sie Ihren Link hier ein";
export const featuresGridContent: _featuresGridContent = {
    youtube: {
        ariaLabel: "YouTube Downloader",
        title: "YouTube Downloader",
        description: "Laden Sie Videos in verschiedenen Formaten und Auflösungen von YouTube herunter",
    },
    facebook: {
        ariaLabel: "Facebook Downloader",
        title: "Facebook Downloader",
        description: "Speichern Sie Videos von Facebook mit hochwertigen Downloads",
    },
    instagram: {
        ariaLabel: "Instagram Downloader",
        title: "Instagram Downloader",
        description: "Laden Sie Instagram Reels, Beiträge und Stories ganz einfach herunter",
    },
    twitter: {
        ariaLabel: "Twitter Downloader",
        title: "X (Twitter) Downloader",
        description: "Laden Sie Videos und Medien von X (Twitter) mit nur einem Klick herunter",
    },
};
export const mainContent: _mainContent = {
    title: "Kostenloser Online-Video-Downloader.",
    guideTitle: "Anleitung zur Nutzung des Online-Video-Downloaders von SavePlays.com",
    introduction:
        "Laden Sie Videos und Musik effizient herunter mit SavePlays.com, dem führenden Online-Video-Downloader. Sichern Sie Ihre Lieblingsmedien direkt aus dem Web, ohne zusätzliche Software zu benötigen. Unsere benutzerfreundliche Plattform macht das Herunterladen von Videos einfach und effektiv.",
    details:
        "Greifen Sie bequem auf eine Vielzahl von Inhalten zu und laden Sie sie herunter, von Top-Filmen und angesagten TV-Serien bis hin zu spannenden Sportclips. Fügen Sie einfach die Video-URL in das vorgesehene Feld ein und klicken Sie auf die Schaltfläche Download.",
    highQualityTitle: "Laden Sie hochwertige MP4-Videos herunter",
    highQualityDescription:
        "Das Streamen von Videos online mit einer schnellen Verbindung bietet sofortigen Zugriff, aber das Offline-Abspielen hat seine eigenen Vorteile. SavePlays.com bietet einen leistungsstarken Video-Downloader, der Ihre Downloads in hervorragender visueller Qualität beibehält, sodass Sie Videos in gestochen scharfem, hochauflösendem MP4-Format speichern können.",
    benefits:
        "Mit unserem zuverlässigen Service genießen Sie Ihre Lieblingsvideos jederzeit und überall, indem Sie sie in hochwertige HD-MP4-Dateien umwandeln und speichern.",
    howToTitle: "So laden Sie Videos online im MP4-Format in hoher Auflösung herunter",
    steps: {
        step1: {
            title: "Fügen Sie Ihren Videolink ein.",
            description:
                "Kopieren Sie die URL des gewünschten Videos von Ihrer bevorzugten Plattform und fügen Sie sie in das Eingabefeld auf der Startseite von SavePlays.com ein.",
        },
        step2: {
            title: "Wählen Sie die Download-Qualität.",
            description:
                "Unsere Plattform bietet eine Auswahl an Auflösungen und Formaten. Wählen Sie diejenige aus, die Ihren Anforderungen entspricht.",
        },
        step3: {
            title: "Genießen Sie die heruntergeladenen Videos.",
            description:
                "Klicken Sie auf die Schaltfläche Download und speichern Sie die Videodatei direkt auf Ihrem Gerät. Spielen Sie sie jederzeit ohne Internetverbindung ab.",
        },
    },
};
export const featuresAndCompatibilities: _featuresAndCompatibilities = {
    resolutionTitle:
        "Entdecken Sie verschiedene Videoauflösungen - Von SD bis hin zur Unterstützung für 4K-Downloads",
    resolutionDescription:
        "Unser vielseitiger Video-Downloader bietet eine breite Palette von Videoauflösungen, darunter MP4, SD, HD, FullHD, 2K und 4K. Die verfügbaren Auflösungsoptionen zum Herunterladen hängen von der ursprünglichen Qualität des Quellvideos ab. Wenn ein Video beispielsweise in 1080p hochgeladen wird, können Sie es in derselben HD-Qualität herunterladen.",
    resolutionImageAlt: "Laden Sie HD-, Full HD- und 4K-Videos herunter",
    resolutionImageTitle: "Laden Sie HD-, Full HD- und 4K-Videos herunter",
    compatibilityTitle: "Browserkompatibilität - Videos einfach herunterladen",
    compatibilityDescription:
        "Maximieren Sie Ihre Video-Download-Erfahrung mit der perfekten Kompatibilität unseres Tools mit allen wichtigen Browsern, einschließlich Google Chrome, Mozilla Firefox, Safari, Opera und anderen Chromium-basierten Browsern. Genießen Sie reibungslose und effiziente Video-Downloads auf all diesen Plattformen.",
    compatibilityImageAlt:
        "Kompatibel mit den wichtigsten Browsern für Video-Downloads",
};
export const pageProps: SeoProps = {
    title: "Kostenloser Online-Video-Downloader - saveplays.com",
    description:
        "Laden Sie Videos von beliebten Plattformen mit saveplays.com, dem führenden kostenlosen Online-Video-Downloader, herunter. Speichern Sie Videos einfach in verschiedenen Formaten und Auflösungen. Jetzt mit dem Download starten!",
    image: "/images/saveplays.png",
    keywords: ["Video-Downloader", "Online-Video", "kostenloser Download"],
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
                "Der führende kostenlose Online-Video-Downloader für verschiedene Plattformen.",
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
    lang: "de",
    locale: "de_DE",
    nofollow: false,
    noindex: false,
};
