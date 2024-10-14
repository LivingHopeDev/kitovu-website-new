import type { Metadata } from "next";
// import "./globals.css";
import "../styles/custom.css";
import "./globals.css";
import { siteConfig } from "@/constant/config";
import Nav from "@components/Nav";

// export const metadata: Metadata = {
//   metadataBase: new URL(siteConfig.url),
//   title: {
//     default: siteConfig.title, // Main title
//     template: `%s | ${siteConfig.title}`, // Page title format
//   },
//   description: siteConfig.description, // Meta description for SEO
//   robots: { index: true, follow: true }, // Allow search engines to index and follow links
//   icons: {
//     icon: "/favicon/favicon.ico", // Main favicon
//     apple: "/favicon/apple-touch-icon.png", // Apple devices icon
//   },
//   manifest: "/favicon/site.webmanifest", // Web manifest for progressive web apps
//   openGraph: {
//     url: siteConfig.url,
//     title: siteConfig.title,
//     description: siteConfig.description,
//     siteName: siteConfig.title,
//     images: [`${siteConfig.url}/images/og.jpg`], // OpenGraph image for sharing
//     type: "website",
//     locale: "en_US",
//   },
//   twitter: {
//     card: "summary_large_image", // Large image format for Twitter cards
//     title: siteConfig.title,
//     description: siteConfig.description,
//     images: [`${siteConfig.url}/images/og.jpg`], // Twitter share image
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
