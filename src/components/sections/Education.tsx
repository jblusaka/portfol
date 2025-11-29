import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, BookOpen, Award, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const education = {
    degree: 'Bachelor of Computer Applications (Full Stack Development)',
    institution: 'Shoolini University',
    duration: '2022 - 2025',
    projects: [
      {
        name: 'File Organizer App',
        description: 'Python-based desktop application for automated file management',
        technologies: ['Python', 'OS Module', 'PyQt5']
      },
      {
        name: 'Portfolio Website',
        description: 'React-based responsive portfolio with modern UI/UX',
        technologies: ['React', 'Tailwind CSS', 'Framer Motion']
      }
    ],
    subjects: [
      'Web Development',
      'Python Programming',
      'Data Structure and Algorithms',
      'Data Science',
      'Business Intelligence',
      'Database Management',
      'UI/UX Design',
    ],
    certifications: [
      'Sustainability Studies',
      'Computer Architecture',
      'Fundamentals of Artificial Intelligence',
      'Intellectual Property Rights',
      'Enterprise Design Thinking',
    ],
    achievements: [
      'Graduated with First Class Honours',
      'Music Coordinator for Fashion Club',
      'Active Member of Gaming Club',
      'Top 10% Students of University',
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="education" className="section-container">
      <SectionHeader
        title="Education"
        subtitle="My academic background and qualifications"
      />

      <motion.div
        className="mt-16 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Card className="border-l-4 border-l-primary">
          <CardContent className="p-8">
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold">{education.degree}</h3>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="h-5 w-5" />
                  <span>{education.institution}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-5 w-5" />
                  <span>{education.duration}</span>
                </div>
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Final Year Projects
                  </h4>
                  {education.projects.map((project, index) => (
                    <div key={index} className="mb-4">
                      <p className="font-medium">{project.name}</p>
                      <p className="text-muted-foreground text-sm mb-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Key Subjects</h4>
                  <div className="flex flex-wrap gap-2">
                    {education.subjects.map((subject, index) => (
                      <Badge key={index} variant="secondary">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {education.certifications.map((cert, index) => (
                      <Badge key={index} variant="outline" className="border-primary/50">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Achievements</h4>
                  <ul className="space-y-2">
                    {education.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default Education;