"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export function ModelIntegration() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [result, setResult] = useState<string | null>(null)

  // Start the webcam stream
  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true })
        if (videoRef.current) {
          videoRef.current.srcObject = stream
        }
      } catch (error) {
        console.error("Error accessing webcam:", error)
      }
    }

    startWebcam()
  }, [])

  // Function to simulate AI processing
  const handleAnalyze = async () => {
    setResult("Processing...")

    // Simulate delay (AI model processing)
    setTimeout(() => {
      setResult("Plastic Bottle (87% confidence)")
    }, 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>TensorFlow Model Integration</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Label>Live Camera Feed</Label>
          <video ref={videoRef} autoPlay playsInline className="w-full h-auto rounded shadow-lg" />

          <Button onClick={handleAnalyze}>Analyze Frame</Button>

          {result && (
            <div className="mt-4">
              <h3 className="font-semibold">Result:</h3>
              <p>{result}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}