import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { Briefcase, Calendar, Building, CheckCircle } from 'lucide-react';

const experiences = [
  {
    position: 'Cyber Café Attendant',
    company: 'Local Cyber Café',
    period: 'Jan 2022 - Jun 2022',
    description:
      'Provided technical support, printing/scanning services, and assisted customers with internet access setup.',
    skills: [
      'Customer service',
      'Technical troubleshooting',
      'Multitasking',
      'Basic hardware maintenance',
    ],
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    position: 'Filling Station Attendant',
    company: 'Local Filling Station',
    period: 'Jul 2021 - Dec 2021',
    description:
      'Managed transactions, provided excellent customer service, and maintained shift duties and responsibilities.',
    skills: [
      'Cash handling',
      'Customer relationship management',
      'Shift organization',
      'Team coordination',
    ],
    icon: <Building className="h-6 w-6" />,
  },
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="section-container bg-muted/20">
      <SectionHeader
        title="Professional Experience"
        subtitle="My work history and professional journey"
      />

      <motion.div
        className="mt-16 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={itemVariants}
            >
              <div className="absolute -left-10 mt-1 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div className="mb-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="text-primary">{exp.icon}</div>
                    <h3 className="text-xl font-medium">{exp.position}</h3>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mt-1 md:mt-0">
                    <Calendar className="h-4 w-4 mr-1" />
                    {exp.period}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{exp.company}</p>
                <p className="mb-4">{exp.description}</p>
                <div>
                  <h4 className="text-sm font-medium mb-2">Skills Gained:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {exp.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;