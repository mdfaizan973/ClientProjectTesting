'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface TechOrbitProps {
  technologies: string[];
}

export default function TechOrbit({ technologies }: TechOrbitProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central sphere */}
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshPhongMaterial 
          color="#5b7dff"
          emissive="#4a6dd8"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Orbiting tech nodes */}
      {technologies.map((tech, index) => {
        const angle = (index / technologies.length) * Math.PI * 2;
        const x = Math.cos(angle) * 5;
        const z = Math.sin(angle) * 5;
        const y = Math.sin(index * 0.5) * 1.5;

        return (
          <group key={tech} position={[x, y, z]}>
            <mesh>
              <sphereGeometry args={[0.3, 16, 16]} />
              <meshPhongMaterial 
                color={`hsl(${(index * 36) % 360}, 70%, 50%)`}
                emissive={`hsl(${(index * 36) % 360}, 70%, 40%)`}
                emissiveIntensity={0.2}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}
