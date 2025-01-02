import React from 'react';
import { SkillItem } from './types';

interface SkillCategoryProps {
  category: string;
  items: SkillItem[];
}

export default function SkillCategory({ category, items }: SkillCategoryProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-white mb-6">{category}</h3>
      <div className="space-y-6">
        {items.map((skill, skillIdx) => (
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
  );
}