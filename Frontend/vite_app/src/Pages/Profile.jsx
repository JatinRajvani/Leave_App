// import React, {useEffect,useState} from "react";
// import { useNavigate } from "react-router-dom";

// const ViewProfile = ({ profileData }) => {
//   const navigate = useNavigate();

//   if (!profileData) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <p className="text-center text-red-500">No profile data available</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100 w-full">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg text-center">
//         <h2 className="text-3xl font-bold mb-6">View Profile</h2>

//         <div className="space-y-3 text-left text-lg">
//           <p><strong>Name:</strong> {profileData.name}</p>
//           <p><strong>Date of Birth:</strong> {profileData.dob}</p>
//           <p><strong>Mobile Number:</strong> {profileData.mobile}</p>
//           <p><strong>Father's Mobile:</strong> {profileData.fathersMobile}</p>
//           <p><strong>Branch:</strong> {profileData.branch}</p>
//           <p><strong>Course:</strong> {profileData.course}</p>
//           <p><strong>Semester:</strong> {profileData.semester}</p>
//         </div>

//         <button
//           onClick={() => navigate("/edit-profile")}
//           className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
//         >
//           Edit Profile
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ViewProfile;


import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ViewProfile = () => {
    const [userInfo, setUserInfo] = useState(null);
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
                console.log(data.user.username)
          
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, [token]); // Fetch only when token is available
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Profile Details</h2>
            {userInfo ? (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 w-full">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg text-center">
        <h2 className="text-3xl font-bold mb-6">View Profile</h2>

        <div className="space-y-3 text-left text-lg">
          <p><strong>Name:</strong> {userInfo.user.username}</p>
          {/* <p><strong>Date of Birth:</strong> {user.dob}</p>
          <p><strong>Mobile Number:</strong> {user.mobile}</p>
          <p><strong>Father's Mobile:</strong> {user.fathersMobile}</p> */}
          <p><strong>Branch:</strong> {userInfo.user.branch}</p>
          <p><strong>Course:</strong> {userInfo.user.course}</p>
          {/* <p><strong>Semester:</strong> {user.semester}</p> */}
        </div>

        <button
          onClick={() => navigate("/edit-profile")}
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Edit Profile
        </button>
      </div>
    </div>
            ) : (
                <p>No user data found</p>
            )}
        </div>
    );
};

export default ViewProfile;
