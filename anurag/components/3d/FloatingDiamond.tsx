'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingDiamondProps {
  position: [number, number, number];
  scale?: number;
}

export default function FloatingDiamond({ position, scale = 1 }: FloatingDiamondProps) {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const floatOffset = useRef(Math.random() * Math.PI * 2);

  useFrame((_, delta) => {
    if (groupRef.current) {
      // slow Y spin on the whole group
      groupRef.current.rotation.y += delta * 0.5;
      floatOffset.current += delta * 0.6;
      groupRef.current.position.y = position[1] + Math.sin(floatOffset.current) * 0.55;
    }
    if (innerRef.current) {
      // inner gem counter-rotates for a gyroscope effect
      innerRef.current.rotation.x += delta * 1.2;
      innerRef.current.rotation.z += delta * 0.8;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* outer shell — transparent glass-like */}
      <mesh>
        <octahedronGeometry args={[1.0, 0]} />
        <meshPhysicalMaterial
          color="#a5b4fc"
          transparent
          opacity={0.15}
          roughness={0}
          metalness={0}
          transmission={0.9}
          thickness={1.2}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* outer wireframe edges */}
      <mesh>
        <octahedronGeometry args={[1.0, 0]} />
        <meshBasicMaterial color="#6366f1" wireframe opacity={0.5} transparent />
      </mesh>

      {/* inner solid gem */}
      <mesh ref={innerRef} scale={0.52}>
        <octahedronGeometry args={[1.0, 0]} />
        <meshStandardMaterial
          color="#4f46e5"
          emissive="#4338ca"
          emissiveIntensity={0.4}
          metalness={0.5}
          roughness={0.1}
        />
      </mesh>

      {/* glowing core point */}
      <mesh scale={0.18}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="#c7d2fe" />
      </mesh>
    </group>
  );
}