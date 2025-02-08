import "./globals.css"
import { Inter } from "next/font/google"
import { Sidebar } from "../components/Sidebar"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Trash Identification Dashboard",
  description: "Hackathon project for identifying trash using machine learning",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <div className="flex-1 overflow-auto p-8">{children}</div>
        </div>
      </body>
    </html>
  )
}

