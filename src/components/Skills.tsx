import React from 'react';

const skills = [
  { category: 'Web Development', items: [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
  ]},
  { category: 'Cybersecurity', items: [
    { name: 'Kali Linux', level: 75 },
    { name: 'Bug Bounty', level: 70 },
    { name: 'Network Security', level: 65 },
  ]},
  { category: 'AI Development', items: [
    { name: 'PyTorch', level: 70 },
    { name: 'AI Tools', level: 75 },
    { name: 'Machine Learning', level: 65 },
  ]},
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-800" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <div key={idx} className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-6">{category.category}</h3>
              <div className="space-y-6">
                {category.items.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between text-gray-300 mb-2">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div
                        className="h-full bg-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}