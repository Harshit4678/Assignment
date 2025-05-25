import React, { useState } from "react";
import {
  FiUser,
  FiUsers,
  FiLink,
  FiDatabase,
  FiTag,
  FiBriefcase,
  FiTrendingUp,
  FiCreditCard,
  FiTrello,
} from "react-icons/fi";

const sidebarTabs = [
  {
    label: "Links",
    icon: <FiLink className="mr-2" />,
    key: "links",
    children: [
      {
        label: "Tracker Ticket",
        icon: <FiTag className="mr-2" />,
        key: "tracker",
      },
      {
        label: "Back-office Tickets",
        icon: <FiBriefcase className="mr-2" />,
        key: "backoffice",
      },
      {
        label: "Side Conversation",
        icon: <FiTrendingUp className="mr-2" />,
        key: "side",
      },
    ],
  },
  {
    label: "User Data",
    icon: <FiDatabase className="mr-2" />,
    key: "userdata",
  },
  {
    label: "Conversation Attributes",
    icon: <FiTag className="mr-2" />,
    key: "attributes",
  },
  {
    label: "Company Details",
    icon: <FiBriefcase className="mr-2" />,
    key: "company",
  },
  {
    label: "Salesforce",
    icon: <FiTrendingUp className="mr-2" />,
    key: "salesforce",
  },
  {
    label: "Stripe",
    icon: <FiCreditCard className="mr-2" />,
    key: "stripe",
  },
  {
    label: "Jira for Tickets",
    icon: <FiTrello className="mr-2" />,
    key: "jira",
  },
];

const tabContent = {
  tracker: "Tracker Ticket details and actions.",
  backoffice: "Back-office Tickets details and actions.",
  side: "Side Conversation details and actions.",
  links: "Select a sub-link to view details.",
  userdata: "User profile, activity, and data.",
  attributes: "Tags, status, and conversation properties.",
  company: "Company info and contacts.",
  salesforce: "Salesforce integration and data.",
  stripe: "Billing and payment info from Stripe.",
  jira: "View and manage Jira tickets.",
};

const Details = () => {
  const [activeTab, setActiveTab] = useState("links");
  const [activeSubTab, setActiveSubTab] = useState("tracker");

  return (
    <div className="space-y-6 h-full flex flex-col">
      {/* Assignee */}
      <div className="flex items-center justify-between">
        <div className="text-xs text-gray-500 font-semibold flex items-center">
          <FiUser className="mr-1" /> Assignee
        </div>
        <div className="font-medium text-gray-800">Harshit Admin</div>
      </div>

      {/* Teams */}
      <div className="flex items-center justify-between">
        <div className="text-xs text-gray-500 font-semibold mb-1 flex items-center">
          <FiUsers className="mr-1" /> Teams
        </div>
        <div className="inline-block px-2 py-1 text-xs rounded bg-gray-100 text-gray-600">
          Unassigned
        </div>
      </div>

      {/* Sidebar Tabs */}
      <div className="flex-1 flex flex-col">
        <div className="space-y-1">
          {sidebarTabs.map((tab) => (
            <div key={tab.key}>
              <div
                className={`flex items-center px-3 py-2 rounded cursor-pointer font-medium text-sm transition
                  ${
                    activeTab === tab.key
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `}
                onClick={() => {
                  setActiveTab(tab.key);
                  if (tab.children) setActiveSubTab(tab.children[0].key);
                }}
              >
                {tab.icon}
                {tab.label}
              </div>
              {/* Sub-tabs for Links */}
              {tab.children && activeTab === tab.key && (
                <div className="ml-6 mt-1 space-y-1">
                  {tab.children.map((sub) => (
                    <div
                      key={sub.key}
                      className={`flex items-center px-2 py-1 rounded cursor-pointer text-xs font-medium transition
                        ${
                          activeSubTab === sub.key
                            ? "bg-blue-100 text-blue-700"
                            : "text-gray-600 hover:bg-blue-50"
                        }
                      `}
                      onClick={() => setActiveSubTab(sub.key)}
                    >
                      {sub.icon}
                      {sub.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Tab Content */}
        <div className="mt-6 p-4 bg-gray-50 rounded shadow-inner text-sm text-gray-700 flex-1">
          {activeTab === "links"
            ? tabContent[activeSubTab]
            : tabContent[activeTab]}
        </div>
      </div>
    </div>
  );
};

export default Details;
