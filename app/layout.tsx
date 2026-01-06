import type React from "react"
import type { Metadata } from "next"
import { Fraunces } from "next/font/google"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Stratos - Preconstruction for Specialty Trades",
  description: "Fewer misses. Tighter bids. AI-native preconstruction that turns messy plan sets into defensible bid packages.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={fraunces.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
