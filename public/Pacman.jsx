import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/pacman.gltf');
  
  // Define the scale factor (adjust as needed)
  const scaleFactor = 4;

  return (
    <group {...props} dispose={null} scale={[scaleFactor, scaleFactor, scaleFactor]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.s_pac_a0_cmp4} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.s_pma_a0_cmp4} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.s_pme_a0_cmp4} />
      </group>
    </group>
  );
}

useGLTF.preload('/pacman.gltf');
