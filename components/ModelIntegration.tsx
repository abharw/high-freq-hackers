"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ModelIntegration() {
  const [imageUrl, setImageUrl] = useState("")
  const [result, setResult] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate API call to TensorFlow model
    setResult("Processing...")
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input
              id="imageUrl"
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Enter image URL"
              required
            />
          </div>
          <Button type="submit">Analyze Image</Button>
        </form>
        {result && (
          <div className="mt-4">
            <h3 className="font-semibold">Result:</h3>
            <p>{result}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

