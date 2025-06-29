import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/client-layout";
import { StarsBackground } from "@/components/animate-ui/backgrounds/stars";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keith Phiri | Digital Creative & Developer",
  description:
    "Welcome to Keith Phiri's portfolio, creating a synergy between creativity and technical prowess. Explore our resources, get expert help, and grow today!",
  keywords:
    "web design, animation, graphic design, digital marketing, Zimbabwe, Rodneytech, PixelPyre",
  authors: [{ name: "Rodneytech Inc." }],
  openGraph: {
    type: "website",
    title: "Keith Phiri | Digital Creative & Developer",
    description:
      "Welcome to Keith Phiri's portfolio, creating a synergy between creativity and technical prowess.",
    images: ["/assets/images/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keith Rodney | Digital Creative & Developer",
    description:
      "Welcome to Keith Rodney Phiri's portfolio, creating a synergy between creativity and technical prowess.",
    images: ["/assets/images/preview.jpg"],
  },
  icons: {
    icon: "/assets/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Permissions-Policy" content="accelerometer=(self)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Rodneytech Inc.",
              url: "https://keith.rodneytechinc.co.zw.com",
              logo: "https://www.rodneytechinc.co.zw/assets/images/logos/rti_logo_white.png",
              sameAs: [
                "https://www.facebook.com/rodneytechinc/",
                "https://www.twitter.com/rodneytechinc",
                "https://www.linkedin.com/in/keithrodneytech/",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} bg-dark-900 text-gray-200 antialiased`}
      >
        <StarsBackground className="absolute inset-0 flex items-center justify-center rounded-xl" />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
