'use client';

import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerformanceMonitor } from '@react-three/drei';
import SystemCore from './SystemCore';

/**
 * Canvas wrapper. Renders only while `active` (a showcase zone is in view) and
 * the tab is visible — `frameloop="never"` otherwise fully parks the GPU while
 * keeping the last frame on screen. DPR is capped and auto-lowered on decline.
 */
export default function Scene3D({ active }: { active: boolean }) {
  const [mobile, setMobile] = useState(false);
  const [dpr, setDpr] = useState(1.5);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    setMobile(isMobile);
    setDpr(isMobile ? 1.25 : 1.5);
    const onVis = () => setHidden(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  const running = active && !hidden;

  return (
    <Canvas
      frameloop={running ? 'always' : 'never'}
      dpr={dpr}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 5], fov: 42 }}
      style={{ width: '100%', height: '100%' }}
    >
      <PerformanceMonitor onDecline={() => setDpr(1)} />
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 5, 3]} intensity={1.1} color="#FBEFD0" />
      <pointLight position={[-4, -2, 2]} intensity={0.5} color="#9DBDF7" />
      <SystemCore mobile={mobile} />
    </Canvas>
  );
}
