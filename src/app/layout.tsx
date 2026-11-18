import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import { PHONE_NUMBER, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME} | Deep TMS & Spravato® in Greenwood Village, CO`,
  description: `FDA-cleared Deep TMS and FDA-approved Spravato® for treatment-resistant depression in Greenwood Village, CO. Whole-person psychiatric care. Book a free consultation or call ${PHONE_NUMBER}.`,
  icons: {
    icon: [
      { url: "/images/favicon.png", type: "image/png", sizes: "256x256" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/favicon.png",
  },
  keywords: [
    "Transcend Functional Health",
    "TMS Greenwood Village",
    "Deep TMS Denver",
    "BrainsWay TMS Colorado",
    "Spravato Greenwood Village",
    "treatment-resistant depression Denver",
  ],
  openGraph: {
    title: `${SITE_NAME} | Relief for Treatment-Resistant Depression`,
    description:
      "Deep TMS and Spravato® with a whole-person care team in Greenwood Village, CO. Free consultation.",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#top" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBar />
        <Script src="https://go.4tms.com/js/form_embed.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
