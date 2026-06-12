'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingCodeProps {
  position: [number, number, number];
}

export default function FloatingCode({ position }: FloatingCodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const floatOffset = useRef(Math.random() * Math.PI * 2);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.z += delta * 0.45;
      floatOffset.current += delta * 0.65;
      meshRef.current.position.y = position[1] + Math.sin(floatOffset.current) * 0.45;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusKnotGeometry args={[0.6, 0.2, 100, 16]} />
      <meshStandardMaterial
  color="#ea580c"
  emissive="#c2410c"
  emissiveIntensity={0.25}
  metalness={0.2}
  roughness={0.3}
/>
    </mesh>
  );
}