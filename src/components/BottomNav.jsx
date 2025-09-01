import React from "react";
import { LayoutDashboard, Calendar, UserCheck, Users, Shield, User } from "lucide-react";

export default function BottomNav({ activePage, setActivePage }) {
  const menu = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Events", icon: <Calendar size={20} /> },
    { name: "Attendees", icon: <UserCheck size={20} /> },
    { name: "Users", icon: <Users size={20} /> },
    { name: "Permissions", icon: <Shield size={20} /> },
    { name: "Profile", icon: <User size={20} /> },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg flex justify-around p-2">
      {menu.map((item) => (
        <button
          key={item.name}
          onClick={() => setActivePage(item.name)}
          className={`flex flex-col items-center text-xs ${
            activePage === item.name ? "text-blue-600" : "text-gray-600"
          }`}
        >
          {item.icon}
          {item.name}
        </button>
      ))}
    </div>
  );
}
