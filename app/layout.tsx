import type React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anton Romeo | AI Full Stack Engineer",
  description:
    "Anton Romeo - AI Full Stack Engineer with 10 years of experience building production-grade web and mobile applications powered by modern AI systems. Specialized in LLM-driven features, RAG pipelines, and intelligent backend services. Based in Edmundston, NB, Canada.",
  keywords: [
    "Anton Romeo",
    "AI Full Stack Engineer",
    "LLM Developer",
    "React.js Developer",
    "Next.js Developer",
    "FastAPI",
    "Python Developer",
    "RAG Pipelines",
    "Vector Databases",
    "AI Microservices",
    "AWS",
    "Cloud Computing",
    "Docker",
    "Kubernetes",
    "Edmundston New Brunswick",
    "Canada",
    "LangChain",
    "OpenAI GPT",
    "Semantic Search",
    "AI Integration",
  ],
  authors: [{ name: "Anton Romeo" }],
  creator: "Anton Romeo",
  publisher: "Anton Romeo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://anton-romeo.vercel.app/"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://anton-romeo.vercel.app/",
    title: "Anton Romeo | AI Full Stack Engineer",
    description:
      "Anton Romeo - AI Full Stack Engineer with 10 years of experience in LLM-driven features, RAG pipelines, and intelligent backend services. Based in Edmundston, NB, Canada.",
    siteName: "Anton Romeo Portfolio",
    images: [
      {
        url: "/anton.jpg",
        width: 1200,
        height: 630,
        alt: "Anton Romeo - AI Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anton Romeo | AI Full Stack Engineer",
    description:
      "AI Full Stack Engineer with 10 years of experience specializing in LLM-driven features, RAG pipelines, and intelligent backend services.",
    images: ["/anton.jpg"],
    creator: "@antonromeo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/anton.jpg" sizes="any" />
        <link rel="apple-touch-icon" href="/anton.jpg" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Additional meta tags for enhanced SEO */}
        <meta name="author" content="Anton Romeo" />
        <meta name="geo.region" content="CA-NB" />
        <meta name="geo.placename" content="Edmundston, New Brunswick" />
        <meta name="geo.position" content="47.3694;-68.3252" />
        <meta name="ICBM" content="47.3694, -68.3252" />

        {/* Professional and contact information */}
        <meta name="contact" content="antonr24710@gmail.com" />
        <meta name="reply-to" content="antonr24710@gmail.com" />

        {/* Structured Data for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Anton Romeo",
              jobTitle: "AI Full Stack Engineer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Edmundston",
                addressRegion: "New Brunswick",
                addressCountry: "Canada",
              },
              email: "antonr24710@gmail.com",
              url: "https://anton-romeo-portfolio.vercel.app/",
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "University of New Brunswick",
              },
              knowsAbout: [
                "AI Full Stack Engineering",
                "LLM Integration",
                "RAG Pipelines",
                "React.js",
                "Next.js",
                "FastAPI",
                "Python",
                "Node.js",
                "AWS",
                "Docker",
                "Kubernetes",
                "Vector Databases",
                "Semantic Search",
                "AI Microservices",
              ],
              description:
                "AI Full Stack Engineer with 10 years of experience building production-grade web and mobile applications powered by modern AI systems. Specialized in LLM-driven features, RAG pipelines, and intelligent backend services.",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
