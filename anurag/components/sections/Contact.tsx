'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, MapPin, Send, ArrowRight, Heart } from 'lucide-react';

// GitHub Icon
const GitHubIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

// LinkedIn Icon
const LinkedInIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// Twitter / X Icon
const TwitterIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Email Icon (already from lucide, but as inline SVG)
const EmailIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: PORTFOLIO_DATA.email,
      href: `mailto:${PORTFOLIO_DATA.email}`,
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: PORTFOLIO_DATA.location,
      href: null,
    },
    {
      icon: <LinkedInIcon />,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: PORTFOLIO_DATA.socials.find((s) => s.name === 'LinkedIn')?.url,
    },
  ];

  const socialIcons: Record<string, React.ReactNode> = {
    GitHub: <GitHubIcon />,
    LinkedIn: <LinkedInIcon />,
    Twitter: <TwitterIcon />,
    Email: <EmailIcon />,
  };

  return (
    <section id="contact" ref={ref} className="relative py-10 overflow-hidden">

      {/* background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="space-y-16"
        >

          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Let&apos;s Work{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Together
              </span>
            </h2>

          </motion.div>

          {/* Left + Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* LEFT */}
            <motion.div variants={itemVariants} className="space-y-8">

              {/* tagline card */}
              <div className="p-8 rounded-2xl border border-border space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Open to new opportunities
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether it&apos;s a full-time role, freelance project, or just a chat about tech —
                  my inbox is always open. I&apos;ll get back to you within 24 hours.
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  <span>Available for work</span>
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
              </div>

              {/* contact info */}
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white/50 dark:bg-background/50 hover:border-primary transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-semibold text-foreground hover:text-primary transition-colors truncate block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-foreground">{item.value}</p>
                      )}
                    </div>
                    {item.href && (
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                    )}
                  </div>
                ))}
              </div>

            </motion.div>

            {/* RIGHT — form */}
            <motion.div
              variants={itemVariants}
              className="p-8 rounded-2xl border border-border bg-white/70 dark:bg-background/70 backdrop-blur-sm shadow-sm"
            >
              <div className="space-y-1 mb-6">
                <h3 className="text-xl font-bold text-foreground">Send a message</h3>
                <p className="text-sm text-muted-foreground">Fill out the form and I&apos;ll be in touch.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-white dark:bg-background focus:outline-none focus:border-primary transition-colors text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-white dark:bg-background focus:outline-none focus:border-primary transition-colors text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-white dark:bg-background focus:outline-none focus:border-primary transition-colors resize-none text-sm"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  {submitted ? (
                    'Message Sent! 🎉'
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>

              {/* socials */}
              <div className="space-y-3 mt-6 mb-2">
                <p className="text-sm font-medium text-muted-foreground">Find me on</p>
                <div className="flex gap-3">
                  {PORTFOLIO_DATA.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      title={social.name}
                      className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all"
                    >
                      {socialIcons[social.name] ?? <ArrowRight className="w-4 h-4" />}
                    </a>
                  ))}
                </div>
              </div>


            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}