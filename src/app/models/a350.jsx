/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/models/a350.glb -o src/app/models/a350.jsx -r public 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function PlaneA350(props) {
  const { nodes, materials } = useGLTF('/models/a350.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-31.679, 6.054, -8.712]} scale={0.025}>
        <mesh geometry={nodes.Mesh005.geometry} material={materials['treetops_by_ninjacatt22-d5266c1']} />
        <mesh geometry={nodes.Mesh005_1.geometry} material={materials['0131_Silver']} />
        <mesh geometry={nodes.Mesh005_2.geometry} material={materials['0020_Red']} />
        <mesh geometry={nodes.Mesh005_3.geometry} material={materials.Color_003} />
        <mesh geometry={nodes.Mesh005_4.geometry} material={materials['<Gray6>1']} />
        <mesh geometry={nodes.Mesh005_5.geometry} material={materials.skp_front_default} />
        <mesh geometry={nodes.Mesh005_6.geometry} material={materials['<Gray6>']} />
        <mesh geometry={nodes.Mesh005_7.geometry} material={materials.Material12} />
        <mesh geometry={nodes.Mesh005_8.geometry} material={materials.Material3} />
        <mesh geometry={nodes.Mesh005_9.geometry} material={materials.Material13} />
        <mesh geometry={nodes.Mesh005_10.geometry} material={materials['0134_DimGray']} />
        <mesh geometry={nodes.Mesh005_11.geometry} material={materials['0128_White']} />
        <mesh geometry={nodes.Mesh005_12.geometry} material={materials['0132_LightGray']} />
        <mesh geometry={nodes.Mesh005_13.geometry} material={materials.Material9} />
        <mesh geometry={nodes.Mesh005_14.geometry} material={materials.Translucent_Glass_Gray} />
        <mesh geometry={nodes.Mesh005_15.geometry} material={materials.Color_009} />
        <mesh geometry={nodes.Mesh005_16.geometry} material={materials.Color_000} />
        <mesh geometry={nodes.Mesh005_17.geometry} material={materials.Color_006} />
        <mesh geometry={nodes.Mesh005_18.geometry} material={materials.Color_004} />
        <mesh geometry={nodes.Mesh005_19.geometry} material={materials.Color_001} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/a350.glb')
