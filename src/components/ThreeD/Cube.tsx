import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, MeshStandardMaterial } from 'three';
import { useSpring, animated } from '@react-spring/web';

export const Cube = () => {
  const meshRef = useRef<Mesh>(null);
  const materialRef = useRef<MeshStandardMaterial>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    
    if (materialRef.current) {
      materialRef.current.emissiveIntensity = Math.sin(state.clock.getElapsedTime()) * 0.5 + 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        ref={materialRef}
        color="#8b5cf6"
        metalness={0.8}
        roughness={0.2}
        emissive="#8b5cf6"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};