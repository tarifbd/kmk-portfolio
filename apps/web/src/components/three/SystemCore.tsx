'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { scrollStore } from '@/lib/scrollStore';

/**
 * "Finance-systems core" — a procedural, low-poly object that reads as both an
 * ordered financial structure and an automation engine. No GLB assets.
 * It evolves with page scroll progress (read imperatively from scrollStore):
 *   hero (right, gold) → travels to centre → nodes ignite → gold/blue merge →
 *   simplifies near the end. Colours chosen to read well on a LIGHT background
 *   (normal blending, no additive — additive washes out on cream).
 */

const GOLD = new THREE.Color('#A87818');
const GOLD_SOFT = new THREE.Color('#C9A84C');
const BLUE = new THREE.Color('#1D50C8');
const BLUE_SOFT = new THREE.Color('#3B82F6');
const NAVY = new THREE.Color('#0B1527');

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const smooth = (e0: number, e1: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
};

function makeGlowTexture() {
  const size = 64;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  if (ctx) {
    const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.4, 'rgba(255,255,255,0.85)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export default function SystemCore({ mobile = false }: { mobile?: boolean }) {
  const group = useRef<THREE.Group>(null);
  const shell = useRef<THREE.LineSegments>(null);
  const crystal = useRef<THREE.Mesh>(null);
  const ringGold = useRef<THREE.Mesh>(null);
  const ringBlue = useRef<THREE.Mesh>(null);

  const detail = mobile ? 0 : 1;
  const glow = useMemo(() => makeGlowTexture(), []);

  const shellGeo = useMemo(
    () => new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.35, detail)),
    [detail],
  );
  const nodeGeo = useMemo(() => {
    const ico = new THREE.IcosahedronGeometry(1.35, detail);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', ico.getAttribute('position').clone());
    return g;
  }, [detail]);
  const nodeMat = useMemo(
    () =>
      new THREE.PointsMaterial({
        size: mobile ? 0.17 : 0.13,
        map: glow,
        transparent: true,
        depthWrite: false,
        color: GOLD_SOFT.clone(),
        sizeAttenuation: true,
      }),
    [glow, mobile],
  );

  const tmpA = useMemo(() => new THREE.Color(), []);
  const tmpB = useMemo(() => new THREE.Color(), []);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    const d = Math.min(delta, 0.05);
    const { progress: p, velocity } = scrollStore.get();

    // Travel: right (hero) → centre, then gently recede.
    const targetX = mobile ? 0 : lerp(1.75, 0, smooth(0.05, 0.36, p));
    g.position.x += (targetX - g.position.x) * Math.min(1, d * 3);
    const targetScale = (mobile ? 0.74 : 1) * lerp(1, 0.84, smooth(0.82, 1, p));
    g.scale.x += (targetScale - g.scale.x) * Math.min(1, d * 3);
    g.scale.y = g.scale.x;
    g.scale.z = g.scale.x;

    // Continuous rotation, nudged by scroll velocity.
    g.rotation.y += d * (0.18 + Math.min(Math.abs(velocity) * 0.012, 0.45));
    g.rotation.x = lerp(g.rotation.x, -0.25 + p * 0.6, Math.min(1, d * 2));

    // Shell breathes/expands around the "projects" zone, then settles.
    if (shell.current) {
      const expand = 1 + smooth(0.45, 0.62, p) * (1 - smooth(0.62, 0.86, p)) * 0.22;
      shell.current.scale.setScalar(expand);
      (shell.current.material as THREE.LineBasicMaterial).opacity = lerp(0.22, 0.4, p);
    }

    // Crystal: emissive colour gold → blue, soft pulse.
    if (crystal.current) {
      const m = crystal.current.material as THREE.MeshStandardMaterial;
      tmpA.copy(GOLD).lerp(BLUE, smooth(0.3, 0.7, p));
      m.emissive.copy(tmpA);
      m.emissiveIntensity = 0.28 + 0.22 * (0.5 + 0.5 * Math.sin(state.clock.elapsedTime * 1.4));
      crystal.current.rotation.y -= d * 0.1;
    }

    // Nodes ignite + shift colour mid-scroll.
    tmpB.copy(GOLD_SOFT).lerp(BLUE_SOFT, smooth(0.4, 0.7, p));
    nodeMat.color.copy(tmpB);
    nodeMat.opacity = lerp(0.7, 1, smooth(0.35, 0.6, p));

    if (ringGold.current) ringGold.current.rotation.z += d * 0.25;
    if (ringBlue.current) ringBlue.current.rotation.z -= d * 0.32;
  });

  return (
    <group ref={group} position={[1.75, 0, 0]} scale={mobile ? 0.74 : 1}>
      <lineSegments ref={shell} geometry={shellGeo}>
        <lineBasicMaterial color={NAVY} transparent opacity={0.26} />
      </lineSegments>

      <points geometry={nodeGeo} material={nodeMat} />

      <mesh ref={crystal}>
        <icosahedronGeometry args={[0.66, 0]} />
        <meshStandardMaterial
          color="#0B1527"
          metalness={0.55}
          roughness={0.3}
          flatShading
          emissive="#A87818"
          emissiveIntensity={0.3}
        />
      </mesh>

      <mesh ref={ringGold} rotation={[Math.PI / 2.2, 0, 0]}>
        <torusGeometry args={[1.85, 0.012, 12, 120]} />
        <meshBasicMaterial color={GOLD} transparent opacity={0.85} />
      </mesh>

      <mesh ref={ringBlue} rotation={[Math.PI / 2.8, 0.6, 0]}>
        <torusGeometry args={[2.15, 0.01, 12, 120]} />
        <meshBasicMaterial color={BLUE} transparent opacity={0.55} />
      </mesh>
    </group>
  );
}
