export const chatData = [
  {
    id: 1,
    customer: "Ranveer Singh",
    avatar: "https://randomuser.me/api/portraits/men/71.jpg",
    lastMessage: "I need help with my order.",
    time: "09:15",
    status: "assigned",
  },
  {
    id: 2,
    customer: "Jayant Sharma",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    lastMessage: "Can you update my shipping address?",
    time: "08:50",
    status: "closed",
  },
  {
    id: 3,
    customer: "Jamanth",
    avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    lastMessage: "My payment failed.",
    time: "Yesterday",
    status: "assigned",
  },
  {
    id: 4,
    customer: "Emily Clark",
    avatar: "https://randomuser.me/api/portraits/women/41.jpg",
    lastMessage: "Thank you for your quick response!",
    time: "Yesterday",
    status: "closed",
  },
  {
    id: 5,
    customer: "Kevin Karan",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    lastMessage: "How do I reset my password?",
    time: "2 days ago",
    status: "assigned",
  },
  {
    id: 6,
    customer: "Sophia Gupta",
    avatar: "https://randomuser.me/api/portraits/women/61.jpg",
    lastMessage: "Is there a discount for students?",
    time: "2 days ago",
    status: "assigned",
  },
];

// Dummy chat messages for each chat id
export const chatMessages = {
  1: [
    {
      sender: "customer",
      text: "Hi, I need help with my order.",
      time: "09:14",
    },
    {
      sender: "admin",
      text: "Sure, John! Can you share your order ID?",
      time: "09:15",
    },
    {
      sender: "customer",
      text: "It's #12345.",
      time: "09:15",
    },
    {
      sender: "admin",
      text: "Thank you! Let me check the details for you.",
      time: "09:16",
    },
  ],
  2: [
    {
      sender: "customer",
      text: "Can you update my shipping address?",
      time: "08:48",
    },
    {
      sender: "admin",
      text: "Of course, Jane. Please provide the new address.",
      time: "08:49",
    },
    {
      sender: "customer",
      text: "Patel Nagar, New Delhi, 110008",
      time: "08:50",
    },
    {
      sender: "admin",
      text: "Updated! You'll receive your order at the new address.",
      time: "08:51",
    },
  ],
  3: [
    {
      sender: "customer",
      text: "My payment failed.",
      time: "Yesterday",
    },
    {
      sender: "admin",
      text: "Sorry to hear that, Michael. Can you try another payment method?",
      time: "Yesterday",
    },
  ],
  4: [
    {
      sender: "customer",
      text: "Thank you for your quick response!",
      time: "Yesterday",
    },
    {
      sender: "admin",
      text: "You're welcome, Emily! Let us know if you need anything else.",
      time: "Yesterday",
    },
  ],
  5: [
    {
      sender: "customer",
      text: "How do I reset my password?",
      time: "2 days ago",
    },
    {
      sender: "admin",
      text: "Click on 'Forgot Password' at login and follow the instructions.",
      time: "2 days ago",
    },
  ],
  6: [
    {
      sender: "customer",
      text: "Is there a discount for students?",
      time: "2 days ago",
    },
    {
      sender: "admin",
      text: "Yes, Sophia! Please send your student ID to avail the discount.",
      time: "2 days ago",
    },
  ],
};
