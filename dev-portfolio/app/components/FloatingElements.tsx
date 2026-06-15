'use client'

import { motion, useReducedMotion } from 'framer-motion'

type Variant = 'a' | 'b' | 'c'

const variants: Record<Variant, { className: string; animate: { x: number[]; y: number[] }; duration: number }> = {
  a: {
    className: 'absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl',
    animate: { x: [0, 40, 0], y: [0, -30, 0] },
    duration: 14,
  },
  b: {
    className: 'absolute right-0 top-1/3 h-80 w-80 rounded-full bg-accent/10 blur-3xl',
    animate: { x: [0, -30, 0], y: [0, 30, 0] },
    duration: 16,
  },
  c: {
    className: 'absolute left-1/3 bottom-0 h-64 w-64 rounded-full bg-accent2/10 blur-3xl',
    animate: { x: [0, 25, 0], y: [0, 25, 0] },
    duration: 18,
  },
}

export function FloatingElements({ variants: which = ['a', 'b'] }: { variants?: Variant[] }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {which.map((key) => {
        const v = variants[key]
        return (
          <motion.div
            key={key}
            className={v.className}
            animate={shouldReduceMotion ? {} : v.animate}
            transition={{ duration: v.duration, repeat: Infinity, ease: 'easeInOut' }}
          />
        )
      })}
    </div>
  )
}
