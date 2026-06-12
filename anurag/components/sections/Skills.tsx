'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import TechOrbitingSphere from '@/components/3d/TechOrbitingSphere';

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="skills" ref={ref} className="relative overflow-hidden">

      {/* 3D Sphere — full section background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <TechOrbitingSphere />
      </div>

      {/* Content on top */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-primary bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A curated collection of technologies I've mastered over my career
            </p>
            <div className="flex justify-center gap-2 pt-2">
              <div className="h-1 w-8 bg-primary rounded-full" />
              <div className="h-1 w-8 bg-accent rounded-full" />
              <div className="h-1 w-8 bg-primary rounded-full" />
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {PORTFOLIO_DATA.skills.map((skillGroup) => (
              <motion.div
                key={skillGroup.category}
                variants={itemVariants}
                className="p-6 rounded-xl bg-white/70 dark:bg-background/70 backdrop-blur-md border border-border hover:border-primary transition-all hover:shadow-lg"
              >
                <h3 className="font-bold text-lg text-foreground mb-4">
                  {skillGroup.category}
                </h3>
                <div className="space-y-3">
                  {skillGroup.technologies.map((tech) => (
                    <div key={tech.name} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{tech.name}</span>
                      <div className="flex gap-1">
                        {Array.from({ length: 3 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              tech.level === 'Expert'
                                ? 'bg-primary'
                                : tech.level === 'Advanced'
                                  ? 'bg-primary'
                                  : tech.level === 'Intermediate'
                                    ? i < 2
                                      ? 'bg-primary'
                                      : 'bg-border'
                                    : 'bg-border'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}