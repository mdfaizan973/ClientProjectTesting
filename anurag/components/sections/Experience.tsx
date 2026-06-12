'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" ref={ref} className="relative py-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold bg-primary bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full" />
          </motion.div>

          {/* Timeline */}
          <motion.div variants={containerVariants} className="space-y-8">
            {PORTFOLIO_DATA.experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors pb-2 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background" />

                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-2xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-medium text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-lg text-primary font-semibold">
                    {exp.company}
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-1 mt-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-1 text-muted-foreground text-sm">
                        <span className="text-primary font-bold mb-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
