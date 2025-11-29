import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';

import { BrainCircuit, BarChart3 } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text } from '@react-three/drei';
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

interface Skills {
  name: string;
  level: number;
  color: string;
  icon: React.ReactNode;
}

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', icon: <SiReact className="text-[#61DAFB]" />, level: 80 },
      { name: 'HTML5', icon: <SiHtml5 className="text-[#E34F26]" />, level: 90 },
      { name: 'CSS3', icon: <SiCss3 className="text-[#1572B6]" />, level: 85 },
      { name: 'Tailwind', icon: <SiTailwindcss className="text-[#38B2AC]" />, level: 85 },
      { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" />, level: 75 },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Python', icon: <SiPython className="text-[#3776AB]" />, level: 85 },
      { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" />, level: 75 },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" />, level: 70 },
      { name: 'Django', icon: <SiDjango className="text-[#092E20]" />, level: 65 },
      { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" />, level: 60 },
    ],
  },
  {
    title: 'Tools & Methodologies',
    skills: [
      { name: 'Git', icon: <SiGit className="text-[#F05032]" />, level: 75 },
      { name: 'VS Code', icon: <VscVscode className="text-[#007ACC]" />, level: 85 },
      { name: 'Power BI', icon: <BarChart3 className="text-[#F2C811]" />, level: 70 },
      { name: 'Design Thinking', icon: <BrainCircuit className="text-[#FF6B6B]" />, level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills\" className="section-container">
      <SectionHeader
        title="Skills & Technologies"
        subtitle="My technical toolkit and expertise"
      />

      <div className="mt-16">
        <div className="h-[400px] mb-16">
          <Canvas camera={{ position: [0, 0, 35], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#D32F2F" />
            <Float
              speed={4}
              rotationIntensity={1}
              floatIntensity={2}
              floatingRange={[-0.1, 0.1]}
            >
              <SkillsCloud />
            </Float>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-6">{category.title}</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="flex flex-col items-center gap-2 group"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-4xl transition-all duration-300 group-hover:text-primary group-hover:animate-glow">
                          {skill.icon}
                        </div>
                        <span className="text-sm text-muted-foreground group-hover:text-primary">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsCloud = () => {
  const radius = 10;
  const skills = skillCategories.flatMap(category => category.skills);
  const totalSkills = skills.length;
  const angleStep = (2 * Math.PI) / totalSkills;

  return (
    <group>
      {skills.map((skill, index) => {
        const angle = angleStep * index;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        const z = 0;

        return (
          <group key={index} position={[x, y, z]} rotation={[0, 0, angle]}>
            <Text
              position={[0, 0, 0]}
              fontSize={1}
              color="#D32F2F"
              anchorX="center"
              anchorY="middle"
            >
              {skill.name}
            </Text>
          </group>
        );
      })}
    </group>
  );
};

export default Skills;