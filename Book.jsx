/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 public/@shirt/book.glb
*/

import React, { useRef } from "react"

import { useGLTF } from "@react-three/drei"

export function Model(props) {
  const { nodes, materials } = useGLTF("/book.glb")
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.magazine_01_cover89.geometry}
        material={materials.magazine_01_cover89}
      />
    </group>
  )
}

useGLTF.preload("/book.glb")
