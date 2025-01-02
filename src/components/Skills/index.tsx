import React from 'react';
import SkillCategory from './SkillCategory';
import { skills } from './skillsData';

export default function Skills() {
  return (
    <section className="py-20 bg-gray-800" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <SkillCategory
              key={idx}
              category={category.category}
              items={category.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}