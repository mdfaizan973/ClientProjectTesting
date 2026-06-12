'use client';

import { useMemo } from 'react';
import * as THREE from 'three';

export default function DotGrid() {
    const points = useMemo(() => {
        const positions: number[] = [];
        for (let x = -10; x <= 10; x += 1.4) {
            for (let y = -6; y <= 6; y += 1.4) {
                positions.push(x, y, -9);
            }
        }
        return new Float32Array(positions);
    }, []);

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[points, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                color="#000000" // black
                size={0.05}
                sizeAttenuation
                transparent
                opacity={0.4}
            />
        </points>
    );
}