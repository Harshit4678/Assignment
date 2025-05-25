import React, { useState } from "react";
import LeftSection from "./LeftSection";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";
import { chatData } from "../data/dummyData";

const ContentLayout = () => {
  const [selectedChatId, setSelectedChatId] = useState(chatData[0]?.id || null);
  const selectedChat = chatData.find((chat) => chat.id === selectedChatId);

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-4rem)] w-full overflow-hidden bg-gray-50">
      {/* Chat List (left on desktop, top on mobile) */}
      <div className="w-full md:w-72 min-w-0 max-w-xs border-b md:border-b-0 md:border-r bg-white flex flex-col">
        <ChatList
          selectedChatId={selectedChatId}
          setSelectedChatId={setSelectedChatId}
        />
      </div>
      {/* Chat Window (center, flexible) */}
      <div className="flex-1 bg-gray-50 min-w-0">
        <ChatWindow chat={selectedChat} />
      </div>
      {/* LeftSection (right on desktop, bottom on mobile) */}
      <div className="w-full md:w-80 min-w-0 max-w-sm border-t md:border-t-0 md:border-l bg-white flex flex-col">
        <LeftSection />
      </div>
    </div>
  );
};

export default ContentLayout;
