'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface InteractiveHoverCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function InteractiveHoverCard({
  children,
  className = '',
}: InteractiveHoverCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const x = e.clientX - rect.left - centerX;
    const y = e.clientY - rect.top - centerY;

    const rotX = (y / centerY) * 5;
    const rotY = -(x / centerX) * 5;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative perspective ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform: `
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
        `,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 blur-xl opacity-0 pointer-events-none"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
