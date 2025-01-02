import React from 'react';
import { Code2, Terminal, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <div className="flex justify-center gap-4 mb-6">
            <Code2 className="w-8 h-8 text-blue-400 animate-pulse" />
            <Terminal className="w-8 h-8 text-green-400 animate-pulse delay-100" />
            <Cpu className="w-8 h-8 text-purple-400 animate-pulse delay-200" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Baha Eddin Mselmi
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4">
            Multidisciplinary Creator
          </p>
          <p className="text-xl text-gray-400 mb-8">
            Web Development, Graphic Design, AI Solutions, and Cybersecurity
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            View My Work
          </button>
        </div>
      </div>
    </div>
  );
}