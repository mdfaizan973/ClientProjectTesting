'use client'

import { motion } from 'framer-motion'
import { Mail, FolderGit2, Link2, MapPin, ArrowUpRight } from 'lucide-react'
import { FloatingElements } from './FloatingElements'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const gridContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@faizan.dev',
    href: 'mailto:hello@faizan.dev',
  },
  {
    icon: FolderGit2,
    label: 'GitHub',
    value: 'github.com/faizan',
    href: 'https://github.com',
  },
  {
    icon: Link2,
    label: 'LinkedIn',
    value: 'linkedin.com/in/faizan',
    href: 'https://linkedin.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India · Open to remote',
    href: undefined,
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-text/5 bg-surface py-16 md:py-24 lg:py-32">
      <FloatingElements variants={['a', 'b', 'c']} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Contact</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Let&apos;s build something together
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Open to remote roles, freelance projects, and collaborations. Reach
            out through any of the channels below and I&apos;ll get back to you soon.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {channels.map((channel) => {
            const content = (
              <>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <channel.icon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">{channel.label}</p>
                  <p className="mt-0.5 text-sm font-medium text-text">{channel.value}</p>
                </div>
                {channel.href && (
                  <ArrowUpRight className="h-5 w-5 text-muted transition-colors group-hover:text-accent" />
                )}
              </>
            )

            return channel.href ? (
              <motion.a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                variants={fadeUp}
                className="group flex items-center gap-4 rounded-2xl border border-text/5 bg-bg p-5 transition-all hover:border-accent/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
              >
                {content}
              </motion.a>
            ) : (
              <motion.div
                key={channel.label}
                variants={fadeUp}
                className="flex items-center gap-4 rounded-2xl border border-text/5 bg-bg p-5"
              >
                {content}
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-10 flex justify-center"
        >
          <a
            href="mailto:hello@faizan.dev"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-text transition-transform hover:scale-[1.02]"
          >
            Say hello
            <Mail className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
