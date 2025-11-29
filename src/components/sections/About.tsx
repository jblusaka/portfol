import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Target } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';

const aboutItems = [
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: 'Education',
    description: 'Bachelor of Computer Applications (Full Stack)',
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: 'Location',
    description: 'Chelstone, Lusaka, Zambia',
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: 'Goals',
    description: 'Tech-driven entrepreneurship, data-powered leadership',
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: 'Interests',
    description: 'Business Intelligence, Web Development, Automation',
  },
];

const About = () => {
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
    <section id="about" className="section-container">
      <SectionHeader
        title="About Me"
        subtitle="Get to know more about me and my background"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/images/hero3.jpg"
            alt="John Banda"
            className="rounded-3xl shadow-lg w-full object-cover aspect-square"
          />
        </motion.div>

        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-lg"
          >
            I'm John Banda, a BCA graduate from Shoolini University, passionate about combining full stack development with business intelligence to solve real-world problems. With a solid foundation in coding, data, and analytics, I'm now aiming for a Master's in Business Analytics or Master's in Business Administration, and actively exploring global opportunities.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {aboutItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="text-primary">{item.icon}</div>
                    <div>
                      <h3 className="font-medium text-lg">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;