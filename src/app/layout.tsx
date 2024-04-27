import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import favicon from "/public/favicon-yes-no.ico";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <title>Should I?</title>
            <link rel="icon" type="image/x-icon" href={favicon.src}></link>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
