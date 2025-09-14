import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Home</h1>
          <p className="text-gray-600 mb-6">This is the Home component with Tailwind CSS!</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Click me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;