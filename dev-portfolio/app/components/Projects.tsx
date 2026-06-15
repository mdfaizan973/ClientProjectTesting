'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, FolderGit2 } from 'lucide-react'
import { FloatingElements } from './FloatingElements'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const gridContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const projects = [
  {
    title: 'Syncovo',
    description:
      'A full-stack collaborative workspace application with real-time workspace management, built on a router → controller → service → query architecture.',
    tags: ['Next.js', 'PostgreSQL', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Finalyca CRM',
    description:
      'A NocoDB-style CRM with dynamic table views, filter panels, a drag-and-drop form builder, and a strict orange/white/gray design system.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Form Builder'],
  },
  {
    title: 'TaskFlow Pro',
    description:
      'A NocoDB-inspired task management platform with dynamic tables, Google OAuth + OTP auth, multi-org support, and multi-language UI.',
    tags: ['PERN', 'No ORM', 'OAuth', 'i18n'],
  },
  {
    title: 'UI Component Library',
    description:
      'A reusable React + Tailwind component library — buttons, inputs, cards, and dashboard layouts — built around an orange/white design system.',
    tags: ['React', 'Tailwind', 'Design System'],
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden border-t border-text/5 bg-surface py-16 md:py-24 lg:py-32">
      <FloatingElements variants={['b', 'c']} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Projects</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            A few production-level projects I&apos;ve designed and built end-to-end.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              className="group rounded-2xl border border-text/5 bg-bg p-6 transition-all hover:border-accent/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] sm:p-8"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-display text-xl font-semibold text-text">{project.title}</h3>
                <div className="flex gap-2 text-muted transition-colors group-hover:text-accent">
                  <FolderGit2 className="h-5 w-5" />
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
