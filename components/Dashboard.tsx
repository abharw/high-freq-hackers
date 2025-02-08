"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { ImageVideoGallery } from "./ImageVideoGallery";
import{ DataDisplay} from "./DataDisplay";
import { ModelIntegration } from "./ModelIntegration";
import ChatBot from "./ChatBot"; // ✅ Import chatbot

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("gallery"); // ✅ State for tabs

  return (
    <div className="flex">
      {/* ✅ Pass activeTab and setActiveTab as props */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">Trash Identification Dashboard</h1>

          {/* ✅ Render components based on activeTab */}
          {activeTab === "gallery" && <ImageVideoGallery />}
          {activeTab === "data" && <DataDisplay />}
          {activeTab === "model" && <ModelIntegration />}
          {activeTab === "chatbot" && <ChatBot />} {/* ✅ Add chatbot */}
        </div>
      </div>
    </div>
  );
}

