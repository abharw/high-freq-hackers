import React from "react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export const Sidebar= ({ activeTab, setActiveTab }: SidebarProps) => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-lg font-semibold mb-4">Menu</h2>
      <ul>
        <li
          className={`p-2 cursor-pointer ${activeTab === "gallery" ? "bg-gray-700" : ""}`}
          onClick={() => setActiveTab("gallery")}
        >
          Image & Video Gallery
        </li>
        <li
          className={`p-2 cursor-pointer ${activeTab === "data" ? "bg-gray-700" : ""}`}
          onClick={() => setActiveTab("data")}
        >
          Data Display
        </li>
        <li
          className={`p-2 cursor-pointer ${activeTab === "model" ? "bg-gray-700" : ""}`}
          onClick={() => setActiveTab("model")}
        >
          Model Integration
        </li>
        <li
          className={`p-2 cursor-pointer ${activeTab === "chatbot" ? "bg-gray-700" : ""}`}
          onClick={() => setActiveTab("chatbot")}
        >
          Chatbot
        </li>
      </ul>
    </div>
  );
};