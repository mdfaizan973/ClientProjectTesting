'use client'

import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('./scenes/FloatingShapesScene'), {
  ssr: false,
  loading: () => <div className="h-full w-full" />,
})

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 hidden h-full w-full lg:block">
      <Scene />
    </div>
  )
}
