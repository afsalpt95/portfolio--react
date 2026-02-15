import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const count = 600;
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return arr;
  }, []);

  const sizes = useMemo(() => {
    const arr = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      arr[i] = Math.random() * 2 + 0.5;
    }
    return arr;
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) return;
    mouseRef.current.x += (pointer.x * 2 - mouseRef.current.x) * 0.02;
    mouseRef.current.y += (pointer.y * 2 - mouseRef.current.y) * 0.02;
    meshRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.1) * 0.1 + mouseRef.current.y * 0.1;
    meshRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.15) * 0.1 + mouseRef.current.x * 0.1;

    const posArr = meshRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      posArr[i * 3 + 1] += Math.sin(clock.elapsedTime * 0.3 + i * 0.1) * 0.002;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={count} array={sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#00d4ff"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingOrbs() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.elapsedTime * 0.05;
  });

  return (
    <group ref={groupRef}>
      {[
        { pos: [3, 2, -5] as [number, number, number], color: "#00d4ff", scale: 0.8 },
        { pos: [-4, -1, -6] as [number, number, number], color: "#7c3aed", scale: 1.2 },
        { pos: [1, -3, -4] as [number, number, number], color: "#00d4ff", scale: 0.5 },
        { pos: [-2, 3, -7] as [number, number, number], color: "#7c3aed", scale: 0.7 },
      ].map((orb, i) => (
        <mesh key={i} position={orb.pos} scale={orb.scale}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color={orb.color} transparent opacity={0.04} />
        </mesh>
      ))}
    </group>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <Particles />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
}
