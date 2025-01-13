import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Aagam Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 