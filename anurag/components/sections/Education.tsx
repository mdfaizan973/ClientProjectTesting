'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { BookOpen } from 'lucide-react';

export default function Education() {
  const { ref, isVisible } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="education" ref={ref} className="relative py-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold bg-primary bg-clip-text text-transparent">
              Education & Learning
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full" />
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8">
            {PORTFOLIO_DATA?.education?.length > 0 ? PORTFOLIO_DATA?.education?.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline line */}
                {index !== PORTFOLIO_DATA?.education?.length - 1 && (
                  <div className="absolute left-6 top-20 w-1 h-20 bg-primary opacity-50" />
                )}

                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary p-0.5">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="ml-24 p-4 rounded-xl border border-border/50 hover:border-primary/50  hover:shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                        <span className="flex items-center justify-center w-8 h-8 border border-primary rounded-full">
                          <BookOpen className="w-5 h-5 text-primary" />
                        </span>
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-medium mt-1">
                        {edu.field}
                      </p>
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <p className="text-muted-foreground mb-2">
                        {edu.institution}
                      </p>

                      <p className="text-sm text-muted-foreground mb-3">
                        {edu.description}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Grade
                      </p>
                      <p className="text-lg font-bold text-accent">
                        {edu.grade}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 border-t border-border/50 pt-1">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Key Courses
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.slice(0, 3).map((course) => (
                          <span
                            key={course}
                            className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium"
                          >
                            {course}
                          </span>
                        ))}
                        {edu.coursework.length > 3 && (
                          <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium">
                            +{edu.coursework.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {edu.highlights && (
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Highlights
                      </p>
                      <div className="space-y-1 flex gap-2 items-start justify-start">
                        {edu.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-center gap-2">
                            <span className="text-sm text-accent font-bold mt-1">✓</span>
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )) : (<div>No education data available</div>)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
