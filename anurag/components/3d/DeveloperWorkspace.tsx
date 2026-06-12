'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import FloatingCube from './FloatingCube';
import FloatingCode from './FloatingCode';
import FloatingDiamond from './FloatingDiamond';


function WorkspaceContent() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, 10]} intensity={0.5} />
      <pointLight position={[-10, -10, 10]} intensity={0.5} />

      <FloatingDiamond position={[-4.5, 2.5, -3]} scale={0.7} />
      <FloatingDiamond position={[3.8, -1.5, -5]} scale={1.4} />

      <FloatingCube position={[-2.5, -2.5, -6]} scale={0.9} />
      <FloatingCube position={[4.5, 3.0, -8]} scale={1.6} />

      <FloatingCode position={[1.5, 2.8, -4]} />
      <FloatingCode position={[-4.0, -0.5, -9]} />


    </>
  );
}

export default function DeveloperWorkspace() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <WorkspaceContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
