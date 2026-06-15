'use client'

import { motion } from 'framer-motion'
import { FloatingElements } from './FloatingElements'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const gridContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Three Fiber'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'JWT & OAuth', 'Multer / Cloudinary', 'WebSockets'],
  },
  {
    category: 'Database',
    skills: ['PostgreSQL', 'Raw SQL (no ORM)', 'Schema design', 'Query optimization'],
  },
  {
    category: 'Tools & Workflow',
    skills: ['Git & GitHub', 'Vercel', 'Figma', 'Postman', 'CI/CD basics', 'Agile workflows'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <FloatingElements variants={['a']} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Skills</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Tools I use to ship full-stack products
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            A focused toolkit built around the PERN stack and TypeScript, with a
            growing set of frontend craft tools for modern, animated interfaces.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              className="rounded-2xl border border-text/5 bg-surface p-6 transition-all hover:border-accent/30"
            >
              <h3 className="mb-4 font-display text-lg font-semibold text-text">{group.category}</h3>
              <ul className="space-y-2.5">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
