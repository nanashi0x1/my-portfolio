import { SkillItem } from './types';

interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Web Development',
    items: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 80 },
    ],
  },
  {
    category: 'Cybersecurity',
    items: [
      { name: 'Kali Linux', level: 75 },
      { name: 'Bug Bounty', level: 70 },
      { name: 'Network Security', level: 65 },
    ],
  },
  {
    category: 'Design & AI',
    items: [
      { name: 'Graphic Design', level: 85 },
      { name: 'UI/UX Design', level: 80 },
      { name: 'AI Development', level: 70 },
    ],
  },
];