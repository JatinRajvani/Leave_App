import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../Components/slice.jsx";
import {  useDispatch } from "react-redux";

import { 
  FaUsers, 
  FaFileAlt, 
  FaClock, 
  FaCheckCircle, 
  FaTimesCircle,
  FaTachometerAlt,
  FaUserGraduate,
  FaBell,
  FaCog,
  FaChartBar
} from "react-icons/fa";

const AdminDashboard = () => {
  // Sample data for recent leave applications
  const recentApplications = [
    {
      id: 1,
      student: "Jay Patel",
      department: "Computer Science",
      date: "2025-04-17",
      status: "Pending"
    },
    {
      id: 2,
      student: "Rahul Sharma",
      department: "Electronics",
      date: "2025-04-15",
      status: "Approved"
    },
    {
      id: 3,
      student: "Zeel Sharma",
      department: "Mechanical",
      date: "2025-04-14",
      status: "Rejected"
    }
  ];

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('./students')
    }
      
      const dispatch = useDispatch();
      const handleLogout = () => {
        dispatch(logoutUser());  // Dispatch Redux logout action
        localStorage.removeItem("token"); // Clear token from storage
        navigate("/"); // Redirect to Login Page
      };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
        </div>
        <nav className="mt-6">
          <div className="px-4">
            <div className="flex items-center px-4 py-3 bg-blue-100 text-blue-600 rounded-lg">
              <FaTachometerAlt className="mr-3" />
              <span>Dashboard</span>
            </div>
            <div className="flex items-center px-4 py-3 mt-2 text-gray-600 hover:bg-gray-100 rounded-lg" onClick={handleNavigate}>
              <FaUserGraduate className="mr-3" />
              <span>Students</span>
            </div>
            <div className="flex items-center px-4 py-3 mt-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <FaFileAlt className="mr-3" />
              <span>Leave Applications</span>
            </div>
            <div className="flex items-center px-4 py-3 mt-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <FaBell className="mr-3" />
              <span>Notifications</span>
            </div>
            <div className="flex items-center px-4 py-3 mt-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <FaCog className="mr-3" />
              <span>Settings</span>
            </div>
            <div className="flex items-center px-4 py-3 mt-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <FaChartBar className="mr-3" />
              <span>Reports</span>
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 rounded transition duration-200"
                onClick={handleLogout}
              >
                Log out
              </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-end items-center p-4 border-b border-gray-200 bg-white">
          <button className="mr-4 p-2 rounded-full bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
              A
            </div>
            <span className="ml-2 text-gray-700"> Admin User</span>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
            {/* Total Students */}
            <div className="bg-white rounded-lg shadow p-4 flex items-center">
              <div className="p-3 rounded-full bg-blue-100 mr-4">
                <FaUsers className="text-blue-500 text-xl" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Total Students</p>
                <p className="text-2xl font-bold">2,345</p>
              </div>
            </div>

            {/* Total Leave Requests */}
            <div className="bg-white rounded-lg shadow p-4 flex items-center">
              <div className="p-3 rounded-full bg-green-100 mr-4">
                <FaFileAlt className="text-green-500 text-xl" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Total Leave Requests</p>
                <p className="text-2xl font-bold">156</p>
              </div>
            </div>

            {/* Pending Approvals */}
            <div className="bg-white rounded-lg shadow p-4 flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 mr-4">
                <FaClock className="text-yellow-500 text-xl" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Pending Approvals</p>
                <p className="text-2xl font-bold">23</p>
              </div>
            </div>

            {/* Today's Approved */}
            <div className="bg-white rounded-lg shadow p-4 flex items-center">
              <div className="p-3 rounded-full bg-purple-100 mr-4">
                <FaCheckCircle className="text-purple-500 text-xl" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Today's Approved</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>

            {/* Today's Rejected */}
            <div className="bg-white rounded-lg shadow p-4 flex items-center">
              <div className="p-3 rounded-full bg-red-100 mr-4">
                <FaTimesCircle className="text-red-500 text-xl" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Today's Rejected</p>
                <p className="text-2xl font-bold">5</p>
              </div>
            </div>
          </div>

          {/* Recent Leave Applications */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Recent Leave Applications</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 text-sm uppercase">
                    <th className="px-6 py-3">Student</th>
                    <th className="px-6 py-3">Department</th>
                    <th className="px-6 py-3">Date</th>
                    <th className="px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentApplications.map((app) => (
                    <tr key={app.id}>
                      <td className="px-6 py-4">{app.student}</td>
                      <td className="px-6 py-4">{app.department}</td>
                      <td className="px-6 py-4">{app.date}</td>
                      <td className="px-6 py-4">
                        {app.status === "Pending" && (
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                            Pending
                          </span>
                        )}
                        {app.status === "Approved" && (
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                            Approved
                          </span>
                        )}
                        {app.status === "Rejected" && (
                          <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                            Rejected
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;