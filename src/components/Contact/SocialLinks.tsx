import React from 'react';
import { Github, Facebook } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-white mb-4">Let's Connect</h3>
      <p className="text-gray-300">
        I'm always interested in hearing about new projects and opportunities.
      </p>
      <div className="flex space-x-4">
        <a
          href="https://github.com/nanashi0x1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-400 transition-colors"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.facebook.com/share/1DCvGoQXhr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-400 transition-colors"
        >
          <Facebook className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}