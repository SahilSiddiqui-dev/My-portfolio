import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
   title: "Sahil Siddiqui | Web Developer Portfolio",
  description:
    "Explore the portfolio of Sahil Siddiqui — a passionate web developer building fast, modern, and user-friendly websites with React, Next.js, and Web3. Available for freelance projects on Fiverr and Upwork.",
  keywords: [
    "Sahil Siddiqui",
    "web developer",
    "React developer",
    "Next.js portfolio",
    "freelance web developer",
    "frontend developer",
    "JavaScript developer",
    "Upwork developer",
    "Fiverr developer"
  ],
  authors: [{ name: "Sahil Siddiqui" }],
  openGraph: {
    title: "Sahil Siddiqui | Web Developer Portfolio",
    description:
      "From learning to launching — I build real web experiences using React, Next.js, and Web3.",
    url: "https://sahilsiddiqui.site",
    siteName: "Sahil Siddiqui Portfolio",
    images: [
      {
        url: "https://sahilsiddiqui.site/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sahil Siddiqui Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Siddiqui | Web Developer Portfolio",
    description:
      "Portfolio of Sahil Siddiqui — React & Next.js Developer | Available for freelance projects.",
    images: ["https://sahilsiddiqui.site/og-image.jpg"],
    creator: "@yourtwitter", // add later if you have one
  },
  metadataBase: new URL("https://sahilsiddiqui.site"),
}
    
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="animated-bg">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
