"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";

export default function Camera() {
  return (
    <Canvas
      camera={{
        fov: 64,
        position: [2.3, 1.5, 2.3],
      }}
    >
      <ambientLight intensity={2} />
      <OrbitControls enableZoom={false} />
      {/* <ScrollControls pages={3} damping={0.25}>
      </ScrollControls> */}
    </Canvas>
  );
}
