'use client'

import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Award } from 'lucide-react'
import { FloatingElements } from './FloatingElements'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const gridContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const education = [
  {
    icon: GraduationCap,
    period: '2021 — 2024',
    title: 'Bachelor of Computer Applications (BCA)',
    institution: 'University / College Name',
    description:
      'Focused on programming fundamentals, databases, and web development. Final-year project: TaskFlow Pro, a NocoDB-inspired task management system built on the PERN stack.',
  },
  {
    icon: BookOpen,
    period: '2020 — 2021',
    title: 'Higher Secondary (Science)',
    institution: 'School Name',
    description:
      'Built a strong foundation in mathematics and computer science, sparking an early interest in programming and software development.',
  },
  {
    icon: Award,
    period: 'Ongoing',
    title: 'Self-Directed Learning',
    institution: 'Independent Study',
    description:
      'Continuously learning advanced TypeScript, system design, animation libraries, and 3D web (React Three Fiber) through hands-on projects.',
  },
]

export function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <FloatingElements variants={['b', 'c']} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Education</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Academic background
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {education.map((entry) => (
            <motion.div
              key={entry.title}
              variants={fadeUp}
              className="rounded-2xl border border-text/5 bg-surface p-6 transition-all hover:border-accent/30"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <entry.icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">{entry.period}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-text">{entry.title}</h3>
              <p className="mt-1 text-sm font-medium text-muted">{entry.institution}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{entry.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
