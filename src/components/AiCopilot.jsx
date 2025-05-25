import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

const dummyAIResponse = (input) => {
  // Simple AI logic for demonstration
  if (!input.trim()) return "";
  if (input.toLowerCase().includes("order")) {
    return "It looks like you have a question about your order. Please provide your order ID, and I’ll help you track or resolve any issues!";
  }
  if (input.toLowerCase().includes("payment")) {
    return "Payment issues can happen for various reasons. Please check your payment method or try again. If the problem persists, contact support.";
  }
  if (input.toLowerCase().includes("reset password")) {
    return "To reset your password, click on 'Forgot Password' at login and follow the instructions sent to your email.";
  }
  if (input.toLowerCase().includes("discount")) {
    return "We offer discounts for students and first-time users. Please provide your student ID or check our offers page for more details.";
  }
  return "Thank you for your query! Our AI Copilot is here to help. Please provide more details about your issue so I can assist you better.";
};

const AiCopilot = () => {
  const [input, setInput] = useState("");
  const [conversation, setConversation] = useState([
    {
      sender: "ai",
      text: "Hi! I’m your AI Copilot. Ask me anything about orders, payments, discounts, or account issues.",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setConversation((prev) => [...prev, userMessage]);
    setLoading(true);

    setTimeout(() => {
      const aiReply = dummyAIResponse(input);
      setConversation((prev) => [...prev, { sender: "ai", text: aiReply }]);
      setLoading(false);
    }, 900);

    setInput("");
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto mb-3">
        {conversation.map((msg, idx) => (
          <div
            key={idx}
            className={`flex mb-3 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-xs text-sm shadow ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-gray-100 text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start mb-3">
            <div className="px-4 py-2 rounded-2xl max-w-xs text-sm shadow bg-gray-100 text-gray-800 rounded-bl-none animate-pulse">
              AI Copilot is typing...
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center border-t pt-2">
        <input
          type="text"
          className="flex-1 px-4 py-2 rounded-full border focus:outline-none focus:ring focus:border-blue-400 text-sm"
          placeholder="Ask AI Copilot..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          disabled={loading}
        />
        <button
          onClick={handleSend}
          className="ml-2 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          disabled={loading}
        >
          <FiSend size={18} />
        </button>
      </div>
    </div>
  );
};

export default AiCopilot;
