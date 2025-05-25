# React Admin Dashboard (Intercom Inspired)

A professional, responsive admin dashboard built with React and Tailwind CSS, inspired by Intercom's UI. This dashboard is designed for customer support admins to manage chats, view customer details, and use AI-powered assistance.

---Deployed on Vercel 
LINK :   https://assignment-liard-eta.vercel.app

## 🚀 Features

### 1. **Topbar**
- Displays your company logo and admin avatar.
- Clean, modern design with proper spacing and alignment.

### 2. **Responsive Layout**
- Fully responsive: works perfectly on desktop, tablet, and mobile.
- Uses Tailwind CSS responsive utilities for adaptive layouts.

### 3. **Chat List**
- Shows a searchable, filterable list of customer chats.
- Filters: All Chats, Assigned to Me, Closed.
- Each chat shows customer name, avatar, and last message (truncated for neatness).
- Click a chat to open the conversation in the chat window.

### 4. **Chat Window**
- Displays the full conversation with the selected customer.
- Professional chat bubbles for both admin and customer.
- Shows customer info and status in a topbar.
- Typing bar for admin to send replies.
- Auto-scrolls to the latest message.

### 5. **Left Section**
- Tabbed interface: **AI Copilot** and **Details**.
- **AI Copilot:** Dummy AI that generates helpful replies to customer queries, similar to Meta AI.
- **Details:** Shows assignee, team, and a sidebar with tabs (Links, User Data, Conversation Attributes, Company Details, Salesforce, Stripe, Jira for Tickets). Each tab displays relevant info or actions.

### 6. **Dummy Data**
- All chat, message, and sidebar data is generated from dummy data files for demonstration.
- Easily extendable for real backend integration.

### 7. **Modern UI**
- Built with Tailwind CSS for fast, consistent, and customizable styling.
- Uses [react-icons](https://react-icons.github.io/react-icons/) for professional icons.

---

## 📱 Mobile Friendly

- The layout stacks vertically on small screens.
- All sections are scrollable and touch-friendly.
- Chat bubbles, avatars, and text adapt to smaller devices.

---

## 🛠️ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open in your browser:**
   ```
   http://localhost:5173
   ```

---

## 📂 Project Structure

```
src/
  components/
    Topbar.jsx
    ContentLayout.jsx
    ChatList.jsx
    ChatWindow.jsx
    LeftSection.jsx
    AiCopilot.jsx
    Details.jsx
  data/
    dummyData.js
  App.jsx
  main.jsx
  index.css
```

---

## ✨ Customization

- **Add more filters or chat features** in `ChatList.jsx`.
- **Connect to a real backend** by replacing dummy data in `dummyData.js`.
- **Expand AI Copilot** with real AI APIs or more advanced logic.
- **Style further** using Tailwind's utility classes.

---

## 📦 Built With

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 📝 License

This project is for educational/demo purposes. You can use and modify it as you wish.

---

**Enjoy your modern, responsive admin dashboard!**
