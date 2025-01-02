import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}