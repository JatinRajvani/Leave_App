import React, { useState } from "react";

const ApplyLeave = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    leaveType: "Sick Leave",
    customLeaveType: "",
    startDate: "",
    endDate: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalLeaveType = formData.leaveType === "Other" ? formData.customLeaveType : formData.leaveType;
    
    const existingLeaves = JSON.parse(localStorage.getItem("leaveHistory")) || [];
    const newLeave = { ...formData, leaveType: finalLeaveType };
    localStorage.setItem("leaveHistory", JSON.stringify([...existingLeaves, newLeave]));

    alert("Leave application submitted successfully!");

    setFormData({
      name: "",
      email: "",
      leaveType: "Sick Leave",
      customLeaveType: "",
      startDate: "",
      endDate: "",
      reason: "",
    });
  };

  return (
    <div className="flex bg-gray-100 min-h-screen text-gray-900">
      <div className="ml-64 w-full p-10">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-extrabold text-blue-600 text-center drop-shadow-lg mb-8">
            Apply for Leave
          </h1>

          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border p-2 rounded bg-gray-50"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border p-2 rounded bg-gray-50"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold">Leave Type</label>
                <select
                  name="leaveType"
                  value={formData.leaveType}
                  onChange={handleChange}
                  className="w-full border p-2 rounded bg-gray-50"
                >
                  <option value="Sick Leave">Sick Leave</option>
                  <option value="Weekend Leave">Weekend Leave</option>
                  <option value="Paid Leave">Paid Leave</option>
                  <option value="Unpaid Leave">Unpaid Leave</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {formData.leaveType === "Other" && (
                <div>
                  <label className="block text-gray-700 font-semibold">Specify Leave Type</label>
                  <input
                    type="text"
                    name="customLeaveType"
                    value={formData.customLeaveType}
                    onChange={handleChange}
                    required
                    className="w-full border p-2 rounded bg-gray-50"
                    placeholder="Enter your leave type"
                  />
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    className="w-full border p-2 rounded bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                    className="w-full border p-2 rounded bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold">Reason</label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  className="w-full border p-2 rounded bg-gray-50"
                  placeholder="Enter reason for leave"
                  rows="3"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 rounded transition duration-200"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyLeave;
