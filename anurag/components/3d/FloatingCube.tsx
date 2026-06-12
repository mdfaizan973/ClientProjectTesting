'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingCubeProps {
  position: [number, number, number];
  scale?: number;
}

export default function FloatingCube({ position, scale = 1 }: FloatingCubeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const floatOffset = useRef(Math.random() * Math.PI * 2);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.35;
      meshRef.current.rotation.y += delta * 0.5;
      floatOffset.current += delta * 0.7;
      const y = position[1] + Math.sin(floatOffset.current) * 0.5;
      meshRef.current.position.y = y;
      if (wireRef.current) {
        wireRef.current.rotation.copy(meshRef.current.rotation);
        wireRef.current.position.y = y;
      }
    }
  });

  return (
    <>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial
          color="#4f46e5"
          emissive="#4338ca"
          emissiveIntensity={0.25}
          metalness={0.2}
          roughness={0.25}
        />
      </mesh>
      <mesh ref={wireRef} position={position} scale={scale * 1.02}>
        <icosahedronGeometry args={[0.9, 0]} />
        <meshBasicMaterial color="#818cf8" wireframe opacity={0.3} transparent />
      </mesh>
    </>
  );
}