import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Login from "./Components/Login";
import Homepage from "./Components/Homepage";
import ApplyLeave from "./Pages/ApplyLeave";
import LeaveHistory from "./Pages/LeaveHistory";
import HelpSupport from "./Pages/Help";
import Profile from "./Pages/Profile";
import EditProfile from "./Pages/EditProfile";

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

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            {/* Login Page without Sidebar */}
            <Route path="/login" element={<Login />} />

            {/* Home Page */}
            <Route path="/" element={<Homepage />} />
            <Route path="/ApplyLeave" element={<ApplyLeave />} />
            <Route path="/LeaveHistory" element={<LeaveHistory />} />
            <Route path="/Help&Support" element={<HelpSupport />} />

            {/* Profile and Edit Profile */}
            <Route path="/profile" element={<Profile profileData={profileData} />} />
            <Route path="/edit-profile" element={<EditProfile profileData={profileData} updateProfile={updateProfile} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
