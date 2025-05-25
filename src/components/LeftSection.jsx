import React, { useState } from "react";
import { FiCpu, FiInfo } from "react-icons/fi";
import AiCopilot from "./AiCopilot";
import Details from "./Details";

const tabs = [
  {
    label: "AI Copilot",
    icon: <FiCpu className="inline-block mr-2" />,
    key: "aicopilot",
  },
  {
    label: "Details",
    icon: <FiInfo className="inline-block mr-2" />,
    key: "details",
  },
];

const LeftSection = () => {
  const [activeTab, setActiveTab] = useState("aicopilot");

  return (
    <div className="flex flex-col h-full">
      {/* Tab Headers */}
      <div className="flex border-b flex-col sm:flex-row">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 flex items-center justify-center cursor-pointer py-3 sm:py-4 text-sm sm:text-base font-semibold transition
        ${
          activeTab === tab.key
            ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
            : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
        }
      `}
            style={{ userSelect: "none" }}
          >
            {tab.icon}
            {tab.label}
          </div>
        ))}
      </div>
      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto p-4 bg-white">
        {activeTab === "aicopilot" && <AiCopilot />}
        {activeTab === "details" && <Details />}
      </div>
    </div>
  );
};

export default LeftSection;
