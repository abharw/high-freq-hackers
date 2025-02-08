import ChatBot from "@/components/ChatBot";  // ✅ Corrected Import

export default function ChatBotPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Your AI Chatbot</h1>
      <ChatBot />
    </div>
  );
}