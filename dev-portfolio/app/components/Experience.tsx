'use client'

import { motion } from 'framer-motion'
import { FloatingElements } from './FloatingElements'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const gridContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const timeline = [
  {
    period: '2024 — Present',
    title: 'Independent Full-Stack Developer',
    description:
      'Designing and building production-level PERN stack applications, including collaborative tools and CRM-style platforms, from architecture through deployment.',
  },
  {
    period: '2023 — 2024',
    title: 'PERN Stack & TypeScript Specialization',
    description:
      'Deepened expertise in PostgreSQL, Express, React, and Node.js with TypeScript, focusing on raw-SQL architectures and clean layered backend design.',
  },
  {
    period: '2022 — 2023',
    title: 'Final-Year Project: TaskFlow Pro',
    description:
      'Designed and documented a NocoDB-inspired task management system as a BCA capstone project, covering auth, multi-org support, and dynamic forms.',
  },
  {
    period: '2021 — 2022',
    title: 'BCA Coursework & Foundations',
    description:
      'Built a strong foundation in programming, databases, and web development as part of the Bachelor of Computer Applications program.',
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <FloatingElements variants={['c', 'b']} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Experience</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            My journey so far
          </h2>
        </motion.div>

        <motion.div
          className="mx-auto max-w-3xl"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {timeline.map((entry, idx) => (
            <motion.div
              key={entry.title}
              variants={fadeUp}
              className="relative grid grid-cols-[auto_1fr] gap-x-6 pb-10 last:pb-0"
            >
              <div className="flex flex-col items-center">
                <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-accent" />
                {idx !== timeline.length - 1 && (
                  <span className="mt-1 w-px flex-1 bg-text/10" />
                )}
              </div>
              <div className="rounded-2xl border border-text/5 bg-surface p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {entry.period}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-text">{entry.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{entry.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
