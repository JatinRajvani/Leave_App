import React from "react";
import { useNavigate } from "react-router-dom";

const ViewProfile = ({ profileData }) => {
  const navigate = useNavigate();

  if (!profileData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-center text-red-500">No profile data available</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 w-full">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg text-center">
        <h2 className="text-3xl font-bold mb-6">View Profile</h2>

        <div className="space-y-3 text-left text-lg">
          <p><strong>Name:</strong> {profileData.name}</p>
          <p><strong>Date of Birth:</strong> {profileData.dob}</p>
          <p><strong>Mobile Number:</strong> {profileData.mobile}</p>
          <p><strong>Father's Mobile:</strong> {profileData.fathersMobile}</p>
          <p><strong>Branch:</strong> {profileData.branch}</p>
          <p><strong>Course:</strong> {profileData.course}</p>
          <p><strong>Semester:</strong> {profileData.semester}</p>
        </div>

        <button
          onClick={() => navigate("/edit-profile")}
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ViewProfile;
