import type { SeoProps } from "../partials/head";
import type { _featuresGridContent, _mainContent, _featuresAndCompatibilities, _downloadResult } from "./content";
export const title = "Бесплатный онлайн загрузчик видео";
export const placeholder = "Вставьте вашу ссылку сюда";
export const featuresGridContent: _featuresGridContent = {
    youtube: {
        ariaLabel: "Загрузчик YouTube",
        title: "Загрузчик YouTube",
        description: "Скачивайте видео с YouTube в разных форматах и разрешениях",
    },
    facebook: {
        ariaLabel: "Загрузчик Facebook",
        title: "Загрузчик Facebook",
        description: "Сохраняйте видео с Facebook в высоком качестве",
    },
    instagram: {
        ariaLabel: "Загрузчик Instagram",
        title: "Загрузчик Instagram",
        description: "Легко скачивайте рилсы, посты и истории из Instagram",
    },
    twitter: {
        ariaLabel: "Загрузчик Twitter",
        title: "Загрузчик X (Twitter)",
        description: "Скачивайте видео и медиа с X (Twitter) одним кликом",
    },
};
export const mainContent: _mainContent = {
    title: "Бесплатный онлайн загрузчик видео.",
    guideTitle: "Руководство по использованию онлайн загрузчика видео на SavePlays.com",
    introduction:
        "Эффективно скачивайте видео и музыку с помощью SavePlays.com — ведущего онлайн загрузчика видео. Сохраняйте свои любимые медиафайлы напрямую из интернета без необходимости установки дополнительного программного обеспечения. Наша удобная платформа делает процесс скачивания простым и эффективным.",
    details:
        "Легко доступ к широкому спектру контента, от популярных фильмов и трендовых телешоу до увлекательных спортивных клипов. Просто вставьте URL видео в указанное поле и нажмите кнопку «Скачать».",
    highQualityTitle: "Скачивайте видео MP4 высокого качества",
    highQualityDescription:
        "Потоковое воспроизведение видео онлайн обеспечивает мгновенный доступ, но воспроизведение оффлайн имеет свои преимущества. SavePlays.com предоставляет мощный загрузчик видео, который сохраняет ваши загрузки в превосходном качестве, позволяя скачивать видео в четком HD-формате MP4.",
    benefits:
        "С нашим надежным сервисом наслаждайтесь любимыми видео в любое время и в любом месте, конвертируя и сохраняя их в качестве HD MP4 файлов.",
    howToTitle: "Как скачать видео онлайн в формате MP4 высокого разрешения",
    steps: {
        step1: {
            title: "Вставьте ссылку на видео.",
            description:
                "Скопируйте URL нужного видео с выбранной вами платформы и вставьте его в поле на главной странице SavePlays.com.",
        },
        step2: {
            title: "Выберите качество загрузки.",
            description:
                "Наша платформа предлагает выбор разрешений и форматов. Выберите подходящий вам вариант.",
        },
        step3: {
            title: "Наслаждайтесь загруженными видео.",
            description:
                "Нажмите кнопку «Скачать» и сохраните файл видео на своем устройстве. Воспроизводите его в любое время без подключения к интернету.",
        },
    },
};
export const featuresAndCompatibilities: _featuresAndCompatibilities = {
    resolutionTitle:
        "Поддержка различных разрешений видео — от SD до 4K",
    resolutionDescription:
        "Наш универсальный загрузчик видео поддерживает широкий диапазон разрешений, включая MP4, SD, HD, FullHD, 2K и 4K. Доступные опции зависят от исходного качества видео. Например, если видео загружено в 1080p, вы можете скачать его в том же высоком разрешении.",
    resolutionImageAlt: "Скачивайте HD, Full HD и 4K видео",
    resolutionImageTitle: "Скачивайте HD, Full HD и 4K видео",
    compatibilityTitle: "Совместимость с браузерами — скачивайте легко",
    compatibilityDescription:
        "Наш инструмент идеально совместим с основными браузерами, включая Google Chrome, Mozilla Firefox, Safari, Opera и другие на базе Chromium. Наслаждайтесь удобным и эффективным процессом скачивания на любой из этих платформ.",
    compatibilityImageAlt:
        "Совместимость с основными браузерами для скачивания видео",
};
export const pageProps: SeoProps = {
    title: "Бесплатный онлайн загрузчик видео - saveplays.com",
    description:
        "Скачивайте видео с популярных платформ с помощью saveplays.com — ведущего бесплатного онлайн загрузчика видео. Легко сохраняйте видео в различных форматах и разрешениях. Начните скачивание уже сейчас!",
    image: "https://www.saveplays.com/saveplays-ru.png",
    keywords: ["загрузчик видео", "онлайн видео", "бесплатное скачивание"],
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
                "Ведущий бесплатный онлайн загрузчик видео для различных платформ.",
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
    locale: "ru_RU",
    nofollow: false,
    noindex: false,
};

export const downloadResult: _downloadResult = {
    select_quality: "Выберите качество",
    download: "Скачать"
};