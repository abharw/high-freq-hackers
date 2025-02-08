"use client"

import { useState } from "react"
import { Sidebar } from "./Sidebar"
import { ImageVideoGallery } from "./ImageVideoGallery"
import { DataDisplay } from "./DataDisplay"
import { ModelIntegration } from "./ModelIntegration"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("gallery")

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">Trash Identification Dashboard</h1>
          {activeTab === "gallery" && <ImageVideoGallery />}
          {activeTab === "data" && <DataDisplay />}
          {activeTab === "model" && <ModelIntegration />}
        </div>
      </div>
    </div>
  )
}

