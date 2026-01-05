import type React from "react"
import type { Metadata } from "next"
import Nav from "@/components/nav"
import Footer from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Takumi Shimada - Portfolio",
  description: "UI/UX Designer and Product Director Portfolio",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
