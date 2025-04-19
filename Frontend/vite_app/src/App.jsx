// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Sidebar from "./Components/Sidebar";
// import Login from "./Components/authLogin.jsx";
// import Homepage from "./Components/Homepage";
// import ApplyLeave from "./Pages/ApplyLeave";
// import LeaveHistory from "./Pages/LeaveHistory";
// import HelpSupport from "./Pages/Help";
// import Profile from "./Pages/Profile";
// import EditProfile from "./Pages/EditProfile";
// import AdminPage from "./Pages/Admin.jsx"

// function App() {
//   const [profileData, setProfileData] = useState({
//     name: "Prem Kambaliya",
//     dob: "24-06-2007",
//     mobile: "9512375141",
//     fathersMobile: "8200162042",
//     branch: "Computer Science",
//     course: "B.Tech",
//     semester: "2nd",
//   });

//   const updateProfile = (updatedData) => {
//     setProfileData(updatedData);
//   };

//   const isAuthenticated = localStorage.getItem("token"); // Check if user is logged in
//   return (
//     <Router>
//       <Route path="/" element={<Login />} />
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-1">
//           <Routes>
//             {/* Login Page without Sidebar */}
//             {/* <Route path="/login" element={<Login />} /> */}

//             {/* Home Page */}
//             <Route path="/homepage" element={<Homepage />} />
//             <Route path="/ApplyLeave" element={<ApplyLeave />} />
//             <Route path="/LeaveHistory" element={<LeaveHistory />} />
//             <Route path="/Help&Support" element={<HelpSupport />} />

//             {/* Profile and Edit Profile */}
//             <Route path="/profile" element={<Profile profileData={profileData} />} />
//             <Route path="/edit-profile" element={<EditProfile profileData={profileData} updateProfile={updateProfile} />} />
//             <Route path="/admin" element={<AdminPage />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import Sidebar from "./Components/Sidebar";
// import Login from "./Components/authLogin.jsx";
// import Homepage from "./Components/Homepage";
// import ApplyLeave from "./Pages/ApplyLeave";
// import LeaveHistory from "./Pages/LeaveHistory";
// import HelpSupport from "./Pages/Help";
// import Profile from "./Pages/Profile";
// import EditProfile from "./Pages/EditProfile";
// import AdminPage from "./Pages/Admin.jsx";
// import AutoLogout from './Components/AutoLogout.jsx'
// import AdminDashboard from "./Pages/Adminpanel.jsx";
// function App() {
//   const [profileData, setProfileData] = useState({
//     name: "Prem Kambaliya",
//     dob: "24-06-2007",
//     mobile: "9512375141",
//     fathersMobile: "8200162042",
//     branch: "Computer Science",
//     course: "B.Tech",
//     semester: "2nd",
//   });

//   const updateProfile = (updatedData) => {
//     setProfileData(updatedData);
//   };

//   const isAuthenticated = localStorage.getItem("token"); // Check if user is logged in
//   const token = useSelector((state) => state.auth.token); // Get token from Redux

//   // Show loading state until Redux is initialized
//   if (token === undefined) {
//     return <div>Loading...</div>; // Show a temporary loading screen
//   }

//   return (
//     <Router>
//       <Routes>
//         {/* ✅ If NOT logged in, only show Login Page */}
//         <Route path="/" element={<Login />} />

//         {/* ✅ If logged in, show Sidebar + Routes */}
//         {isAuthenticated && (
//           <Route
//             path="/*"
//             element={
//               <div className="flex">
//                 <Sidebar />
//                 <div className="flex-1">
//                   <Routes>
//                     <Route path="/homepage" element={<Homepage />} />
//                     <Route path="/ApplyLeave" element={<ApplyLeave />} />
//                     <Route path="/LeaveHistory" element={<LeaveHistory />} />
//                     <Route path="/Help&Support" element={<HelpSupport />} />
//                     <Route path="/profile" element={<Profile profileData={profileData} />} />
//                     <Route path="/edit-profile" element={<EditProfile profileData={profileData} updateProfile={updateProfile} />} />
//                     <Route path="/admin" element={<AdminPage />} />
//                     {/* Catch-all Route */}
//                     <Route path="*" element={<Navigate to="/homepage" />} />
//                   </Routes>
//                 </div>
//                 <AutoLogout/>
                
//               </div>
              
//             }
//           />
          
//         )}
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

import Sidebar from "./Components/Sidebar";
import Login from "./Components/authLogin.jsx";
import Homepage from "./Components/Homepage";
import ApplyLeave from "./Pages/ApplyLeave";
import LeaveHistory from "./Pages/LeaveHistory";
import HelpSupport from "./Pages/Help";
import Profile from "./Pages/Profile";
import EditProfile from "./Pages/EditProfile";
import AdminPage from "./Pages/Admin.jsx";
import AutoLogout from "./Components/AutoLogout.jsx";
import AdminDashboard from "./Pages/Adminpanel.jsx";

function App() {
  const [profileData, setProfileData] = useState({
    name: "Prem Kambaliya",
    dob: "24-06-2007",
    mobile: "9512375141",
    fathersMobile: "8200162042",
    branch: "Computer Science",
    course: "B.Tech",
    semester: "2nd",
  });

  const updateProfile = (updatedData) => {
    setProfileData(updatedData);
  };

  const isAuthenticated = localStorage.getItem("token");
  const role = (localStorage.getItem("role") || "").toLowerCase(); // 'student' or 'teacher'
  const token = useSelector((state) => state.auth.token);

  if (token === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        {isAuthenticated && role === "student" && (
          <Route
            path="/*"
            element={
              <div className="flex">
                <Sidebar />
                <div className="flex-1">
                  <Routes>
                    <Route path="/homepage" element={<Homepage />} />
                    <Route path="/ApplyLeave" element={<ApplyLeave />} />
                    <Route path="/LeaveHistory" element={<LeaveHistory />} />
                    <Route path="/Help&Support" element={<HelpSupport />} />
                    <Route path="/profile" element={<Profile profileData={profileData} />} />
                    <Route path="/edit-profile" element={<EditProfile profileData={profileData} updateProfile={updateProfile} />} />
                    <Route path="*" element={<Navigate to="/homepage" />} />
                  </Routes>
                </div>
                <AutoLogout />
              </div>
            }
          />
        )}

        {isAuthenticated && role === "teacher" && (
          <Route
            path="/*"
            element={
              <Routes>
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/students" element={<AdminPage />} />
                {/* <Route path="*" element={<Navigate to="/admin" />} /> */}
              </Routes>
            }
          />
        )}
      </Routes>
    </Router>
  );
}

export default App;
