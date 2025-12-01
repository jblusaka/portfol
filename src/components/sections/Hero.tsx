import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle, Download, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
        40,
        Math.floor((canvas.width * canvas.height) / 25000)
      );

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2.5 + 0.5,
          dx: (Math.random() - 0.5) * 0.3,
          dy: (Math.random() - 0.5) * 0.3,
          color: `rgba(59, 130, 246, ${Math.random() * 0.4 + 0.15})`,
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

        particles.forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.4;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });

        p.x += p.dx;
        p.y += p.dy;

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50"
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      <div className="absolute inset-0 -z-5 bg-gradient-to-br from-blue-100/20 via-transparent to-blue-100/10 pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <Badge className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200 mb-6 px-4 py-2 text-sm">
            <Sparkles className="h-3 w-3 mr-2" />
            Welcome to My Portfolio
          </Badge>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl blur-2xl opacity-40 -z-10 animate-pulse" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl opacity-20 blur-xl" />

              <img
                src="/images/mark1.jpg"
                alt="John Banda"
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl object-cover shadow-2xl border-4 border-white/80 backdrop-blur-sm relative z-10"
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-border opacity-0 group-hover:opacity-100"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8 text-left lg:text-left"
          >
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  John Banda
                </span>
              </h1>

              <div className="h-16 flex items-center">
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    2000,
                    'Business-Tech Enthusiast',
                    2000,
                    'Data Visualization Specialist',
                    2000,
                    'Sustainability Advocate',
                    2000,
                  ]}
                  wrapper="h2"
                  speed={50}
                  repeat={Infinity}
                  className="text-2xl lg:text-3xl font-semibold text-blue-700"
                />
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              Transforming code into impact — with clean logic, smarter data, and a passion for building solutions that matter.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 border border-blue-200">
                <span className="text-2xl">💻</span>
                <span className="text-sm font-medium text-gray-700">3+ Years Dev</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 border border-blue-200">
                <span className="text-2xl">🚀</span>
                <span className="text-sm font-medium text-gray-700">10+ Projects</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 border border-blue-200">
                <span className="text-2xl">🎯</span>
                <span className="text-sm font-medium text-gray-700">100% Dedication</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full px-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all">
                <a href="#projects">
                  <ArrowDownCircle className="mr-2 h-5 w-5" />
                  View My Work
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-2 hover:bg-blue-50 hover:border-blue-400"
                asChild
              >
                <a href="/resume.docx" download>
                  <Download className="mr-2 h-5 w-5" />
                  Get Resume
                </a>
              </Button>
              <Button
                className="rounded-full px-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Let's Connect
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            <span>Scroll to explore</span>
            <ArrowDownCircle className="h-6 w-6 mt-2 animate-bounce text-blue-600" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
