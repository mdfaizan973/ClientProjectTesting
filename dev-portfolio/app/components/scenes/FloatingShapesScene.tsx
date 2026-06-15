'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'

function FloatingShape({
  position,
  geometry,
  color,
  speed = 1,
  wireframe = false,
}: {
  position: [number, number, number]
  geometry: 'icosahedron' | 'torus' | 'box' | 'octahedron'
  color: string
  speed?: number
  wireframe?: boolean
}) {
  const ref = useRef<THREE.Mesh>(null!)
  const initialY = position[1]

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    ref.current.rotation.x = t * 0.15 * speed
    ref.current.rotation.y = t * 0.2 * speed
    ref.current.position.y = initialY + Math.sin(t * 0.5 * speed) * 0.4
  })

  const geo = {
    icosahedron: <icosahedronGeometry args={[0.8, 0]} />,
    torus: <torusGeometry args={[0.6, 0.22, 16, 32]} />,
    box: <boxGeometry args={[1, 1, 1]} />,
    octahedron: <octahedronGeometry args={[0.9, 0]} />,
  }[geometry]

  return (
    <mesh ref={ref} position={position}>
      {geo}
      <meshStandardMaterial
        color={color}
        roughness={0.3}
        metalness={0.6}
        wireframe={wireframe}
      />
    </mesh>
  )
}

export default function FloatingShapesScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, -5, 5]} intensity={0.6} color="#22D3EE" />

        <FloatingShape position={[-3.2, 1.2, -2]} geometry="icosahedron" color="#6366F1" speed={0.8} />
        <FloatingShape position={[3.2, -1, -3]} geometry="torus" color="#22D3EE" speed={1.2} />
        <FloatingShape position={[1.8, 2.2, -4]} geometry="octahedron" color="#A855F7" speed={1} wireframe />
        <FloatingShape position={[-2.2, -2, -1]} geometry="box" color="#22D3EE" speed={0.6} wireframe />
        <FloatingShape position={[0.5, -2.6, -5]} geometry="icosahedron" color="#6366F1" speed={0.5} />
      </Suspense>
    </Canvas>
  )
}
