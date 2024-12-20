import type { SeoProps } from "../partials/head";
export const title = "Téléchargeur de Vidéos en Ligne Gratuit";
export const placeholder = "Collez votre lien ici";
export const featuresGridContent = {
    youtube: {
        ariaLabel: "Téléchargeur YouTube",
        title: "Téléchargeur YouTube",
        description: "Téléchargez des vidéos en plusieurs formats et résolutions depuis YouTube",
    },
    facebook: {
        ariaLabel: "Téléchargeur Facebook",
        title: "Téléchargeur Facebook",
        description: "Enregistrez des vidéos de Facebook avec des téléchargements de haute qualité",
    },
    instagram: {
        ariaLabel: "Téléchargeur Instagram",
        title: "Téléchargeur Instagram",
        description: "Téléchargez facilement des reels, publications et stories depuis Instagram",
    },
    twitter: {
        ariaLabel: "Téléchargeur Twitter",
        title: "Téléchargeur X (Twitter)",
        description: "Téléchargez des vidéos et médias de Twitter (X) en un seul clic",
    },
};
export const mainContent = {
    title: "Téléchargeur de Vidéos en Ligne Gratuit.",
    guideTitle: "Guide pour Utiliser le Téléchargeur de Vidéos en Ligne de SavePlays.com",
    introduction:
        "Téléchargez efficacement des vidéos et de la musique avec SavePlays.com, le leader des téléchargeurs de vidéos en ligne. Récupérez vos médias préférés directement depuis le web sans besoin de logiciels supplémentaires. Notre plateforme conviviale garantit un téléchargement simple et efficace.",
    details:
        "Accédez facilement et téléchargez un large éventail de contenus, des films à succès et séries TV tendances aux extraits sportifs captivants. Collez simplement l'URL de la vidéo dans le champ spécifié et appuyez sur le bouton Télécharger.",
    highQualityTitle: "Téléchargez des Vidéos MP4 de Haute Qualité",
    highQualityDescription:
        "Le streaming de vidéos en ligne avec une connexion rapide offre un accès immédiat, mais la lecture hors ligne a ses propres avantages. SavePlays.com propose un puissant téléchargeur de vidéos qui conserve vos téléchargements en qualité visuelle optimale, vous permettant d'enregistrer des vidéos en format MP4 haute définition.",
    benefits:
        "Avec notre service fiable, profitez de vos vidéos préférées à tout moment et en tout lieu, en les convertissant et les enregistrant en fichiers HD MP4 de haute qualité.",
    howToTitle: "Comment Télécharger des Vidéos en Ligne au Format MP4 et en Haute Définition",
    steps: {
        step1: {
            title: "Collez votre lien vidéo.",
            description:
                "Copiez l'URL de la vidéo souhaitée depuis votre plateforme préférée et collez-la dans le champ d'entrée sur la page d'accueil de SavePlays.com.",
        },
        step2: {
            title: "Sélectionnez la qualité de téléchargement.",
            description:
                "Notre plateforme propose un choix de résolutions et de formats. Choisissez celui qui correspond à vos besoins.",
        },
        step3: {
            title: "Profitez des vidéos téléchargées.",
            description:
                "Cliquez sur le bouton Télécharger et enregistrez le fichier vidéo directement sur votre appareil. Lisez-le à tout moment, sans dépendre d'Internet.",
        },
    },
};
export const featuresAndCompatibilities = {
    resolutionTitle:
        "Découvrez différentes résolutions vidéo - Support de téléchargement de SD à 4K",
    resolutionDescription:
        "Notre téléchargeur de vidéos polyvalent offre une large gamme de résolutions vidéo, y compris MP4, SD, HD, FullHD, 2K, et 4K. Les options de résolution disponibles pour le téléchargement dépendent de la qualité originale de la vidéo source. Par exemple, si une vidéo est téléchargée en 1080p, vous pouvez la télécharger avec la même qualité haute définition (HD).",
    resolutionImageAlt: "Téléchargez des vidéos HD, Full HD et 4K",
    resolutionImageTitle: "Téléchargez des vidéos HD, Full HD et 4K",
    compatibilityTitle: "Compatibilité des navigateurs - Téléchargez des vidéos facilement",
    compatibilityDescription:
        "Optimisez votre expérience de téléchargement vidéo grâce à la parfaite compatibilité de notre outil avec tous les principaux navigateurs, y compris Google Chrome, Mozilla Firefox, Safari, Opera et autres navigateurs basés sur Chromium. Profitez de téléchargements fluides et efficaces sur toutes ces plateformes.",
    compatibilityImageAlt:
        "Compatible avec les principaux navigateurs pour le téléchargement de vidéos",
};
export const pageProps: SeoProps = {
    title: "Téléchargeur de Vidéos en Ligne Gratuit - saveplays.com",
    description:
        "Téléchargez des vidéos depuis les plateformes populaires avec saveplays.com, le leader des téléchargeurs de vidéos en ligne gratuits. Enregistrez facilement des vidéos dans divers formats et résolutions. Commencez à télécharger dès maintenant !",
    image: "/images/saveplays-fr.png",
    keywords: ["téléchargeur de vidéos", "vidéo en ligne", "téléchargement gratuit"],
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
                "Le leader des téléchargeurs de vidéos en ligne gratuits pour diverses plateformes.",
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
    lang: "fr",
    locale: "fr_FR",
    nofollow: false,
    noindex: false,
};
