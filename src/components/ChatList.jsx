import React, { useState } from "react";
import { chatData } from "../data/dummyData";

const FILTERS = [
  { label: "All Chats", value: "all" },
  { label: "Assigned to Me", value: "assigned" },
  { label: "Closed", value: "closed" },
];

const ChatList = ({ selectedChatId, setSelectedChatId }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredChats = chatData.filter((chat) => {
    const matchesSearch =
      chat.customer.toLowerCase().includes(search.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filter === "all"
        ? true
        : filter === "assigned"
        ? chat.status === "assigned"
        : chat.status === "closed";
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex flex-col h-full">
      {/* Searchbar */}
      <div className="p-4 border-b">
        <input
          type="text"
          placeholder="Search chats..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 rounded border focus:outline-none focus:ring focus:border-blue-400 text-sm"
        />
        {/* Filters */}
        <div className="flex space-x-2 mt-3">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                filter === f.value
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-50"
              } transition`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {filteredChats.length === 0 && (
          <div className="text-center text-gray-400 mt-8">No chats found.</div>
        )}
        {filteredChats.map((chat) => (
          <div
            key={chat.id}
            className={`flex items-center px-4 py-3 border-b cursor-pointer transition ${
              selectedChatId === chat.id
                ? "bg-blue-50 border-l-4 border-blue-600"
                : "hover:bg-blue-50"
            }`}
            onClick={() => setSelectedChatId(chat.id)}
          >
            <img
              src={chat.avatar}
              alt={chat.customer}
              className="w-10 h-10 rounded-full object-cover mr-3 border"
            />
            <div className="flex-1">
              <div className="font-semibold text-gray-900 text-sm">
                {chat.customer}
              </div>
              <div className="text-xs text-gray-500 truncate max-w-[140px]">
                {chat.lastMessage}
              </div>
            </div>
            <div className="text-xs text-gray-400 ml-2">{chat.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
