import React, { useRef, Suspense } from 'react';
import '../App.css';
import * as THREE from 'three'
import { Canvas, useFrame, useThree, Dom, } from 'react-three-fiber'
import { a } from 'react-spring/three'

import Effects from './Effects'
import TitleComponent from '../Segments/TitleComponent';
import Model from './Scene';
import Work from './3DComponents/Work';
import Phone from './Contact';
import Loading from './Loading';

function Title({ position }) {
    const { size } = useThree()
    const ref = useRef()
    useFrame(() => {
        if (size.width <= 600) {
            ref.current.position.x = 0
        }
    })

    return (
        <a.group ref={ref} position={position}>
            <Dom prepend={true} style={{ margin: "1em", zIndex: 1000 }} center={true} position={[0, 0, 0]}>
                <TitleComponent />
            </Dom>
        </a.group >
    )
}

function Content({ position, top }) {
    return (
        <a.mesh rotation={[0, 0, 0.3]} position={position}>
            <planeBufferGeometry attach="geometry" args={[400, 100]} />
            <meshPhongMaterial attach="material" color="#9c9c9c" transparent opacity={0.1} />
        </a.mesh>
    )
}

function Dolly({ y, top }) {

    useFrame(({ clock, camera }) => {
        camera.position.x = camera.position.x += (0 - camera.position.x) * 0.05
        camera.position.z = camera.position.z += (70 - camera.position.z) * 0.05

        camera.updateProjectionMatrix()
    })
    return null
}

const CanvasComponent = ({ mouse, top, mouseText }) => {
    return (
        <>
            <Canvas
                pixelRatio={window.devicePixelRatio}
                concurrent
                className="canvas"
                gl={{ alpha: false, antialias: false, logarithmicDepthBuffer: true }}
                camera={{ fov: 75, position: [5, 0, 60] }}
                onCreated={({ gl }) => {
                    gl.setClearColor('white')
                    gl.toneMapping = THREE.ACESFilmicToneMapping
                    gl.outputEncoding = THREE.LinearEncoding
                }}>
                <Suspense fallback={
                    <Dom position={[0, 0, 0]} center className="loading">

                    </Dom>
                }>
                    <group position={[5, -3, 60]}>
                        <Model position={top.interpolate(top => [0, 0 + top / 150, 0])} rotation={top.interpolate(top => [0, 0 + top / 500, 0])} />
                    </group>

                    <group position={[300, -300, 0]}>
                        <Phone top={top} />
                    </group>

                    <ambientLight intensity={1.1} />
                    <pointLight position={[100, 100, 100]} intensity={1} color="white" />
                    <pointLight position={[-100, -100, -100]} intensity={5} color="white" />
                    <Content top={top} position={top.interpolate(top => [0, 60 + top / -100, -20])} />
                    <Title mouse={mouseText} top={top} position={top.interpolate(top => [0, 1 + top / 35, 38])} />
                    <Work top={top} />
                    <Suspense fallback={null}>
                        <Effects />
                    </Suspense>
                    <Dolly top={top} />
                </Suspense>
            </Canvas >
            <Loading />
        </>
    )
}

export default CanvasComponent
