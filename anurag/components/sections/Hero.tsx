'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/lib/constants';
import DeveloperWorkspace from '@/components/3d/DeveloperWorkspace';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="about" className="relative min-h-screen w-full pt-24 pb-5 flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl px-6 mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent p-0.5">
                  <Image
                    src="/images/profile.jpg"
                    alt="Profile"
                    width={48}
                    height={48}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-primary">{PORTFOLIO_DATA.name}</span>
              </div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Welcome to my portfolio
              </span>
              <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
                {PORTFOLIO_DATA.title}
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              {PORTFOLIO_DATA.shortBio}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-lg transition-shadow"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg border border-border text-foreground font-medium hover:border-primary hover:text-primary transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-6 pt-4"
            >
              {PORTFOLIO_DATA.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  title={social.name}
                >
                  <span className="w-6 h-6 flex items-center justify-center">
                    {social.name === 'GitHub' && '→'}
                    {social.name === 'LinkedIn' && 'in'}
                    {social.name === 'Twitter' && '𝕏'}
                    {social.name === 'Email' && '✉'}
                  </span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right 3D */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-96 lg:h-[500px] rounded-2xl overflow-hidden"
          >
            <DeveloperWorkspace />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
