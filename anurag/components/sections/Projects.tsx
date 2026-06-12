'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Image from 'next/image';
import { ExternalLink, GitBranch } from 'lucide-react';

const isRealLink = (url?: string) => Boolean(url && url.trim() && url !== '#');

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

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

  return (
    <section id="projects" ref={ref} className="relative py-10 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4 text-center">

            <h2 className="text-3xl md:text-4xl font-bold bg-primary bg-clip-text text-transparent">
            Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A curated collection of projects I've worked on
            </p>
            <div className="flex justify-center gap-2 pt-2">
              <div className="h-1 w-8 bg-primary rounded-full" />
              <div className="h-1 w-8 bg-accent rounded-full" />
              <div className="h-1 w-8 bg-primary rounded-full" />
            </div>
          </motion.div>

          {/* Other Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {PORTFOLIO_DATA?.projects?.map((project) => {
                const projectLink = isRealLink(project.link) ? project.link : null;
                const githubUrl = isRealLink(project.githubUrl) ? project.githubUrl : null;
                const liveUrl = isRealLink(project.liveUrl) ? project.liveUrl : null;

                return (
                  <motion.article
                    key={project.id}
                    variants={itemVariants}
                    className="group rounded-xl border border-border overflow-hidden hover:border-primary transition-all hover:shadow-lg bg-white"
                  >
                    {projectLink ? (
                      <a
                        href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={project.image.replace('.jpg', '.png')}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </a>
                    ) : (
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={project.image.replace('.jpg', '.png')}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6 space-y-3">
                      {projectLink ? (
                        <a
                          href={projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h4>
                        </a>
                      ) : (
                        <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h4>
                      )}
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 pt-2 items-center justify-between">
                        <div className="flex gap-1 justify-center items-center">
                          {project.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 rounded text-xs bg-primary/10 text-primary font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {(githubUrl || liveUrl) && (
                          <div className="flex gap-2 justify-end">
                            {githubUrl && (
                              <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all"
                                aria-label={`${project.title} GitHub repository`}
                              >
                                <GitBranch className="w-4 h-4 text-muted-foreground hover:text-primary" />
                              </a>
                            )}
                            {liveUrl && (
                              <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all"
                                aria-label={`${project.title} live demo`}
                              >
                                <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
