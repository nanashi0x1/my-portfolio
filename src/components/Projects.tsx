import React from 'react';
import { Globe, ShoppingBag, Code, Wifi } from 'lucide-react';

const projects = [
  {
    title: 'Product Web Crawler',
    description: 'An automated data collection tool built with modern web technologies.',
    icon: Globe,
    link: '#',
    tags: ['Python', 'Web Scraping', 'API'],
  },
  {
    title: 'Crimson Shop',
    description: 'An online selling platform with advanced e-commerce features.',
    icon: ShoppingBag,
    link: '#',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'IP Tracker',
    description: 'A Python-based tool for tracking and analyzing IP addresses.',
    icon: Wifi,
    link: '#',
    tags: ['Python', 'Networking', 'Security'],
  },
  {
    title: 'AI Chat Assistant',
    description: 'A smart chatbot powered by machine learning algorithms.',
    icon: Code,
    link: '#',
    tags: ['AI', 'PyTorch', 'NLP'],
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-900" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <project.icon className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}