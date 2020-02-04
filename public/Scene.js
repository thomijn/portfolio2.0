// Auto-generated by https://github.com/react-spring/gltfjsx

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useLoader(GLTFLoader, '/scene.gltf')

  return (
    <group ref={group} {...props} dispose={null}>
      <scene name="OSG_Scene">
        <group name="RootNode_(gltf_orientation_matrix)" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="RootNode_(model_correction_matrix)">
            <group name="Root">
              <group name="Lamp" position={[4.08, 2.08, 5.9]} rotation={[-0.27, 0.6, 1.93]} scale={[1, 1, 1]}>
                <group name="Lamp" />
              </group>
              <group name="Plane">
                <mesh material={materials['Root']} geometry={nodes['Plane_0'].geometry} name="Plane_0" />
              </group>
              <group name="Plane001">
                <mesh material={materials['Root']} geometry={nodes['Plane001_0'].geometry} name="Plane001_0" />
              </group>
              <group name="Lamp001" position={[-7.88, 6.21, 2.02]} rotation={[-0.27, 0.6, 1.93]} scale={[1, 1, 1]}>
                <group name="Lamp001" />
              </group>
              <group
                name="Cylinder"
                position={[0.01, 2.67, 0.2]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.16, 0.28, 3.31]}>
                <mesh material={materials['Root']} geometry={nodes['Cylinder_0'].geometry} name="Cylinder_0" />
              </group>
              <group
                name="Cylinder002"
                position={[-3.7, 2.8, 0.08]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.16, 0.16, 0.26]}>
                <mesh material={materials['Root']} geometry={nodes['Cylinder002_0'].geometry} name="Cylinder002_0" />
              </group>
              <group
                name="Circle"
                position={[0.43, 2.93, 5.61]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.11, 0.11, 0.11]}>
                <mesh material={materials['Root']} geometry={nodes['Circle_0'].geometry} name="Circle_0" />
              </group>
              <group
                name="Circle001"
                position={[0.43, 2.93, 5.61]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.11, 0.11, 0.11]}>
                <mesh
                  material={materials['Material.002']}
                  geometry={nodes['Circle001_0'].geometry}
                  name="Circle001_0"
                />
              </group>
            </group>
          </group>
        </group>
      </scene>
    </group>
  )
}
