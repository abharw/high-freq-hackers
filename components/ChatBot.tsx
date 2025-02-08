"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ChatBot() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<{ sender: string; text: string }[]>([]);
  const [wasteData ] = useState({
    trashWeight: 5, // kg
    recyclablesWeight: 3, // kg
    compostableWeight: 2, // kg
    topItems: ["plastic bottles", "aluminum cans", "food waste"],
  });

  const sendMessage = async () => {
    if (!message.trim()) return;
    const newChat = [...chat, { sender: "User", text: message }];
    setChat(newChat);

    try {
      const response = await axios.post("/api/chat", { message, wasteData });
      setChat([...newChat, { sender: "AI", text: response.data.reply }]);
    } catch (error) {
      setChat([...newChat, { sender: "AI", text: "Error: Unable to get a response." }]);
    }

    setMessage("");
  };

  return (
    <Card className="w-full max-w-lg mx-auto mt-8 shadow-lg rounded-lg">
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold text-green-700">
          ♻️ Sustainability Chatbot
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80 overflow-y-auto border p-4 rounded bg-gray-50">
          {chat.map((msg, index) => (
            <p
              key={index}
              className={`mb-2 p-2 rounded-lg ${
                msg.sender === "User"
                  ? "bg-blue-100 text-right text-blue-700"
                  : "bg-green-100 text-left text-green-700"
              }`}
            >
              <strong>{msg.sender}:</strong> {msg.text}
            </p>
          ))}
        </div>

        {/* Waste Tracking Summary */}
        <div className="mt-4 p-3 bg-gray-100 rounded text-sm">
          <h3 className="font-semibold text-gray-700">Your Waste Data:</h3>
          <p>🗑️ Trash: {wasteData.trashWeight} kg</p>
          <p>♻️ Recyclables: {wasteData.recyclablesWeight} kg</p>
          <p>🌱 Compostables: {wasteData.compostableWeight} kg</p>
          <p>🔍 Top Items: {wasteData.topItems.join(", ")}</p>
        </div>

        <div className="flex mt-4">
          <Input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask about sustainability..."
            className="flex-grow border p-2 rounded"
          />
          <Button onClick={sendMessage} className="ml-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Send
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}