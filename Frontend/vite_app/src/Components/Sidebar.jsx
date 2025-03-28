import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // Sidebar toggle state

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊", path: "/" },
    { id: "apply", label: "Apply for Leave", icon: "📝", path: "/ApplyLeave" },
    { id: "history", label: "Leave History", icon: "📅", path: "/LeaveHistory" },
    { id: "calendar", label: "Calendar", icon: "📆", path: "/calendar" },
    { id: "settings", label: "Settings", icon: "⚙️", path: "/settings" },
    { id: "help", label: "Help & Support", icon: "❓", path: "/Help&Support" },
  ];

  return (
    <>
      {/* Hamburger Button (Only on Mobile) */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-500 p-2 rounded text-white shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-500 text-white flex flex-col shadow-lg transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "-translate-x-64"} md:translate-x-0`}
      >
        {/* Close Button for Mobile */}
        <button
          className="md:hidden absolute top-4 right-4 text-white"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes size={24} />
        </button>

        {/* Profile Section - Directly Navigates to Profile */}
        <Link to="/profile" onClick={() => setIsOpen(false)}>
          <div className="p-4 border-b border-blue-700 flex items-center space-x-3 cursor-pointer">
            <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-xl">👨‍🎓</span>
            </div>
            <div>
              <h3 className="font-bold text-lg">Prem</h3>
              <p className="text-sm text-blue-300">Computer Science</p>
            </div>
          </div>
        </Link>

        {/* Sidebar Navigation */}
        <div className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-2 px-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 text-lg font-medium ${
                    location.pathname === item.path ? "bg-blue-700 text-white shadow-md" : "text-blue-200 hover:bg-blue-600"
                  }`}
                  onClick={() => setIsOpen(false)} // Close sidebar on link click
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                  {item.id === "apply" && (
                    <span className="ml-auto bg-yellow-400 text-xs rounded-full px-2 py-1">New</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Background Overlay (Only on Mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
