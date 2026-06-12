'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface HoverGlowEffectProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function HoverGlowEffect({
  children,
  className = '',
  glowColor = 'from-primary/40 to-accent/40',
}: HoverGlowEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${glowColor} blur-2xl opacity-0 pointer-events-none`}
        animate={{
          opacity: isHovered ? 1 : 0,
          x: isHovered ? mousePos.x - 100 : -100,
          y: isHovered ? mousePos.y - 100 : -100,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
