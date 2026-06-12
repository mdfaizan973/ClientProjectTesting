'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Phone, X, MessageCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/constants';

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const { phone } = PORTFOLIO_DATA;

  const whatsappUrl = `https://wa.me/${phone}`;
  const callUrl = `tel:${phone}`;
  const displayNumber = `+${phone}`;

  const buttons = [
    {
      label: 'WhatsApp',
      href: whatsappUrl,
      icon: <MessageCircle className="w-4 h-4" />,
      bg: 'bg-[#25D366]',
      text: 'text-white',
    },
    {
      label: 'Call Me',
      href: callUrl,
      icon: <Phone className="w-4 h-4" />,
      bg: 'bg-primary',
      text: 'text-primary-foreground',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="flex flex-col items-end gap-2.5"
          >

            {/* phone chip */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 0.05, type: 'spring', stiffness: 300, damping: 24 }}
              className="px-4 py-2.5 rounded-2xl bg-white border border-border shadow-lg"
            >
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                Reach me at
              </p>
              <p className="text-sm font-bold text-foreground tracking-wide mt-0.5">
                {displayNumber}
              </p>
            </motion.div>

            {/* buttons */}
            {buttons.map((btn, i) => (
              <motion.a
                key={btn.label}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{
                  delay: i * 0.07 + 0.1,
                  type: 'spring',
                  stiffness: 300,
                  damping: 24,
                }}
                whileHover={{ x: -4, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 pl-5 pr-3 py-2.5 rounded-2xl bg-white border border-border shadow-lg hover:shadow-xl hover:border-primary/30 transition-shadow group"
              >
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {btn.label}
                </span>
                <motion.div
                  whileHover={{ rotate: [0, -12, 12, 0] }}
                  transition={{ duration: 0.4 }}
                  className={`w-9 h-9 rounded-xl ${btn.bg} ${btn.text} flex items-center justify-center shadow-md`}
                >
                  {btn.icon}
                </motion.div>
              </motion.a>
            ))}

          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        animate={open ? { rotate: 0 } : { rotate: [0, -8, 8, -4, 4, 0] }}
        transition={open ? {} : { delay: 3, repeat: Infinity, repeatDelay: 5, duration: 0.5 }}
        className="relative w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-xl cursor-pointer overflow-hidden"
      >
        {/* double ping rings */}
        {!open && (
          <>
            <span className="absolute inset-0 rounded-2xl bg-primary animate-ping opacity-20" />
            <motion.span
              animate={{ scale: [1, 1.6, 1], opacity: [0.15, 0, 0.15] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-2xl bg-primary"
            />
          </>
        )}

        {/* shimmer sweep */}
        <motion.div
          animate={{ x: ['-120%', '220%'] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'linear', repeatDelay: 1.5 }}
          className="absolute inset-0 bg-white/20 skew-x-12 w-1/3"
        />

        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5" />
            </motion.span>
          ) : (
            <motion.span
              key="phone"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Phone className="w-5 h-5" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

    </div>
  );
}