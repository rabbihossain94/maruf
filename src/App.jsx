import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import BottomNav from "./components/BottomNav";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import Attendees from "./pages/Attendees";
import Users from "./pages/Users";
import Permissions from "./pages/Permissions";
import Profile from "./pages/Profile";

export default function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return <Dashboard />;
      case "Events":
        return <Events />;
      case "Attendees":
        return <Attendees />;
      case "Users":
        return <Users />;
      case "Permissions":
        return <Permissions />;
      case "Profile":
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Main Content */}
      <div className="flex-1 p-4">{renderPage()}</div>

      {/* Sidebar Right */}
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      {/* Mobile Bottom Nav */}
      <BottomNav activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}
