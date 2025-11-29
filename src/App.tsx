import { ThemeProvider } from '@/components/theme-provider';
import Layout from '@/components/layout/Layout';
import About from '@/components/sections/About';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import Goals from '@/components/sections/Goals';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="john-banda-theme">
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Goals />
        <Blog />
        <Contact />
      </Layout>
      <Toaster position="bottom-right" />
    </ThemeProvider>
  );
}

export default App;