'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="skills" ref={ref} className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {PORTFOLIO_DATA.about.heading}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          {/* Description */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-xl opacity-75" />
                <div className="relative w-full h-full rounded-2xl border-4 border-white shadow-2xl overflow-hidden">
                  <Image
                    src="/images/profile.jpg"
                    alt="Profile"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content and Stats */}
            <motion.div variants={containerVariants} className="lg:col-span-2 space-y-6">
              <motion.div variants={itemVariants} className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {PORTFOLIO_DATA.about.description}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {PORTFOLIO_DATA.about.longDescription}
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 gap-6"
              >
                {PORTFOLIO_DATA.about.stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="px-4 py-2 rounded-lg  border border-primary/20 hover:border-primary/60 transition-all group cursor-default hover:shadow-lg"
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform origin-left">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
