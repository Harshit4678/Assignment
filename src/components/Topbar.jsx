import React from "react";

const logoUrl =
  "https://img.freepik.com/free-vector/gradient-culture-logo-template_23-2149840309.jpg?ga=GA1.1.2056156054.1748133783&semt=ais_hybrid&w=740";
const adminAvatar = "https://randomuser.me/api/portraits/men/86.jpg";

const Topbar = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto flex items-center bg-white h-16 px-8 shadow-sm border-b">
      {/* Logo */}
      <img src={logoUrl} alt="Logo" className="h-20 mr-8" />

      {/* Admin Info */}
      <div className="flex items-center ml-auto">
        <img
          src={adminAvatar}
          alt="Admin"
          className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 mr-3"
        />
        <div>
          <div className="font-semibold text-base text-gray-900">Harshit</div>
          <div className="text-xs text-gray-500">admin@xyxBeyondTech.com</div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
