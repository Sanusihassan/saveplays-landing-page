export function generateVideoStructuredData(props: {
    title: string;
    description: string;
    image: string;
    canonical: string;
    publishedTime?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: props.title,
        description: props.description,
        thumbnailUrl: [props.image],
        uploadDate: props.publishedTime || new Date().toISOString(),
        duration: "PT0M11S",
        contentUrl: props.image,
        embedUrl: props.canonical,
    };
}

export function generateArticleStructuredData(props: {
    title: string;
    description: string;
    image: string;
    canonical: string;
    publishedTime?: string;
    modifiedTime?: string;
    locale: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": props.canonical,
        },
        headline: props.title,
        description: props.description,
        image: props.image,
        author: {
            "@type": "Organization",
            name: "SavePlaybacks.net",
        },
        publisher: {
            "@type": "Organization",
            name: "SavePlaybacks.net",
            logo: {
                "@type": "ImageObject",
                url: props.image,
            },
        },
        datePublished: props.publishedTime || new Date().toISOString(),
        dateModified: props.modifiedTime || new Date().toISOString(),
        inLanguage: props.locale.split("_")[0],
    };
}