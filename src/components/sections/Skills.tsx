import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap } from 'lucide-react';
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiPostgresql,
  SiGit,
  SiDjango,
  SiDocker,
  SiCplusplus
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { BarChart3, BrainCircuit } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
  borderColor: string;
}

interface SkillCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description: 'Building beautiful, responsive user interfaces',
    icon: <Zap className="h-6 w-6" />,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    skills: [
      { name: 'React', icon: <SiReact className="text-2xl text-[#61DAFB]" />, level: 80, color: 'from-blue-400 to-cyan-400', borderColor: 'border-blue-300' },
      { name: 'HTML5', icon: <SiHtml5 className="text-2xl text-[#E34F26]" />, level: 90, color: 'from-orange-400 to-red-400', borderColor: 'border-orange-300' },
      { name: 'CSS3', icon: <SiCss3 className="text-2xl text-[#1572B6]" />, level: 85, color: 'from-blue-500 to-indigo-500', borderColor: 'border-blue-400' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-2xl text-[#38B2AC]" />, level: 85, color: 'from-cyan-400 to-teal-400', borderColor: 'border-cyan-300' },
      { name: 'JavaScript', icon: <SiJavascript className="text-2xl text-[#F7DF1E]" />, level: 75, color: 'from-yellow-400 to-orange-400', borderColor: 'border-yellow-300' },
    ],
  },
  {
    title: 'Backend Development',
    description: 'Creating robust server-side solutions',
    icon: <Zap className="h-6 w-6" />,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    skills: [
      { name: 'Python', icon: <SiPython className="text-2xl text-[#3776AB]" />, level: 85, color: 'from-blue-500 to-indigo-500', borderColor: 'border-blue-400' },
      { name: 'C++', icon: <SiCplusplus className="text-2xl text-[#00599C]" />, level: 75, color: 'from-blue-600 to-blue-500', borderColor: 'border-blue-500' },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-2xl text-[#336791]" />, level: 70, color: 'from-blue-600 to-indigo-600', borderColor: 'border-blue-500' },
      { name: 'Django', icon: <SiDjango className="text-2xl text-[#092E20]" />, level: 65, color: 'from-green-600 to-emerald-600', borderColor: 'border-green-500' },
      { name: 'Docker', icon: <SiDocker className="text-2xl text-[#2496ED]" />, level: 60, color: 'from-cyan-500 to-blue-500', borderColor: 'border-cyan-400' },
    ],
  },
  {
    title: 'Tools & Methodologies',
    description: 'Expertise in industry-standard tools',
    icon: <Zap className="h-6 w-6" />,
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    skills: [
      { name: 'Git & GitHub', icon: <SiGit className="text-2xl text-[#F05032]" />, level: 75, color: 'from-red-400 to-orange-400', borderColor: 'border-red-300' },
      { name: 'VS Code', icon: <VscVscode className="text-2xl text-[#007ACC]" />, level: 85, color: 'from-blue-500 to-cyan-500', borderColor: 'border-blue-400' },
      { name: 'Power BI', icon: <BarChart3 className="text-2xl text-[#F2C811]" />, level: 70, color: 'from-yellow-500 to-yellow-400', borderColor: 'border-yellow-400' },
      { name: 'Data Analytics', icon: <BrainCircuit className="text-2xl text-[#FF6B6B]" />, level: 80, color: 'from-red-400 to-pink-400', borderColor: 'border-red-300' },
    ],
  },
];

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {skill.icon}
          <span className="font-medium text-gray-800">{skill.name}</span>
        </div>
        <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border-0">
          {skill.level}%
        </Badge>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05 + 0.2 }}
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg`}
        />
      </div>
    </motion.div>
  );
};

const SkillCategoryCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className={`h-full border-2 ${category.borderColor} ${category.bgColor} overflow-hidden hover:shadow-2xl transition-all duration-300 group`}>
        <div className={`h-1 bg-gradient-to-r ${category.color}`} />

        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {category.icon}
            </div>
          </div>
          <CardTitle className="text-2xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all">
            {category.title}
          </CardTitle>
          <p className="text-sm text-gray-600 mt-2">{category.description}</p>
        </CardHeader>

        <CardContent>
          <div className="space-y-6">
            {category.skills.map((skill, skillIndex) => (
              <SkillBar key={skillIndex} skill={skill} index={skillIndex} />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Skills = () => {
  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  const averageLevel = Math.round(
    skillCategories.reduce((acc, cat) => acc + cat.skills.reduce((s, skill) => s + skill.level, 0), 0) / totalSkills
  );

  return (
    <section id="skills" className="section-container bg-gradient-to-b from-white via-slate-50 to-white">
      <SectionHeader
        title="Skills & Technical Toolkit"
        subtitle="My expertise across frontend, backend, tools, and methodologies"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 max-w-2xl mx-auto mb-16"
      >
        <div className="grid grid-cols-3 gap-4 text-center">
          <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
            <div className="text-3xl font-bold text-blue-600">{totalSkills}+</div>
            <div className="text-sm text-gray-600 mt-2">Tech Skills</div>
          </Card>
          <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-6">
            <div className="text-3xl font-bold text-purple-600">{skillCategories.length}</div>
            <div className="text-sm text-gray-600 mt-2">Categories</div>
          </Card>
          <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-6">
            <div className="text-3xl font-bold text-green-600">{averageLevel}%</div>
            <div className="text-sm text-gray-600 mt-2">Avg Proficiency</div>
          </Card>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <SkillCategoryCard key={index} category={category} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 max-w-3xl mx-auto"
      >
        <Card className="border-2 border-gradient-to-r from-blue-200 to-cyan-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Continuous Learning</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            I'm committed to staying at the forefront of technology trends. Currently exploring advanced topics in AI/ML integration, cloud architecture, and data engineering to expand my technical capabilities.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t-2 border-gray-200">
            <div className="text-center">
              <div className="font-semibold text-blue-600 text-lg">3+</div>
              <div className="text-xs text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-cyan-600 text-lg">10+</div>
              <div className="text-xs text-gray-600">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-purple-600 text-lg">5</div>
              <div className="text-xs text-gray-600">Programming Languages</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-orange-600 text-lg">∞</div>
              <div className="text-xs text-gray-600">Growth Mindset</div>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

export default Skills;
