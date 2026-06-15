'use client'

import { motion } from 'framer-motion'
import { Search, PenTool, Code, Rocket } from 'lucide-react'
import { FloatingElements } from './FloatingElements'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const gridContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Discover',
    description: 'Understand the problem, users, and constraints before writing a single line of code.',
  },
  {
    icon: PenTool,
    step: '02',
    title: 'Design',
    description: 'Plan data models, API contracts, and UI flows — including design tokens and component structure.',
  },
  {
    icon: Code,
    step: '03',
    title: 'Build',
    description: 'Implement with a clean router → controller → service → query architecture and reusable components.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Ship & iterate',
    description: 'Deploy, gather feedback, and continuously refine performance, UI polish, and edge cases.',
  },
]

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden border-t border-text/5 bg-surface py-16 md:py-24 lg:py-32">
      <FloatingElements variants={['a', 'c']} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">How I work</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            A simple, repeatable process
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {steps.map((step) => (
            <motion.div key={step.step} variants={fadeUp} className="rounded-2xl border border-text/5 bg-bg p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <step.icon className="h-5 w-5" />
                </div>
                <span className="font-display text-2xl font-semibold text-text/10">{step.step}</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-text">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
