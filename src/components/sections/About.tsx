import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Target, Zap, Heart } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';

const aboutItems = [
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: 'Education',
    description: 'Bachelor of Computer Applications (Full Stack) from Shoolini University',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: 'Location',
    description: 'Chelstone, Lusaka, Zambia — Open to global opportunities',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: 'Ambition',
    description: 'Tech-driven entrepreneurship and data-powered leadership',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: 'Expertise',
    description: 'Business Intelligence, Full Stack Dev, Data Visualization & Automation',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
];

const AboutCard = ({ item }: { item: typeof aboutItems[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <Card className={`h-full border-2 ${item.borderColor} ${item.bgColor} overflow-hidden hover:shadow-xl transition-all duration-300 group`}>
        <div className={`h-1 bg-gradient-to-r ${item.color}`} />
        <CardContent className="p-6">
          <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${item.color} text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
            {item.icon}
          </div>
          <h3 className="font-semibold text-lg text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all">
            {item.title}
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            {item.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="section-container bg-gradient-to-b from-white via-slate-50 to-white">
      <SectionHeader
        title="About Me"
        subtitle="My background, passion, and what drives me forward"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl blur-2xl opacity-20 -z-10 group-hover:opacity-30 transition-opacity duration-300" />
          <img
            src="/images/hero3.jpg"
            alt="John Banda"
            className="rounded-3xl shadow-2xl w-full object-cover aspect-square border-4 border-white group-hover:shadow-3xl transition-shadow duration-300"
          />
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Your Business-Tech Partner
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm John Banda, a BCA graduate from Shoolini University with a unique blend of full stack development expertise and business intelligence passion. I transform complex problems into elegant, data-driven solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With hands-on experience across web development, data visualization, and business automation, I am working toward advancing my skills in Business Analytics to deepen my strategic impact. I'm actively exploring global opportunities to bring innovative tech solutions to organizations worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {aboutItems.map((item, index) => (
              <AboutCard key={index} item={item} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 pt-4"
          >
            <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200">
              <Zap className="h-5 w-5 text-blue-600" />
              <div>
                <div className="font-semibold text-gray-800">3+ Years</div>
                <div className="text-xs text-gray-600">Development</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200">
              <Heart className="h-5 w-5 text-purple-600" />
              <div>
                <div className="font-semibold text-gray-800">Passionate</div>
                <div className="text-xs text-gray-600">Problem Solver</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
