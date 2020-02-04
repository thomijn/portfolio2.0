import React, { useRef, useState } from 'react'
import { useLoader, useFrame, useThree } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { a } from 'react-spring/three'

export default function Phone({ top }) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, '/scene.gltf')
  const { size } = useThree()
  const [mobile, setmobile] = useState(false)
  useFrame(({ clock }) => {
    size.width <= 600 ? setmobile(true) : setmobile(false)
    group.current.rotation.y = Math.sin(clock.getElapsedTime()) * 1
    group.current.position.z = Math.sin(clock.getElapsedTime()) * 10

  })
  return (
    <a.group position={top.interpolate(top => [0 + top / -100, mobile ? -180 + top / 38 : 0 + top / 38, 0])} dispose={null}>
      <scene name="OSG_Scene">
        <group name="RootNode_(gltf_orientation_matrix)" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="RootNode_(model_correction_matrix)">
            <group name="phonec4dfbx" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode">

                <a.group ref={group} name="end_call_2" position={[-122.61, 28.27, 1.5]} rotation={[0, 0, 0.7]}>
                  <mesh
                    material={materials['end_call_2']}
                    geometry={nodes['end_call_2_end_call_2_0'].geometry}
                    name="end_call_2_end_call_2_0"
                  >
                    <meshPhysicalMaterial attach="material" color="#2f314f" />
                  </mesh>
                </a.group>
              </group>
            </group>
          </group>
        </group>
      </scene>
    </a.group>
  )
}
