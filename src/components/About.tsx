import React from 'react';
import { Brain, Code, Shield, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-gray-900" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I am Baha Eddin Mselmi, a passionate web developer with a growing interest in cybersecurity, 
              AI development, and innovative IT solutions. My projects include creating 
              tools like a product web crawler and managing ventures like Crimson Shop. 
              I focus on merging creativity and technology to solve real-world problems 
              and drive innovation.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code, text: 'Web Development' },
                { icon: Shield, text: 'Cybersecurity' },
                { icon: Brain, text: 'AI Development' },
                { icon: Lightbulb, text: 'Innovation' },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-300">
                  <item.icon className="w-5 h-5 text-blue-400" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=800"
              alt="Developer workspace"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}