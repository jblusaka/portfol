import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { Briefcase, Calendar, Building, CheckCircle, Star, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const experiences = [
  {
    position: 'Software Operations Supervisor',
    company: 'Valmos Investment Limited',
    period: 'October 2025 - Present',
    description:
      'Managing Zambia Breweries Kuja Software for distributors, overseeing operations, inventory management, and team supervision with focus on accuracy and efficiency.',
    type: 'current',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    duties: [
      'Managing Zambia Breweries Kuja Software for Distributors',
      'Creating quotations and purchase orders',
      'Conducting stock taking and inventory management',
      'Entering stock data and managing inventory systems',
      'Processing consignment inbound transactions',
      'Processing consignment outbound transactions',
      'Supervising team members and operations',
    ],
    skills: [
      'Software Management',
      'Inventory Control',
      'Team Leadership',
      'Data Entry',
      'Quotation Management',
      'Stock Management',
    ],
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    position: 'Cyber Café Attendant',
    company: 'Local Cyber Café',
    period: 'Jan 2022 - Jun 2022',
    description:
      'Provided technical support, printing/scanning services, and assisted customers with internet access setup.',
    type: 'past',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    duties: [],
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
    type: 'past',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    duties: [],
    skills: [
      'Cash handling',
      'Customer relationship management',
      'Shift organization',
      'Team coordination',
    ],
    icon: <Building className="h-6 w-6" />,
  },
];

const ExperienceCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div className="flex gap-6 md:gap-8">
        <div className="flex flex-col items-center">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.color} text-white flex items-center justify-center shadow-lg`}>
            {exp.type === 'current' ? (
              <Star className="h-6 w-6" />
            ) : (
              exp.icon
            )}
          </div>
          <div className="h-24 w-1 bg-gradient-to-b from-blue-400 to-transparent mt-4" />
        </div>

        <div className="pb-12 flex-1">
          <Card className={`border-2 ${exp.borderColor} ${exp.bgColor} overflow-hidden hover:shadow-xl transition-all duration-300 group`}>
            <div className={`h-1 bg-gradient-to-r ${exp.color}`} />

            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle className="text-2xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all">
                      {exp.position}
                    </CardTitle>
                    {exp.type === 'current' && (
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 animate-pulse">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Current
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-gray-700 mb-1">
                    <span className="font-semibold text-lg">{exp.company}</span>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                {exp.description}
              </p>

              {exp.duties.length > 0 && (
                <div className="space-y-3 pt-4 border-t-2 border-gray-200">
                  <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-blue-600" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.duties.map((duty, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{duty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-3 pt-4 border-t-2 border-gray-200">
                <h4 className="font-semibold text-gray-800">Skills Developed</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-white border-2 text-gray-700 hover:bg-gray-50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section-container bg-gradient-to-b from-white via-slate-50 to-white">
      <SectionHeader
        title="Professional Experience"
        subtitle="My professional journey and career milestones"
      />

      <motion.div
        className="mt-16 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-2">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 max-w-2xl mx-auto"
      >
        <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            Looking Forward
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            I'm actively seeking advanced roles in <span className="font-semibold text-blue-600">Business Analysis, Data Analytics, and Tech Leadership</span> positions. With my growing expertise in software management, data-driven decision making, and team supervision, I'm ready to make a significant impact in organizations that value innovation and strategic thinking.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Open to exploring opportunities in global markets and organizations leveraging cutting-edge technology for business transformation.
          </p>
        </Card>
      </motion.div>
    </section>
  );
};

export default Experience;
