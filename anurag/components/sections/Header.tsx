'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { DownloadIcon, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const shadowOpacity = useTransform(scrollY, [0, 80], [0, 0.08]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = PORTFOLIO_DATA.navigation.map((item) =>
        document.getElementById(item.toLowerCase())
      );
      const scrollPos = window.scrollY + 100;
      sections.forEach((section) => {
        if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const handleDownload = () => {
    window.open(PORTFOLIO_DATA.resume, '_blank');
    return false;
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: useTransform(bgOpacity, (v) => `rgba(255,255,255,${v})`),
        boxShadow: useTransform(shadowOpacity, (v) => `0 4px 24px rgba(0,0,0,${v})`),
      }}
    >
      {/* top accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-primary via-accent to-primary" />

      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
            <span className="text-primary-foreground font-bold text-sm">
              {PORTFOLIO_DATA.name.charAt(0)}
            </span>
          </div>
          <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {PORTFOLIO_DATA.name}
          </span>
        </motion.a>

        {/* Desktop nav */}
        <motion.div
          variants={navVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center gap-1"
        >
          {PORTFOLIO_DATA.navigation.map((item) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <motion.a
                key={item}
                variants={itemVariants}
                href={`#${item.toLowerCase()}`}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-lg bg-primary/10 border border-primary/20"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{item}</span>
              </motion.a>
            );
          })}

          {/* CTA button */}
          <motion.a
            variants={itemVariants}
            // href="#contact"
            className="ml-4 cursor-pointer px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            onClick={() => {
              handleDownload();
            }}
          >
            {/* download icon */}
            <span className="flex items-center gap-2">
              Resume <DownloadIcon className="w-4 h-4 text-primary-foreground" />
            </span> 
          </motion.a>
        </motion.div>

        {/* Mobile hamburger */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-9 h-9 rounded-lg border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all"
        >
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </motion.button>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-border"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
          {PORTFOLIO_DATA.navigation.map((item, i) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, x: -10 }}
              animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: i * 0.05 }}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeSection === item.toLowerCase()
                  ? 'bg-primary/10 text-primary border border-primary/20'
                  : 'text-foreground hover:bg-secondary/60'
              }`}
            >
              {item}
            </motion.a>
          ))}
          <a
            href="#contact"
            onClick={() => {
              handleDownload();
            }}
            className="mt-2 px-4 cursor-pointer py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold text-center hover:opacity-90 transition-opacity"
          >
            <span className="flex items-center gap-2">
              Resume <DownloadIcon className="w-4 h-4 text-primary-foreground" />
            </span>
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}