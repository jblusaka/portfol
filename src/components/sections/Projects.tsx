import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Code, Layers, Briefcase, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  icon: React.ReactNode;
  topFeatured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Bridgelink Consultants',
    description: 'A professional consultancy website with a clean structure and service-focused layout. Built with modern web technologies for optimal performance and user experience.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Web Development', 'Consultancy', 'Professional Services'],
    demoUrl: 'https://bridgelinkconsultants.info/',
    featured: true,
    topFeatured: true,
    icon: <Briefcase className="h-8 w-8" />,
  },
  {
    id: 2,
    title: 'SightFlow Metrics',
    description: 'A real-time dashboard showing sales metrics, stock insights, and business analytics. Features interactive data visualization and responsive design for business intelligence.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Dashboard', 'Analytics', 'Business Intelligence', 'Real-time Data'],
    demoUrl: 'https://sightflowmetrics.netlify.app/',
    featured: true,
    topFeatured: true,
    icon: <Code className="h-8 w-8" />,
  },
  {
    id: 3,
    title: 'Python File Organizer',
    description: 'Desktop automation app that organizes files by type into folders. Built with Python OS module for efficient file management.',
    image: '/images/file.jpg',
    tags: ['Python', 'Automation', 'Desktop App'],
    githubUrl: '#',
    demoUrl: '#',
    featured: true,
    icon: <Code className="h-8 w-8" />,
  },
  {
    id: 4,
    title: 'Digital Marketing Website',
    description: 'Responsive digital marketing website built with HTML, CSS, and JavaScript featuring modern design and smooth animations.',
    image: '/images/mark2.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: '#',
    demoUrl: '#',
    featured: false,
    icon: <Layers className="h-8 w-8" />,
  },
  {
    id: 5,
    title: 'Web Scraper & Data Visualizer',
    description: 'Python web scraping tool using BeautifulSoup to extract data and Matplotlib for interactive data visualization.',
    image: '/images/data.png',
    tags: ['Python', 'BeautifulSoup', 'Matplotlib'],
    githubUrl: '#',
    featured: true,
    icon: <Code className="h-8 w-8" />,
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with React, featuring modern UI components and smooth animations.',
    image: '/images/port.png',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: '#',
    demoUrl: '#',
    featured: true,
    icon: <Layers className="h-8 w-8" />,
  }
];

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const topFeaturedProjects = projects.filter(p => p.topFeatured);
  const regularProjects = projects.filter(p => !p.topFeatured);

  const filteredRegularProjects = filter === 'all'
    ? regularProjects
    : regularProjects.filter(project => project.featured);

  return (
    <section id="projects" className="section-container bg-gradient-to-b from-background via-muted/20 to-background">
      <SectionHeader
        title="Featured Work"
        subtitle="Explore my latest projects and creative solutions"
      />

      {topFeaturedProjects.length > 0 && (
        <div className="mt-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-8"
          >
            <Sparkles className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Top Featured Projects
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {topFeaturedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <FeaturedProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-center gap-4 mb-12">
        <Button
          variant={filter === 'all' ? 'default' : 'outline'}
          onClick={() => setFilter('all')}
          className="rounded-full px-6 transition-all hover:scale-105"
        >
          All Projects
        </Button>
        <Button
          variant={filter === 'featured' ? 'default' : 'outline'}
          onClick={() => setFilter('featured')}
          className="rounded-full px-6 transition-all hover:scale-105"
        >
          Featured
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRegularProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const FeaturedProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col group border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
      <div className="relative overflow-hidden h-72">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 flex gap-2">
          <Badge variant="default" className="bg-primary text-white shadow-lg backdrop-blur-sm">
            <Sparkles className="h-3 w-3 mr-1" />
            Top Featured
          </Badge>
        </div>
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="flex gap-2">
            {project.githubUrl && (
              <Button variant="secondary" size="sm" asChild className="backdrop-blur-md">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            )}
            {project.demoUrl && (
              <Button size="sm" asChild className="backdrop-blur-md">
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-primary group-hover:scale-110 transition-transform duration-300">
            {project.icon}
          </div>
          <CardTitle className="text-2xl group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
        </div>
        <CardDescription className="text-base leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0 flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs hover:bg-primary hover:text-white transition-colors">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4">
          {project.featured && (
            <Badge variant="default" className="bg-primary text-white shadow-md">
              Featured
            </Badge>
          )}
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
            {project.icon}
          </div>
        </div>
        <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0 flex-grow">
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs hover:bg-primary hover:text-white transition-colors">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-0 gap-2 flex">
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild className="group/btn">
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
              GitHub
            </a>
          </Button>
        )}
        {project.demoUrl && (
          <Button size="sm" asChild className="group/btn">
            <a href={project.demoUrl} target="_blank" rel="noreferrer">
              <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default Projects;
