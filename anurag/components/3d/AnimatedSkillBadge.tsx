'use client';

import { motion } from 'framer-motion';

interface AnimatedSkillBadgeProps {
  text: string;
  delay?: number;
  index?: number;
}

export default function AnimatedSkillBadge({
  text,
  delay = 0,
  index = 0,
}: AnimatedSkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: delay + (index * 0.1),
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.1,
        y: -5,
        boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
      }}
      className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/50 text-foreground text-sm font-medium cursor-default hover:border-primary transition-colors"
    >
      {text}
    </motion.div>
  );
}
