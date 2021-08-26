
import React, { Suspense } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber"
import * as THREE from "three"
import { Container, Row } from 'react-bootstrap';

import { Physics, usePlane, useBox, useSphere } from "use-cannon";
import { OrbitControls } from "@react-three/drei/OrbitControls";

import Model from "./Model";


function Rig() {
  return useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, 1.5 + state.mouse.x / 4, 0.075)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 1.5 + state.mouse.y / 4, 0.075)
  })
}

export default function One() {
   


  return (
    <Container>
      <Row>
        Click on model
      </Row>
      <Canvas shadows camera={{ position: [1, 1.5, 2.5], fov: 50 }}>
        <ambientLight />
        <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        <group position={[0, -1, 0]}>
          <Suspense fallback={null}>
            <Model pose={4} position={[0, 0, 0]} />
            <Model pose={1} position={[2, 0, -1]} />
            <Model pose={2} position={[-2, 0, -1]} />
          </Suspense>
        </group>
        <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
          <planeBufferGeometry args={[10, 10, 1, 1]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
        <Rig />
      </Canvas>
    </Container>

    

  )
}
