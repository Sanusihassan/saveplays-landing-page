// typescript
import type { SeoProps } from "../partials/head";
import type { _featuresAndCompatibilities, _featuresGridContent, _mainContent } from "./content";

export const title = "Pengunduh Video Online Gratis";
export const placeholder = "Tempelkan tautan Anda di sini";
export const featuresGridContent: _featuresGridContent = {
    youtube: {
        ariaLabel: "Pengunduh YouTube",
        title: "Pengunduh YouTube",
        description: "Unduh video dalam berbagai format dan resolusi dari YouTube",
    },
    facebook: {
        ariaLabel: "Pengunduh Facebook",
        title: "Pengunduh Facebook",
        description: "Simpan video dari Facebook dengan unduhan berkualitas tinggi",
    },
    instagram: {
        ariaLabel: "Pengunduh Instagram",
        title: "Pengunduh Instagram",
        description: "Unduh reel, kiriman, dan cerita Instagram dengan mudah",
    },
    twitter: {
        ariaLabel: "Pengunduh Twitter",
        title: "Pengunduh X (Twitter)",
        description: "Ambil video dan media dari X (Twitter) hanya dengan satu klik",
    },
};
export const mainContent: _mainContent = {
    title: "Pengunduh Video Online Gratis.",
    guideTitle: "Panduan Menggunakan Pengunduh Video Online SavePlays.com",
    introduction:
        "Unduh video dan musik secara efisien dengan SavePlays.com, Pengunduh Video Online terkemuka. Simpan media favorit Anda langsung dari web tanpa memerlukan perangkat lunak tambahan. Platform kami yang ramah pengguna memastikan proses pengunduhan video menjadi mudah dan efektif.",
    details:
        "Akses dan unduh berbagai konten dengan mudah, mulai dari film teratas, serial TV yang sedang tren, hingga klip olahraga yang seru. Cukup tempelkan URL video ke bidang yang ditentukan dan tekan tombol Unduh.",
    highQualityTitle: "Unduh Video MP4 Berkualitas Tinggi",
    highQualityDescription:
        "Streaming video online dengan koneksi cepat memberikan akses instan, tetapi pemutaran offline memiliki keunggulan tersendiri. SavePlays.com menyediakan pengunduh video yang andal untuk menjaga kualitas visual unduhan Anda, memungkinkan Anda menyimpan video dalam format MP4 berkualitas tinggi.",
    benefits:
        "Dengan layanan terpercaya kami, nikmati video favorit Anda kapan saja dan di mana saja dengan mengonversi dan menyimpannya sebagai file HD MP4 berkualitas tinggi.",
    howToTitle: "Cara Mengunduh Video Online dalam Format MP4 dengan Resolusi Tinggi",
    steps: {
        step1: {
            title: "Tempelkan tautan video Anda.",
            description:
                "Salin URL video yang diinginkan dari platform pilihan Anda dan tempelkan ke bidang input di halaman utama SavePlays.com.",
        },
        step2: {
            title: "Pilih kualitas unduhan.",
            description:
                "Platform kami menawarkan berbagai pilihan resolusi dan format. Pilih yang sesuai dengan kebutuhan Anda.",
        },
        step3: {
            title: "Nikmati video yang diunduh.",
            description:
                "Klik tombol Unduh dan simpan file video langsung ke perangkat Anda. Putar kapan saja tanpa tergantung internet.",
        },
    },
};
export const featuresAndCompatibilities: _featuresAndCompatibilities = {
    resolutionTitle:
        "Pilih berbagai resolusi video - Dari SD hingga dukungan unduhan 4K",
    resolutionDescription:
        "Pengunduh video serbaguna kami menawarkan berbagai resolusi video, termasuk MP4, SD, HD, FullHD, 2K, dan 4K. Opsi resolusi yang tersedia tergantung pada kualitas asli video sumber. Sebagai contoh, jika video diunggah dalam 1080p, Anda dapat mengunduhnya dalam kualitas definisi tinggi (HD) yang sama.",
    resolutionImageAlt: "Unduh video HD, Full HD, dan 4K",
    resolutionImageTitle: "Unduh video HD, Full HD, dan 4K",
    compatibilityTitle: "Kompatibilitas browser - Unduh video dengan mudah",
    compatibilityDescription:
        "Maksimalkan pengalaman unduhan video Anda dengan kompatibilitas alat kami dengan semua browser utama, termasuk Google Chrome, Mozilla Firefox, Safari, Opera, dan browser berbasis Chromium lainnya. Nikmati unduhan video yang lancar dan efisien di platform tersebut.",
    compatibilityImageAlt:
        "Kompatibel dengan browser utama untuk mengunduh video",
};
export const pageProps: SeoProps = {
    title: "Pengunduh Video Online Gratis - saveplays.com",
    description:
        "Unduh video dari platform populer dengan saveplays.com, pengunduh video online gratis terkemuka. Simpan video dengan mudah dalam berbagai format dan resolusi. Mulailah mengunduh sekarang!",
    image: "/images/saveplays-id.png",
    keywords: ["pengunduh video", "video online", "unduh gratis"],
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
                "Pengunduh video online gratis terkemuka untuk berbagai platform.",
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
    locale: "id_ID",
    nofollow: false,
    noindex: false,
};