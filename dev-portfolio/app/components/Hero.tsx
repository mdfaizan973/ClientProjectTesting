'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, FileDown } from 'lucide-react'
import { HeroScene } from './HeroScene'

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <section id="top" className="relative overflow-hidden">
      <HeroScene />

      {/* ambient gradient blobs */}
      <motion.div
        className="absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        animate={shouldReduceMotion ? {} : { x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 top-1/2 -z-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
        animate={shouldReduceMotion ? {} : { x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="mx-auto flex min-h-[calc(100vh-65px)] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.span
            variants={item}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-text/10 bg-surface px-4 py-1.5 text-sm font-medium text-muted"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            Available for remote opportunities
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold tracking-tight text-text sm:text-6xl lg:text-7xl"
          >
            Building fast, scalable
            <span className="text-primary"> web apps</span> with the PERN stack
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            I&apos;m Faizan, a full-stack developer with 2+ years of experience crafting
            production-ready applications using PostgreSQL, Express, React, Node.js,
            and TypeScript — with a strong eye for clean, modern UI/UX.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-text transition-transform hover:scale-[1.02]"
            >
              View my work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-text/15 px-6 py-3 text-sm font-semibold text-text transition-colors hover:bg-surface"
            >
              <FileDown className="h-4 w-4" />
              Get in touch
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-muted">
            <div>
              <span className="font-display text-2xl font-semibold text-text">2+</span>
              <p>Years of experience</p>
            </div>
            <div>
              <span className="font-display text-2xl font-semibold text-text">10+</span>
              <p>Projects shipped</p>
            </div>
            <div>
              <span className="font-display text-2xl font-semibold text-text">PERN</span>
              <p>Stack specialist</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
