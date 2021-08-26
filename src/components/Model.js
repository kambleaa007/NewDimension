
import React, { useRef, useEffect, useState, useMemo } from "react";
import { useGLTF } from "@react-three/drei/useGLTF";

import { useAnimations } from "@react-three/drei/useAnimations";
import { useTexture } from "@react-three/drei/useTexture";

import { a, useSpring } from "@react-spring/three";
import { useGraph } from "react-three-fiber";
import { SkeletonUtils } from "three/examples/jsm/utils/SkeletonUtils"


export default function Model({ pose, ...props }) {
  const group = useRef();
  const { materials, animations, scene } = useGLTF('https://raw.githubusercontent.com/kambleaa007/NewDimension/main/public/stacy.glb');

  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes } = useGraph(clone)

  const texture = useTexture("https://raw.githubusercontent.com/kambleaa007/NewDimension/main/public/stacy.jpg")
  // Extract animation actions
  const { ref, actions, names } = useAnimations(animations)
  // Hover and animation-index states
  const [hovered, setHovered] = useState(false)
  const [index, setIndex] = useState(pose)
  // Animate the selection halo
  const { color, scale } = useSpring({ scale: hovered ? [1.15, 1.15, 1] : [1, 1, 1], color: hovered ? "hotpink" : "aquamarine" })
  // Change cursor on hover-state
  useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])
  // Change animation when the index changes
  useEffect(() => {
    // Reset and fade in animation after an index has been changed
    actions[names[index]].reset().fadeIn(0.5).play()
    // In the clean-up phase, fade it out
    return () => actions[names[index]].fadeOut(0.5)
  }, [index, actions, names])
  return (
    <group ref={ref} {...props} dispose={null}>
      <group
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setIndex((index + 1) % names.length)}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          castShadow
          receiveShadow
          geometry={nodes.stacy.geometry}
          skeleton={nodes.stacy.skeleton}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 100]}>
          <meshStandardMaterial map={texture} map-flipY={false} skinning />
        </skinnedMesh>
      </group>
      <a.mesh receiveShadow position={[0, 1, -1]} scale={scale}>
        <circleBufferGeometry args={[0.6, 64]} />
        <a.meshStandardMaterial color={color} />
      </a.mesh>
    </group>
  );
}

useGLTF.preload('https://raw.githubusercontent.com/kambleaa007/NewDimension/main/public/stacy.glb');
