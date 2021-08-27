import React, {useRef} from 'react'
import { Container, Navbar, Nav, Col, Row, Table, CardGroup, Card } from 'react-bootstrap';
import * as THREE from "three"

import { Canvas, useFrame, useThree } from "react-three-fiber";
import { OrbitControls, Stars, softShadows } from "@react-three/drei";
import { Physics, usePlane, useBox } from "use-cannon";

softShadows();

function Rig() {
    return useFrame((state) => {
      state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, 1.5 + state.mouse.x / 4, 0.075)
      state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 1.5 + state.mouse.y / 4, 0.075)
    })
  }

function Box() {
    const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));

    return (
      <mesh
        onClick={() => {
          api.velocity.set(0, 4, 2);
        }}        
        ref={ref}
        position={[0, 2, 0]} castShadow receiveShadow
      >
        <boxBufferGeometry attach="geometry" />
        <meshStandardMaterial attach="material" color="hotpink" roughness={0} metalness={0.1}  />
      </mesh>
    );
  }
  
  function Plane() {
    const [ref] = usePlane(() => ({
      rotation: [-Math.PI / 2, 0, 0],
    }));
    return (
      <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow>
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <meshLambertMaterial attach="material" color="lightblue" />
      </mesh>
    );
  }



function HomeComponent(props) {
    return (
        <div className="home">
            <Container>
                <Canvas shadows>
                    <OrbitControls />
                    <Stars />
                    <fog attach="fog" args={["grey", 0, 40]} />
                    <ambientLight intensity={0.4} />
                    <spotLight position={[10, 15, 10]} angle={0.3} />
                    <directionalLight position={[0, 2, 0]} intensity={1} />
                    <directionalLight position={[2, 0, 0]} intensity={0.5} />
                    <directionalLight position={[0, 0, 2]} intensity={0.2} />
                    <Physics>
                        <Box />
                        <Plane />
                    </Physics>
                    <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
                        <planeBufferGeometry args={[10, 10, 1, 1]} />
                        <shadowMaterial transparent opacity={0.2} />
                    </mesh>
                    <Rig />
                </Canvas>
            </Container>
        </div>
    );
}

export default HomeComponent;