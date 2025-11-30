import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight, X } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import ReactMarkdown from 'react-markdown';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  content: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Ethical Leadership: Integrity, Accountability, and Social Responsibility',
    date: 'June 15, 2023',
    excerpt:
      'Exploring the core principles that define ethical leadership in today\'s business landscape.',
    category: 'Leadership',
    content: `
# Ethical Leadership: Integrity, Accountability, and Social Responsibility

In an era where corporate scandals frequently make headlines, ethical leadership stands as a beacon of hope for organizational sustainability and social progress. This article explores the core principles that define ethical leadership and why it matters in today's business landscape.

## The Three Pillars of Ethical Leadership

### 1. Integrity
Integrity forms the foundation of ethical leadership. Leaders with integrity consistently align their actions with their words and values, even when no one is watching. They prioritize honesty and transparency in all communications and demonstrate moral courage by making difficult decisions based on principles rather than convenience.

Examples of integrity in action:
- Being truthful in financial reporting
- Acknowledging mistakes and taking responsibility
- Making decisions based on what's right, not what's easy

### 2. Accountability
Ethical leaders embrace accountability for their actions and decisions. They create systems that hold themselves and others responsible for both successes and failures. Accountability involves:

- Setting clear expectations and standards
- Implementing fair evaluation processes
- Accepting consequences for outcomes
- Encouraging open feedback and criticism

### 3. Social Responsibility
Beyond profit motives, ethical leaders recognize their obligation to consider how their decisions impact:

- Employees and their wellbeing
- Environmental sustainability
- Community development
- Economic fairness
- Cultural respect and inclusion

## The Business Case for Ethical Leadership

Research consistently shows that organizations led by ethical leaders enjoy:

1. **Enhanced reputation and brand value**
2. **Increased employee engagement and retention**
3. **Stronger customer loyalty**
4. **Greater resilience during crises**
5. **Sustainable long-term performance**

## Cultivating Ethical Leadership

Developing as an ethical leader requires intentional effort:

- Regularly reflect on personal values and how they align with actions
- Seek diverse perspectives before making important decisions
- Create psychological safety for employees to voice concerns
- Prioritize ethics in organizational processes and reward systems
- Demonstrate transparency in communication

## Conclusion

In a world of increasing complexity and interconnectedness, ethical leadership provides a compass for navigating difficult choices. By embracing integrity, accountability, and social responsibility, leaders can build organizations that not only succeed financially but also contribute positively to society.

The journey toward ethical leadership is ongoing and challenging, but its rewards—for individuals, organizations, and communities—make it one of the most worthwhile pursuits for any aspiring leader.
    `,
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'Building My First React Project',
    date: 'July 22, 2023',
    excerpt: 'Lessons learned and challenges overcome during my journey creating a React application from scratch.',
    category: 'Development',
    content: `# Coming soon`,
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'My Experience with Python Automation',
    date: 'August 05, 2023',
    excerpt: 'How I used Python to automate repetitive tasks and boost productivity in everyday workflows.',
    category: 'Automation',
    content: `# Coming soon`,
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    title: 'Studying Abroad Journey (Coming Soon)',
    date: 'October 10, 2023',
    excerpt: 'Preparing for international education and what I\'m looking forward to in my academic journey.',
    category: 'Education',
    content: `# Coming soon`,
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [currentCategory, setCurrentCategory] = useState('all');

  const categories = ['all', ...new Set(blogPosts.map((post) => post.category))];
  
  const filteredPosts = currentCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === currentCategory);

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
    <section id="blog" className="section-container bg-muted/20">
      <SectionHeader
        title="Blog"
        subtitle="My thoughts and insights on technology, business, and personal growth"
      />

      <div className="mt-12">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 flex flex-wrap justify-center">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setCurrentCategory(category)}
                className="capitalize"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={currentCategory}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  setSelectedPost={setSelectedPost}
                  variants={itemVariants}
                />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>

      {selectedPost && (
        <Sheet
          open={!!selectedPost}
          onOpenChange={(open) => {
            if (!open) setSelectedPost(null);
          }}
        >
          <SheetContent side="right" className="w-full sm:max-w-2xl overflow-y-auto">
            <SheetHeader className="mb-6">
              <SheetTitle className="text-2xl">{selectedPost.title}</SheetTitle>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4"
                onClick={() => setSelectedPost(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </SheetHeader>
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="secondary">{selectedPost.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                {selectedPost.date}
              </div>
            </div>
            {selectedPost.image && (
              <div className="mb-6">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            )}
            <div className="prose dark:prose-invert max-w-none">
              <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
            </div>
          </SheetContent>
        </Sheet>
      )}
    </section>
  );
};

interface BlogCardProps {
  post: BlogPost;
  setSelectedPost: (post: BlogPost) => void;
  variants: any;
}

const BlogCard = ({ post, setSelectedPost, variants }: BlogCardProps) => {
  return (
    <motion.div variants={variants}>
      <Card className="h-full flex flex-col overflow-hidden group">
        <div className="relative overflow-hidden h-48">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
              {post.category}
            </Badge>
          </div>
        </div>
        <CardHeader className="pb-2">
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <Calendar className="h-4 w-4 mr-1" />
            {post.date}
          </div>
          <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        </CardHeader>
        <CardContent className="pb-2 flex-grow">
          <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
        </CardContent>
        <CardFooter>
          <Button
            variant="ghost"
            className="p-0 h-auto font-medium text-primary flex items-center gap-1 group"
            onClick={() => setSelectedPost(post)}
          >
            Read More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default Blog;