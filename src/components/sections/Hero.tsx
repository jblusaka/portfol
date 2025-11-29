import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animation for canvas background
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: {
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
      color: string;
    }[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles.length = 0;
      const particleCount = Math.min(
        50,
        Math.floor((canvas.width * canvas.height) / 20000)
      );

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
          color: `rgba(65, 105, 225, ${Math.random() * 0.5 + 0.2})`,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Connect particles that are close to each other
        particles.forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(65, 105, 225, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });

        // Update position
        p.x += p.dx;
        p.y += p.dy;

        // Bounce off walls
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      animationFrameId = window.requestAnimationFrame(drawParticles);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-primary">John Banda</span>
          </h1>

          <div className="h-12 flex justify-center">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Business-Tech Enthusiast',
                2000,
                'Data Visualization Specialist',
                2000,
                'Advocate for Sustainability',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="text-xl md:text-3xl lg:text-4xl font-medium"
            />
          </div>

          <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground">
            Transforming code into impact — with clean logic and smarter data.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button asChild size="lg" className="rounded-full px-6">
              <a href="#projects">
                <ArrowDownCircle className="mr-2 h-4 w-4" />
                View My Projects
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-6"
              asChild
            >
              <a href="#" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full px-6"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <span>Scroll down</span>
            <ArrowDownCircle className="h-6 w-6 mt-2 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;