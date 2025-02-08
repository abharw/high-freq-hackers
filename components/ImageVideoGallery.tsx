"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const mockImages = [
  "/placeholder.svg?height=200&width=300",
  "/placeholder.svg?height=200&width=300",
  "/placeholder.svg?height=200&width=300",
]

const mockVideos = ["https://example.com/video1.mp4", "https://example.com/video2.mp4"]

export function ImageVideoGallery() {
  const [activeTab, setActiveTab] = useState("images")

  return (
    <Card>
      <CardContent className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>
          <TabsContent value="images">
            <div className="grid grid-cols-3 gap-4 mt-4">
              {mockImages.map((src, index) => (
                <img
                  key={index}
                  src={src || "/placeholder.svg"}
                  alt={`Trash ${index + 1}`}
                  className="w-full h-auto rounded"
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="videos">
            <div className="grid grid-cols-2 gap-4 mt-4">
              {mockVideos.map((src, index) => (
                <video key={index} controls className="w-full h-auto rounded">
                  <source src={src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

