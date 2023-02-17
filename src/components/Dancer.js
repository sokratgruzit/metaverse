import * as THREE from "three"
import React, { Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import Stacy from "./Stacy"

function Rig() {
  return useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, 1.5 + state.mouse.x / 4, 0.075)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 1.5 + state.mouse.y / 4, 0.075)
  })
}

export default function App() {
  return (
    <Canvas 
        shadows 
        camera={{ position: [1, 1.5, 2.5], fov: 50 }}
        style={{
            width: "100vw",
            height: "100vh"
        }}
    >
      <ambientLight />
      <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <group position={[0, -1, 0]}>
        <Suspense fallback={null}>
          <Stacy pose={4} position={[0, 0, 0]} />
          <Stacy pose={1} position={[1, 0, -1]} />
          <Stacy pose={2} position={[-1, 0, -1]} />
        </Suspense>
      </group>
      <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeBufferGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
      <Rig />
    </Canvas>
  )
}
