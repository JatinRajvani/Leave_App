import React, { useEffect, useState } from "react";

const LeaveHistory = () => {
  const [leaveHistory, setLeaveHistory] = useState([]);

  useEffect(() => {
    // Retrieve leave history from local storage
    const storedLeaves = JSON.parse(localStorage.getItem("leaveHistory")) || [];
    setLeaveHistory(storedLeaves);
  }, []);

  const handleDelete = (index) => {
    const updatedHistory = leaveHistory.filter((_, i) => i !== index);
    localStorage.setItem("leaveHistory", JSON.stringify(updatedHistory));
    setLeaveHistory(updatedHistory);
  };

  return (
    <div className="min-h-screen pt-20 p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-center">Leave History</h2>

      {leaveHistory.length === 0 ? (
        <p className="text-center text-gray-600">No leave history available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-lg rounded-lg">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Leave Type</th>
                <th className="py-2 px-4">Start Date</th>
                <th className="py-2 px-4">End Date</th>
                <th className="py-2 px-4">Reason</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {leaveHistory.map((leave, index) => (
                <tr key={index} className="border-t even:bg-gray-100">
                  <td className="py-2 px-4">{leave.name}</td>
                  <td className="py-2 px-4">{leave.email}</td>
                  <td className="py-2 px-4">{leave.leaveType}</td>
                  <td className="py-2 px-4">{leave.startDate}</td>
                  <td className="py-2 px-4">{leave.endDate}</td>
                  <td className="py-2 px-4">{leave.reason}</td>
                  <td className="py-2 px-4">
                    <button 
                      onClick={() => handleDelete(index)} 
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LeaveHistory;
