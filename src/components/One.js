
import React, { Suspense } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber"

import { Physics, usePlane, useBox, useSphere } from "use-cannon";




export default function One() {
   


  return (

    <Canvas camera={{ position: [0, 0, 3], fov: 80 }}>
    <ambientLight intensity={0.3} />
   </Canvas>

  )
}
