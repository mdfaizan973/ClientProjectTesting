'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { FloatingElements } from './FloatingElements'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const gridContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const testimonials = [
  {
    quote:
      'Faizan rebuilt our workspace dashboard from scratch and fixed issues we had been stuck on for weeks. Communication was clear and the turnaround was fast.',
    name: 'Project Lead',
    role: 'Collaborative Workspace App',
  },
  {
    quote:
      'The CRM UI he delivered followed our design system perfectly — consistent spacing, colors, and components across every screen. Genuinely production-ready work.',
    name: 'Product Owner',
    role: 'CRM Platform',
  },
  {
    quote:
      'He took a vague idea for a portfolio and turned it into a polished, animated site with a 3D hero section. Exactly the kind of attention to detail we needed.',
    name: 'Freelance Client',
    role: 'Portfolio Website',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <FloatingElements variants={['b']} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Testimonials</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            What people say
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={fadeUp} className="rounded-2xl border border-text/5 bg-surface p-6">
              <Quote className="h-6 w-6 text-accent" />
              <p className="mt-4 text-sm leading-relaxed text-muted">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 border-t border-text/5 pt-4">
                <p className="text-sm font-semibold text-text">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
