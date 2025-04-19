import { useState,useEffect} from "react";
import { useSelector } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa"; 
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "./slice.jsx";
import {  useDispatch } from "react-redux";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
   const handleLogout = () => {
     dispatch(logoutUser());  // Dispatch Redux logout action
     localStorage.removeItem("token"); // Clear token from storage
     navigate("/"); // Redirect to Login Page
   };
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // Sidebar toggle state

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊", path: "/homepage" },
    { id: "apply", label: "Apply for Leave", icon: "📝", path: "/ApplyLeave" },
    { id: "history", label: "Leave History", icon: "📅", path: "/LeaveHistory" },
    { id: "calendar", label: "Calendar", icon: "📆", path: "/calendar" },
    { id: "settings", label: "Settings", icon: "⚙️", path: "/settings" },
    { id: "help", label: "Help & Support", icon: "❓", path: "/Help&Support" },
  ];

  const [userInfo , setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

      // Get token from Redux store
      const token = useSelector((state) => state.auth.token);

      useEffect(() => {
        const fetchUserDetails = async () => {
            if (!token) return; // If no token, do not fetch

            setLoading(true);
            try {
                const response = await fetch("http://localhost:4500/api/profile", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) throw new Error("Failed to fetch user data");

                const data = await response.json();
                setUserInfo(data);
                console.log(data)
                
             
          
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, [token]); // Fetch only when token is available
    console.log(userInfo)
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


   
    
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
            {userInfo && userInfo.user ? (
  <>
    <h3 className="font-bold text-lg">{userInfo.user.username}</h3>
    <p className="text-sm text-blue-300">{userInfo.user.course}</p>
  </>
) : (
  <h3 className="font-bold text-lg">Loading...</h3>
)}
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
        <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 rounded transition duration-200"
                onClick={handleLogout}
              >
                Log out
              </button>
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
