'use client'

import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
import { FloatingElements } from './FloatingElements'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const fadeIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-text/5 bg-surface py-16 md:py-24 lg:py-32">
      <FloatingElements variants={['c', 'a']} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image part */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative order-1 mx-auto w-full max-w-md lg:order-1"
          >
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 via-accent2/10 to-accent/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-text/10 bg-bg">
              <div className="aspect-[4/5] w-full bg-gradient-to-br from-surface to-bg">
                {/* Replace src with an actual photo at /public/profile.jpg */}
                <img
                  src="https://i.pinimg.com/1200x/23/c3/6b/23c36b997f4facf89386e9674692b445.jpg"
                  alt="Faizan Ahmed"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl border border-text/10 bg-bg/80 p-4 backdrop-blur-md">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Code2 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-text">Faizan Ahmed</p>
                  <p className="text-xs text-muted">Full-Stack Developer</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text part */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="order-2 lg:order-2"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">About me</span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              A developer who enjoys turning ideas into real products
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              I&apos;m a Bachelor of Computer Applications student and a self-driven full-stack
              developer based in India. Over the past two years I&apos;ve built and shipped
              several production-level projects independently — from collaborative
              workspace apps to NocoDB-style CRMs and reusable component libraries.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              I enjoy working across the entire stack, but I&apos;m especially drawn to the
              details that make software feel great to use: thoughtful design systems,
              smooth interactions, and interfaces that just make sense.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-text/5 bg-bg p-4">
                <p className="font-display text-2xl font-semibold text-text">2+</p>
                <p className="mt-1 text-xs text-muted">Years experience</p>
              </div>
              <div className="rounded-2xl border border-text/5 bg-bg p-4">
                <p className="font-display text-2xl font-semibold text-text">10+</p>
                <p className="mt-1 text-xs text-muted">Projects shipped</p>
              </div>
              <div className="rounded-2xl border border-text/5 bg-bg p-4">
                <p className="font-display text-2xl font-semibold text-text">PERN</p>
                <p className="mt-1 text-xs text-muted">Core stack</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
