import React from "react";

const Homepage = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen text-white">
      {/* Sidebar ke liye left space rakha hai */}
      <div className="ml-64 w-full p-10">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <h1 className="text-4xl font-extrabold text-blue-500 text-center drop-shadow-lg mb-8">
            Welcome to College Leave Application System
          </h1>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="text-blue-500 text-5xl font-bold mb-4">98%</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Approval Rate</h3>
            <p className="text-gray-600">Most leave applications are processed within 24 hours.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="text-blue-500 text-5xl font-bold mb-4">24h</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Quick Response</h3>
            <p className="text-gray-600">Get notified about your application status quickly.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="text-blue-500 text-5xl font-bold mb-4">100%</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Digital Process</h3>
            <p className="text-gray-600">Completely paperless application and approval system.</p>
          </div>
        </div>

          {/* How It Works Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">How It Works</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-500 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">1</div>
              <div>
                <h3 className="font-semibold text-gray-700 text-lg">Login to your account</h3>
                <p className="text-gray-600">Use your college credentials to access the system.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-500 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">2</div>
              <div>
                <h3 className="font-semibold text-gray-700 text-lg">Fill the leave application form</h3>
                <p className="text-gray-600">Provide necessary details about your leave request.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-500 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">3</div>
              <div>
                <h3 className="font-semibold text-gray-700 text-lg">Track your application</h3>
                <p className="text-gray-600">Monitor the status of your leave request in real-time.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
