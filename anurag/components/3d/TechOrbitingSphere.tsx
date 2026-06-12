'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import TechOrbit from './TechOrbit';

export default function TechOrbitingSphere() {
  const technologies = [
    'React', 'TypeScript', 'Next.js', 'Tailwind', 'Node.js', 
    'GraphQL', 'PostgreSQL', 'Docker', 'Three.js', 'AWS'
  ];

  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <TechOrbit technologies={technologies} />
        </Suspense>
      </Canvas>
    </div>
  );
}
