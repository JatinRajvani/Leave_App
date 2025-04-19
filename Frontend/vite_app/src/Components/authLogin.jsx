import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "./slice.jsx";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = { username, password };

    try {
      const response = await fetch("http://localhost:4500/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Login failed");
        return;
      }

      const role = (data?.user?.role || "").toLowerCase();
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", role);

      dispatch(loginUser(data));

      if (role === "teacher") {
        navigate("/admin");
      } else if (role === "student") {
        navigate("/homepage");
      } else {
        alert("⚠️ Unknown role: " + role);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition duration-300"
          >
            Login
          </button>
          {/* <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/register" className="text-indigo-600 hover:underline font-medium">
              Register
            </Link>
          </p> */}
        </form>
      </div>
    </div>
  );
};

export default Login;




// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate, Link } from "react-router-dom";
// import { loginUser } from "./slice.jsx";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
  
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     // Basic validation
//     if (!username.trim() || !password.trim()) {
//       setErrorMessage("Username and password are required");
//       setIsLoading(false);
//       return;
//     }

//     const userData = { username, password };

//     try {
//       const response = await fetch("http://localhost:4500/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         // Remove credentials: "include" since server doesn't support it
//         body: JSON.stringify(userData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Login failed");
//       }

//       // Extract user data and token
//       const { token, user } = data;
      
//       if (!user || !user.role) {
//         throw new Error("User role information missing from response");
//       }

//       // Normalize the role (case-insensitive) and trim any whitespace
//       const role = user.role.toLowerCase().trim();
      
//       // Save token & user info
//       localStorage.setItem("token", token);
//       localStorage.setItem("role", role);
//       localStorage.setItem("userId", user.id || user._id);
//       localStorage.setItem("username", user.username);
      
//       console.log("✅ Login successful. Role:", role);

//       // Dispatch user data to Redux store
//       dispatch(loginUser({
//         token,
//         user: {
//           ...user,
//           role // Use the normalized role
//         }
//       }));

//       // Role-based redirection
//       switch (role) {
//         case "teacher":
//           navigate("/admin");
//           console.log("Navigating to admin page for teacher role.");
//           break;
//         case "student":
//           navigate("/edit-profile");
//           console.log("Navigating to homepage for student role.");
//           break;
//         default:
//           throw new Error(`Unknown role: ${role}`);
//       }

//     } catch (error) {
//       console.error("Login error:", error);
//       setErrorMessage(error.message || "Authentication failed. Please try again.");
      
//       // Clear any potentially corrupted auth data
//       localStorage.removeItem("token");
//       localStorage.removeItem("role");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       {errorMessage && (
//         <div className="error-message">{errorMessage}</div>
//       )}
//       <form onSubmit={handleLogin}>
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input
//             id="username"
//             type="text"
//             placeholder="Enter your username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             disabled={isLoading}
//             required
//           />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             disabled={isLoading}
//             required
//           />
//         </div>
        
//         <button 
//           type="submit" 
//           className="login-button"
//           disabled={isLoading}
//         >
//           {isLoading ? "Logging in..." : "Login"}
//         </button>
        
//         <div className="register-link">
//           Don't have an account?{" "}
//           <Link to="/register">Register here</Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;
