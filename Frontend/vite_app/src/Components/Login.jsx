import React, { useState } from "react";

const Login = () => {
  const [role, setRole] = useState("Students");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Role:", role, "Email:", email, "Password:", password);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 w-full">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Role Selection (Radio Buttons) */}
          <div>
            <label className="block text-gray-700 mb-2">Select Role</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Students"
                  checked={role === "Students"}
                  onChange={(e) => setRole(e.target.value)}
                  className="mr-2"
                />
                Students
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Staff"
                  checked={role === "Staff"}
                  onChange={(e) => setRole(e.target.value)}
                  className="mr-2"
                />
                Staff
              </label>
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Password Input with Toggle */}
          <div>
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border p-2 rounded pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 text-sm"
              >
                {showPassword ? "🚫" : "👁️"}
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <a href="#" className="text-blue-500 hover:underline text-sm">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
