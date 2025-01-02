import React from 'react';
import { Brain, Code, Shield, Lightbulb } from 'lucide-react';
import AboutText from './AboutText';
import SkillItem from './SkillItem';

const skills = [
  { icon: Code, text: 'Web Development' },
  { icon: Shield, text: 'Cybersecurity' },
  { icon: Brain, text: 'AI Development' },
  { icon: Lightbulb, text: 'Innovation' },
];

export default function About() {
  return (
    <section className="py-20 bg-gray-900" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <AboutText />
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <SkillItem key={index} {...skill} />
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