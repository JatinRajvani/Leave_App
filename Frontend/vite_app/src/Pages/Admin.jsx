import React, { useState,useEffect } from "react";

const AdminPage = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    branch: "",
    course: "",
    uid_no: "",
    mobile_no: "",
    email: "",
    role: "",
    password: "",
  });

  // Fetch existing students from the backend
    useEffect(() => {
      fetch("http://localhost:4500/api/students")
        .then((res) => res.json())
        .then((data) => setStudents(data))
        .catch((err) => console.error("Error fetching students:", err));
    }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form and add a new student
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4500/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const newStudent = await response.json();
      setStudents([...students, newStudent]); // Update student list
      setFormData({ username: "", branch: "", course: "", uid_no: "", mobile_no: "", email: "", role: "", password: "" }); // Reset form
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
      {/* Add Student Section */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Add New Student</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
          <input type="text" name="branch" placeholder="Branch" value={formData.branch} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
          <input type="text" name="course" placeholder="Course" value={formData.course} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
          <input type="text" name="role" placeholder="Role" value={formData.role} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
          <input type="text" name="uid_no" placeholder="UID No" value={formData.uid_no} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
          <input type="text" name="mobile_no" placeholder="Mobile No" value={formData.mobile_no} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Add Student</button>
        </form>
      </div>

      {/* Total Students Section */}
      <div style={{ width: "50%", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
        <h2>Total Students</h2>
        <table border="1" width="100%">
          <thead>
            <tr>
              <th>UID No</th>
              <th>Username</th>
              <th>Email</th>
              <th>Branch</th>
              <th>Course</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.uid_no}>
                <td>{student.uid_no}</td>
                <td>{student.username}</td>
                <td>{student.email}</td>
                <td>{student.branch}</td>
                <td>{student.course}</td>
                <td>{student.mobile_no}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
