import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import {
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Send,
  CheckCircle,
} from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, {
    message: 'Subject must be at least 5 characters.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: 'Email',
    value: 'johnbanda@shooliniuniversity.com',
    link: 'mailto:johnbanda@shooliniuniversity.com',
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: 'Phone',
    value: '+260 974-889565',
    link: 'tel:+260974889565',
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: 'Location',
    value: 'Chelstone, Lusaka, Zambia',
    link: 'https://maps.google.com/?q=Lusaka,Zambia',
  },
  {
    icon: <Github className="h-5 w-5" />,
    title: 'GitHub',
    value: 'github.com/johnbanda1',
    link: 'https://github.com/',
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    title: 'LinkedIn',
    value: 'linkedin.com/in/johnbanda',
    link: 'https://linkedin.com/',
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', data);
    toast.success('Message sent successfully!');
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
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
    <section id="contact" className="section-container">
      <SectionHeader
        title="Contact Me"
        subtitle="Get in touch for opportunities or just to say hello"
      />

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-6">Send Me a Message</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8"
                >
                  <div className="text-primary mb-4">
                    <CheckCircle className="h-16 w-16" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground text-center">
                    Thank you for your message. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      placeholder="Full Name"
                      {...register('name')}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email"
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="How can I help you?"
                      {...register('subject')}
                    />
                    {errors.subject && (
                      <p className="text-sm text-destructive">{errors.subject.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message here..."
                      rows={5}
                      {...register('message')}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-medium mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{info.title}</h4>
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 relative overflow-hidden rounded-lg h-64"
          >
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122151.03685404448!2d28.245204987939457!3d-15.416915925792416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408b71f2f3df45%3A0x5678771d5b75d342!2sLusaka%2C%20Zambia!5e0!3m2!1sen!2sus!4v1654079378956!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;