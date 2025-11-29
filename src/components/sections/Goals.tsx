import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Lightbulb, TrendingUp, GraduationCap } from 'lucide-react';
import Lottie from 'lottie-react';
import typingAnimation from '@/assets/typing-animation.json';

const goalsData = {
  shortTerm: [
    {
      title: "Master's Degree",
      description: "Pursue a Master's in Business Analytics or Master's in Business Administration",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      title: "Technical Skills Enhancement",
      description: "Further develop expertise in data visualization and business intelligence tools",
      icon: <TrendingUp className="h-6 w-6" />,
    },
  ],
  longTerm: [
    {
      title: "Technology Leadership",
      description: "Become a data-savvy business leader bridging tech and decision-making",
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: "Entrepreneurship",
      description: "Launch a tech venture focused on data-driven solutions for businesses",
      icon: <Lightbulb className="h-6 w-6" />,
    },
  ],
};

const Goals = () => {
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
    <section id="goals" className="section-container">
      <SectionHeader
        title="Goals & Aspirations"
        subtitle="My vision for the future and career objectives"
      />

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="max-w-xs mx-auto">
            <Lottie animationData={typingAnimation} loop={true} />
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg leading-relaxed">
              My next step is to pursue a <span className="font-medium text-primary">Master's in Business Analytics</span> or <span className="font-medium text-primary">Master's in Business Administration</span>. My long-term vision is to bridge the gap between tech and decision-making as a data-savvy business leader.
            </p>
          </div>
        </motion.div>

        <div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-medium mb-4">Short-term Goals</h3>
              <div className="grid grid-cols-1 gap-4">
                {goalsData.shortTerm.map((goal, index) => (
                  <Card key={index}>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="text-primary">{goal.icon}</div>
                      <div>
                        <h4 className="font-medium">{goal.title}</h4>
                        <p className="text-muted-foreground text-sm mt-1">
                          {goal.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-medium mb-4">Long-term Vision</h3>
              <div className="grid grid-cols-1 gap-4">
                {goalsData.longTerm.map((goal, index) => (
                  <Card key={index}>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="text-primary">{goal.icon}</div>
                      <div>
                        <h4 className="font-medium">{goal.title}</h4>
                        <p className="text-muted-foreground text-sm mt-1">
                          {goal.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Goals;