import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
    title: "Light | The Metaverse Explorer",
    description:
        "Light enables you to discover connections that weren't possible before. With Light, you can discover mutual DAOs you have contributed with, gather around your mutual NFT collections, and see past common POAP events that you have attended to. Users can also see an aggregated profile of activity that is associated with your wallet, visualizing their identity in the metaverse.",
    icons: "/favicon.svg",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            data-theme="dark"
            style={{
                colorScheme: "dark",
            }}
        >
            <body>{children}</body>
        </html>
    )
}
