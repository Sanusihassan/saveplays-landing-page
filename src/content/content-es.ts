import type { _downloadResult, _featuresAndCompatibilities, _featuresGridContent, _mainContent } from "./content";
import type { SeoProps } from "../partials/head";

export const title = "Descargador de Videos Online Gratis";
export const placeholder = "Pega tu enlace aquí";
export const featuresGridContent: _featuresGridContent = {
    youtube: {
        ariaLabel: "Descargador de YouTube",
        title: "Descargador de YouTube",
        description: "Descarga videos en múltiples formatos y resoluciones desde YouTube",
    },
    facebook: {
        ariaLabel: "Descargador de Facebook",
        title: "Descargador de Facebook",
        description: "Guarda videos de Facebook con descargas de alta calidad",
    },
    instagram: {
        ariaLabel: "Descargador de Instagram",
        title: "Descargador de Instagram",
        description: "Descarga fácilmente reels, publicaciones e historias de Instagram",
    },
    twitter: {
        ariaLabel: "Descargador de Twitter",
        title: "Descargador de X (Twitter)",
        description: "Descarga videos y medios de Twitter (X) con un solo clic",
    },
    bilibili: {
        ariaLabel: "Descargador de Bilibili",
        title: "Descargador de Bilibili",
        description: "Descarga videos y contenido de Bilibili en calidad HD",
    },
    bluesky: {
        ariaLabel: "Descargador de Bluesky",
        title: "Descargador de Bluesky",
        description: "Guarda publicaciones y medios de la red social Bluesky",
    },
    snapchat: {
        ariaLabel: "Descargador de Snapchat",
        title: "Descargador de Snapchat",
        description: "Descarga historias y contenido compartido de Snapchat de manera segura",
    },
    dailymotion: {
        ariaLabel: "Descargador de Dailymotion",
        title: "Descargador de Dailymotion",
        description: "Descarga videos de Dailymotion en la calidad que prefieras",
    }
};
export const mainContent: _mainContent = {
    title: "Descargador de Videos Online Gratis.",
    guideTitle: "Guía para Usar el Descargador de Videos Online de SavePlays.com",
    introduction:
        "Descarga videos y música de manera eficiente con SavePlays.com, el principal Descargador de Videos Online. Asegura tus medios favoritos directamente desde la web sin necesidad de software adicional. Nuestra plataforma fácil de usar garantiza que descargar videos sea simple y efectivo.",
    details:
        "Accede y descarga fácilmente una amplia variedad de contenido, desde películas populares y series de TV de moda hasta emocionantes clips deportivos. Simplemente pega la URL del video en el campo especificado y presiona el botón Descargar.",
    highQualityTitle: "Descarga Videos MP4 de Alta Calidad",
    highQualityDescription:
        "Transmitir videos en línea con una conexión rápida ofrece acceso inmediato, pero la reproducción sin conexión tiene sus propias ventajas. SavePlays.com proporciona un poderoso descargador de videos que mantiene tus descargas con una calidad visual impecable, permitiéndote guardar videos en formato MP4 de alta definición.",
    benefits:
        "Con nuestro servicio confiable, disfruta de tus videos favoritos en cualquier momento y lugar, convirtiéndolos y guardándolos como archivos MP4 en HD de alta calidad.",
    howToTitle: "Cómo Descargar Videos Online en Formato MP4 con Alta Definición",
    steps: {
        step1: {
            title: "Pega el enlace de tu video.",
            description:
                "Copia la URL del video deseado desde tu plataforma preferida y pégala en el campo de entrada en la página principal de SavePlays.com.",
        },
        step2: {
            title: "Selecciona la calidad de descarga.",
            description:
                "Nuestra plataforma ofrece una variedad de resoluciones y formatos. Elige el que mejor se adapte a tus necesidades.",
        },
        step3: {
            title: "Disfruta de los videos descargados.",
            description:
                "Haz clic en el botón Descargar y guarda el archivo de video directamente en tu dispositivo. Reprodúcelo en cualquier momento sin necesidad de internet.",
        },
    },
};
export const featuresAndCompatibilities: _featuresAndCompatibilities = {
    resolutionTitle:
        "Explora diferentes resoluciones de video: desde SD hasta soporte para descargas en 4K",
    resolutionDescription:
        "Nuestro versátil descargador de videos ofrece una amplia gama de resoluciones de video, incluyendo MP4, SD, HD, FullHD, 2K y 4K. Las opciones de resolución disponibles para la descarga dependen de la calidad original del video fuente. Por ejemplo, si un video se sube en 1080p, puedes descargarlo en la misma alta definición (HD).",
    resolutionImageAlt: "Descarga videos en HD, Full HD y 4K",
    resolutionImageTitle: "Descarga videos en HD, Full HD y 4K",
    compatibilityTitle: "Compatibilidad con navegadores: descarga videos fácilmente",
    compatibilityDescription:
        "Maximiza tu experiencia de descarga de videos con la perfecta compatibilidad de nuestra herramienta en todos los navegadores principales, incluyendo Google Chrome, Mozilla Firefox, Safari, Opera y otros navegadores basados en Chromium. Disfruta de descargas de videos fluidas y eficientes en cualquiera de estas plataformas.",
    compatibilityImageAlt:
        "Compatible con navegadores principales para descargas de videos",
};
export const pageProps: SeoProps = {
    title: "Descargador de Videos Online Gratis - saveplays.com",
    description:
        "Descarga videos de plataformas populares con saveplays.com, el principal descargador de videos online gratis. Guarda videos fácilmente en varios formatos y resoluciones. ¡Comienza a descargar ahora!",
    image: "https://www.saveplays.com/saveplays-es.png",
    keywords: ["descargador de videos", "video online", "descarga gratuita"],
    type: "website",
    publishedTime: "2024-01-05T00:00:00+00:00",
    modifiedTime: "2024-09-27T15:56:10+00:00",
    twitter: {
        handle: "saveplaysx",
        site: "saveplaysx",
    },
    structuredData: [
        {
            "@context": "http://schema.org/",
            "@type": "SoftwareApplication",
            name: "saveplays",
            description:
                "El principal descargador de videos online gratis para varias plataformas.",
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
    locale: "es_ES",
    nofollow: false,
    noindex: false,
};

export const downloadResult: _downloadResult = {
    select_quality: "Seleccionar calidad",
    download: "Descargar"
};
