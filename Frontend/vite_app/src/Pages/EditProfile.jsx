import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = ({ profileData, updateProfile }) => {
  const [formData, setFormData] = useState(profileData);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    navigate("/profile"); // Redirect to ViewProfile after saving
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Profile</h2>
        
        <label className="block mb-2">
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" />
        </label>
        
        <label className="block mb-2">
          DOB:
          <input type="text" name="dob" value={formData.dob} onChange={handleChange} className="w-full p-2 border rounded" />
        </label>
        
        <label className="block mb-2">
          Mobile:
          <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full p-2 border rounded" />
        </label>
        
        <label className="block mb-2">
          Father's Mobile:
          <input type="text" name="fathersMobile" value={formData.fathersMobile} onChange={handleChange} className="w-full p-2 border rounded" />
        </label>
        
        <label className="block mb-2">
          Branch:
          <input type="text" name="branch" value={formData.branch} onChange={handleChange} className="w-full p-2 border rounded" />
        </label>
        
        <label className="block mb-2">
          Course:
          <input type="text" name="course" value={formData.course} onChange={handleChange} className="w-full p-2 border rounded" />
        </label>
        
        <label className="block mb-2">
          Semester:
          <input type="text" name="semester" value={formData.semester} onChange={handleChange} className="w-full p-2 border rounded" />
        </label>

        <button type="submit" className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
