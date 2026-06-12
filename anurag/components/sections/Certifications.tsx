'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { BadgeCheckIcon } from 'lucide-react';

export default function Certifications() {
  const { ref, isVisible } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // const getCategoryColor = (category: string) => {
  //   const colors: { [key: string]: string } = {
  //     Cloud: 'from-blue-500 to-cyan-500',
  //     Frontend: 'from-purple-500 to-pink-500',
  //     'Full-Stack': 'from-orange-500 to-red-500',
  //     Accessibility: 'from-green-500 to-emerald-500',
  //     default: 'from-primary to-accent',
  //   };
  //   return colors[category] || colors.default;
  // };

  // const getIconEmoji = (icon: string) => {
  //   const icons: { [key: string]: string } = {
  //     cloud: '☁️',
  //     code: '💻',
  //     layers: '📚',
  //     accessibility: '♿',
  //     certificate: '🎖️',
  //   };
  //   return icons[icon] || '🏆';
  // };

  return (
    <section id="certifications" ref={ref} className="relative py-10">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">
              Certifications & Credentials
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-accent to-primary rounded-full" />
          </motion.div>

          {/* Category filter and grid */}
          <motion.div variants={containerVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PORTFOLIO_DATA.certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  className="group relative h-full"
                >
                  {/* Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative h-full px-4 py-6 rounded-xl border border-border/50 hover:border-primary/50 bg-white/50 backdrop-blur transition-all duration-300 hover:shadow-xl flex flex-col">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br flex items-center bg-primary/10 justify-center text-2xl shadow-lg`}>
                          <BadgeCheckIcon className="w-6 h-6 text-accent" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                          {cert.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-foreground line-clamp-2 mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>

                    {/* Body */}
                    <div className="space-y-4 flex-grow">
                      {/* Issue Date */}
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                          Issued
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          {new Date(cert.issueDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                        </p>
                      </div>

                      {/* Expiry Date */}
                      {cert.expiryDate && (
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                            Expires
                          </p>
                          <p className="text-sm font-medium text-foreground">
                            {new Date(cert.expiryDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                          </p>
                        </div>
                      )}

                      {/* Credential ID */}
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                          Credential ID
                        </p>
                        <p className="text-xs font-mono text-muted-foreground break-all">
                          {cert.credentialId}
                        </p>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-4 border-t border-border/50 mt-4">
                      <a
                        href={cert.credentialUrl}
                        className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium text-sm transition-colors group/link"
                      >
                        View Credential
                        <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
