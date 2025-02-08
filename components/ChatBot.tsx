"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ChatBot() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<{ sender: string; text: string }[]>([]);

  const sendMessage = async () => {
    if (!message.trim()) return;
    const newChat = [...chat, { sender: "User", text: message }];
    setChat(newChat);

    try {
      const response = await axios.post("/api/chat", { message });
      setChat([...newChat, { sender: "AI", text: response.data.reply }]);
    } catch (error) {
      setChat([...newChat, { sender: "AI", text: "Error: Unable to get a response." }]);
    }

    setMessage("");
  };

  return (
    <Card className="w-full max-w-lg mx-auto mt-8">
      <CardHeader>
        <CardTitle>AI Chatbot</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80 overflow-y-auto border p-4 rounded bg-gray-50">
          {chat.map((msg, index) => (
            <p key={index} className={`mb-2 ${msg.sender === "User" ? "text-right" : "text-left"}`}>
              <strong>{msg.sender}:</strong> {msg.text}
            </p>
          ))}
        </div>
        <div className="flex mt-4">
          <Input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-grow border p-2 rounded"
          />
          <Button onClick={sendMessage} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
            Send
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}