/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/hexagon.glb -o src/components/Hexagon.jsx -r public
*/

import { useGLTF } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import { RigidBody } from "@react-three/rapier";

const TIME_AFTER_HIT = 600;

export function Hexagon({ color, hit,...props }) {
  const [disabled, setDisabled] = useState(false);
  const { nodes, materials } = useGLTF("/models/hexagon.glb", "draco/gltf/");


  // useEffect(() => {
  //   if (hit) {
  //     setTimeout(() => {
  //       setDisabled(hit);
  //       // playAudio(`Pop${randInt(1, 5)}`);
  //     }, TIME_AFTER_HIT);
  //   }
  // }, [hit]);

  if (hit) {
    return null;
  }

  return (
    <RigidBody
      {...props}
      type={"fixed"}
      name="hexagon"
      colliders="hull"
    >
      <group {...props}>
        <mesh geometry={nodes.Hexagon.geometry} material={materials.hexagon}>
          <meshStandardMaterial
            {...materials.hexagon}
            color={color}
            transparent
          />
        </mesh>
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/models/hexagon.glb", "draco/gltf/");
