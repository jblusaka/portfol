import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Lightbulb, TrendingUp, GraduationCap, Zap, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const goalsData = {
  shortTerm: [
    {
      title: "Master's Degree",
      description: "Pursue a Master's in Business Analytics or MBA to deepen expertise in data-driven decision making and business strategy.",
      icon: <GraduationCap className="h-8 w-8" />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      title: "Technical Skills Enhancement",
      description: "Master advanced data visualization tools, cloud technologies, and AI/ML integration to stay at the forefront of tech innovation.",
      icon: <TrendingUp className="h-8 w-8" />,
      color: 'from-cyan-500 to-teal-500',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200',
    },
  ],
  longTerm: [
    {
      title: "Technology Leadership",
      description: "Become a visionary data-savvy business leader who bridges the gap between technology and strategic decision-making at the executive level.",
      icon: <Target className="h-8 w-8" />,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
    {
      title: "Entrepreneurship & Innovation",
      description: "Launch a tech-driven startup focused on AI-powered analytics and data solutions that solve real-world business challenges and create lasting impact.",
      icon: <Lightbulb className="h-8 w-8" />,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
    },
  ],
};

const GoalCard = ({ goal, isLongTerm }: { goal: typeof goalsData.shortTerm[0]; isLongTerm: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <Card className={`h-full overflow-hidden border-2 ${goal.borderColor} ${goal.bgColor} hover:shadow-2xl transition-all duration-300 group`}>
        <div className={`h-1 bg-gradient-to-r ${goal.color}`} />

        <CardHeader>
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${goal.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {goal.icon}
            </div>
            {isLongTerm && (
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                <Zap className="h-3 w-3 mr-1" />
                Vision
              </Badge>
            )}
          </div>
          <CardTitle className="text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all">
            {goal.title}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-gray-700 leading-relaxed">
            {goal.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Goals = () => {
  return (
    <section id="goals" className="section-container bg-gradient-to-b from-slate-50 via-white to-blue-50">
      <SectionHeader
        title="Goals & Aspirations"
        subtitle="My vision for the future and the path I'm charting to get there"
      />

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <BookOpen className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Short-term Goals
              </h3>
            </motion.div>

            <div className="space-y-4">
              {goalsData.shortTerm.map((goal, index) => (
                <GoalCard key={index} goal={goal} isLongTerm={false} />
              ))}
            </div>
          </div>

          <div className="mt-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <Target className="h-6 w-6 text-purple-600" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Long-term Vision
              </h3>
            </motion.div>

            <div className="space-y-4">
              {goalsData.longTerm.map((goal, index) => (
                <GoalCard key={index} goal={goal} isLongTerm={true} />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="sticky top-32">
            <Card className="overflow-hidden border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🎓</span>
                    My Journey
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    My next chapter is pursuing a <span className="font-semibold text-blue-600">Master's in Business Analytics</span> or <span className="font-semibold text-blue-600">MBA</span>. This education will strengthen my ability to blend technical expertise with strategic thinking.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="border-t-2 border-blue-200 pt-6"
                >
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🚀</span>
                    The Vision
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    I'm committed to becoming a <span className="font-semibold text-purple-600">data-savvy business leader</span> who transforms organizations through intelligent decision-making and innovative technology solutions.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="border-t-2 border-blue-200 pt-6"
                >
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-2xl">💡</span>
                    The Impact
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Ultimately, I want to create technology that matters — building products and businesses that solve real challenges and contribute positively to society.
                  </p>
                </motion.div>
              </div>

              <div className="mt-8 pt-8 border-t-2 border-blue-200">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex gap-4"
                >
                  <div className="flex-1 text-center p-4 rounded-lg bg-white border border-blue-200">
                    <div className="text-2xl font-bold text-blue-600">2-3Y</div>
                    <div className="text-xs text-gray-600 mt-1">Master's Pursuit</div>
                  </div>
                  <div className="flex-1 text-center p-4 rounded-lg bg-white border border-cyan-200">
                    <div className="text-2xl font-bold text-cyan-600">5-7Y</div>
                    <div className="text-xs text-gray-600 mt-1">Leadership Role</div>
                  </div>
                  <div className="flex-1 text-center p-4 rounded-lg bg-white border border-purple-200">
                    <div className="text-2xl font-bold text-purple-600">10Y+</div>
                    <div className="text-xs text-gray-600 mt-1">Own Venture</div>
                  </div>
                </motion.div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Goals;
