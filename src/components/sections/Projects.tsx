import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Code, BarChart3, Layers } from 'lucide-react';
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
}

const projects: Project[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    title: 'Web Scraper & Data Visualizer',
    description: 'Python web scraping tool using BeautifulSoup to extract data and Matplotlib for interactive data visualization.',
    image: '/images/data.png',
    tags: ['Python', 'BeautifulSoup', 'Matplotlib'],
    githubUrl: '#',
    featured: true,
    icon: <Code className="h-8 w-8" />,
  },
  {
    id: 4,
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

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.featured);

  return (
    <section id="projects\" className="section-container bg-muted/20">
      <SectionHeader
        title="Projects"
        subtitle="Check out some of my recent work"
      />

      <div className="flex justify-center gap-4 mb-12 mt-8">
        <Button
          variant={filter === 'all' ? 'default' : 'outline'}
          onClick={() => setFilter('all')}
          className="rounded-full"
        >
          All Projects
        </Button>
        <Button
          variant={filter === 'featured' ? 'default' : 'outline'}
          onClick={() => setFilter('featured')}
          className="rounded-full"
        >
          Featured
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
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

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col group">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          {project.featured && (
            <Badge variant="default" className="bg-primary text-white">
              Featured
            </Badge>
          )}
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="text-primary mb-2">{project.icon}</div>
        </div>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0 flex-grow">
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-0 gap-2 flex">
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        )}
        {project.demoUrl && (
          <Button size="sm" asChild>
            <a href={project.demoUrl} target="_blank" rel="noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default Projects;