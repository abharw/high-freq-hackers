import { NextResponse } from "next/server";
import axios from "axios";

// Load environment variables
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export async function POST(req) {
  try {
    const { message } = await req.json();

    // Log request for debugging
    console.log("Received message:", message);

    // Call Google Gemini API
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [{ role: "user", parts: [{ text: message }] }],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Log response for debugging
    console.log("Gemini API Response:", response.data);

    // Extract response safely
    const reply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from Gemini";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Error calling Gemini API:", error.response?.data || error.message);

    return NextResponse.json(
      { error: "Failed to get response from Gemini", details: error.response?.data || error.message },
      { status: 500 }
    );
  }
}