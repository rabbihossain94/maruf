import React from "react";
import { LayoutDashboard, Users, UserCheck, Shield, User, Calendar } from "lucide-react";

export default function Sidebar({ activePage, setActivePage }) {
  const menu = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Events", icon: <Calendar size={20} /> },
    { name: "Attendees", icon: <UserCheck size={20} /> },
    { name: "Users", icon: <Users size={20} /> },
    { name: "Permissions", icon: <Shield size={20} /> },
    { name: "Profile", icon: <User size={20} /> },
  ];

  return (
    <div className="hidden md:flex flex-col w-56 bg-white shadow-lg fixed right-0 top-0 bottom-0">
      <div className="text-xl font-bold p-4 border-b">BD Clean</div>
      <div className="flex-1">
        {menu.map((item) => (
          <button
            key={item.name}
            onClick={() => setActivePage(item.name)}
            className={`flex items-center gap-2 px-4 py-3 w-full text-left ${
              activePage === item.name ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"
            }`}
          >
            {item.icon} {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
