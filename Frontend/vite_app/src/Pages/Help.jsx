import React, { useState } from "react";

const HelpSupport = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your query has been submitted. Our team will get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-20 p-10 bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Help & Support</h2>

        {/* FAQ Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Frequently Asked Questions</h3>
          <details className="border p-2 rounded mb-2">
            <summary className="font-medium cursor-pointer">How can I apply for leave?</summary>
            <p className="text-gray-600 mt-1">Go to the "Apply Leave" section, fill in the form, and submit your request.</p>
          </details>
          <details className="border p-2 rounded mb-2">
            <summary className="font-medium cursor-pointer">How do I check my leave status?</summary>
            <p className="text-gray-600 mt-1">Visit the "Leave History" page to check the current status of your leave request.</p>
          </details>
        </div>

        {/* Contact Form */}
        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="w-full border p-2 rounded" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" className="w-full border p-2 rounded" />
          <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Your Message" rows="3" className="w-full border p-2 rounded"></textarea>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
        </form>

        {/* Contact Info */}
        <div className="mt-6 text-center">
          <p className="font-semibold">Email: support@example.com</p>
          <p className="font-semibold">Phone: +123 456 7890</p>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
