import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from 'react-three-fiber'
import * as THREE from 'three'
import { a } from "react-spring/three"

import Effects from '../ThreeJs/Effects'

const Box = ({ rotation, args, mouse }) => {
    const ref = useRef()
    const [mobile, setmobile] = useState(false)
    const { size } = useThree()
    useFrame(({ clock }) => {
        size.width <= 600 ? setmobile(true) : setmobile(false)
        if (!mobile) {
            ref.current.position.x = ref.current.position.x += (mobile ? 0 + mouse.current[0] / 800 : 18 + mouse.current[0] / 800 - ref.current.position.x) * 0.05
            ref.current.position.y = ref.current.position.y += (5 + mouse.current[1] / 800 - ref.current.position.y) * 0.05
        } else {
            ref.current.position.x = 8
            ref.current.position.z = 0
            ref.current.position.y = 6
        }
        ref.current.rotation.y = ref.current.rotation.y = ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.3

    })
    return (
        <a.mesh ref={ref} rotation={rotation}>
            <boxBufferGeometry attach="geometry" args={args} />
            <meshPhongMaterial attach="material" color="#2a2b45" />
        </a.mesh>
    )
}

const ProjectCanvas = ({ top, mouse }) => {
    return (
        <Canvas
            gl={{ alpha: false, antialias: false, logarithmicDepthBuffer: true }}
            camera={{ fov: 75, position: [5, 0, 20] }}
            onCreated={({ gl }) => {
                gl.setClearColor('white')
                gl.toneMapping = THREE.ACESFilmicToneMapping
                gl.outputEncoding = THREE.LinearEncoding
            }}
        >
            <ambientLight intensity={1.1} />
            <pointLight position={[100, 100, 100]} intensity={1} />
            <pointLight position={[-100, -100, -100]} intensity={1} color="#000" />
            <Box
                mouse={mouse}
                args={[5, 1, 2]}
                position={top.interpolate(top => [18, 5, 0])}
                rotation={top.interpolate(top => [0.5 + top / 400, 0.5, 0])}
            />
            <Suspense fallback={null}>
                <Effects />
            </Suspense>
        </Canvas>
    )
}

export default ProjectCanvas
