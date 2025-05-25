import React, { useRef, useEffect, useState } from "react";
import { chatMessages } from "../data/dummyData";

const ChatWindow = ({ chat }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Load messages for the selected chat
    if (chat) {
      setMessages(chatMessages[chat.id] || []);
    }
  }, [chat]);

  useEffect(() => {
    // Scroll to bottom on new message
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || !chat) return;
    setMessages((prev) => [
      ...prev,
      {
        sender: "admin",
        text: input,
        time: "Now",
      },
    ]);
    setInput("");
  };

  if (!chat) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        Select a chat to view conversation
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Topbar */}
      <div className="flex items-center px-3 sm:px-6 py-3 sm:py-4 border-b bg-white">
        <img
          src={chat.avatar}
          alt={chat.customer}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover mr-3 sm:mr-4 border"
        />
        <div className="flex-1">
          <div className="font-semibold text-gray-900 text-sm sm:text-base">
            {chat.customer}
          </div>
          <div className="text-xs text-green-500 flex items-center">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block mr-1"></span>
            Active
          </div>
        </div>
        <span
          className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
            chat.status === "closed"
              ? "bg-gray-200 text-gray-500"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {chat.status === "closed" ? "Closed" : "Assigned"}
        </span>
      </div>
      {/* Chat Content */}
      <div className="flex-1 overflow-y-auto px-2 sm:px-6 py-2 sm:py-4 bg-gray-50">
        {messages.length === 0 && (
          <div className="text-center text-gray-400 mt-8">No messages yet.</div>
        )}
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex mb-3 sm:mb-4 ${
              msg.sender === "admin" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender !== "admin" && (
              <img
                src={chat.avatar}
                alt={chat.customer}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover mr-2 border"
              />
            )}
            <div>
              <div
                className={`px-3 sm:px-4 py-2 rounded-2xl max-w-[70vw] sm:max-w-xs text-xs sm:text-sm shadow ${
                  msg.sender === "admin"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-white text-gray-900 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
              <div
                className={`text-xs mt-1 ${
                  msg.sender === "admin"
                    ? "text-right text-blue-400"
                    : "text-left text-gray-400"
                }`}
              >
                {msg.time}
              </div>
            </div>
            {msg.sender === "admin" && (
              <img
                src="https://randomuser.me/api/portraits/men/86.jpg"
                alt="Admin"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover ml-2 border"
              />
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {/* Typing Bar */}
      <div className="p-2 sm:p-4 border-t bg-white flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-3 sm:px-4 py-2 rounded-full border focus:outline-none focus:ring focus:border-blue-400 text-xs sm:text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="px-4 sm:px-5 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition text-xs sm:text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
