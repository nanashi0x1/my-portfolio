import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillItemProps {
  icon: LucideIcon;
  text: string;
}

export default function SkillItem({ icon: Icon, text }: SkillItemProps) {
  return (
    <div className="flex items-center space-x-2 text-gray-300">
      <Icon className="w-5 h-5 text-blue-400" />
      <span>{text}</span>
    </div>
  );
}