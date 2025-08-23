import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sahil Siddiqui Developer Portfolio",
  description:
    "Passionate web developer building fast, animated, and user-friendly websites. Available for freelance projects on Fiverr and Upwork.",
  keywords: "web developer, freelance, HTML, CSS, JavaScript, React, portfolio, Sahil Siddiqui",
  openGraph: {
    title: "Sahil Siddiqui Developer Portfolio",
    description: "From Learning to Launch – I Build Real Web Experiences",
    type: "website",
  },
    
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
