import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function SectionHeader({ title, subtitle, children }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-3xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground mt-4">{subtitle}</p>
      )}
      {children}
    </motion.div>
  );
}