import React, { Suspense, useRef } from 'react';
import '../App.css';
import * as THREE from 'three'
import { Canvas, useFrame } from 'react-three-fiber'

import Scene from './Scene'

const CanvasComponent = ({ top, mouseText, scrollIcon }) => {
    const mouse = useRef({ x: 700, y: 300 })
    return (
        <> 
            <Canvas
                onMouseMove={e => (mouse.current = { x: e.clientX, y: e.clientY })}
                shadowMap
                pixelRatio={window.devicePixelRatio}
                concurrent
                className="canvas"
                gl={{ alpha: false, antialias: false, logarithmicDepthBuffer: true }}
                camera={{ zoom: 40, position: [0, 4 , 150], rotation: [-0.015,0,0] }}
                onCreated={({ gl }) => {
                    gl.setClearColor('black')
                    gl.toneMapping = THREE.Uncharted2ToneMapping
                    gl.outputEncoding = THREE.LinearEncoding
                }}>
                <Suspense fallback={null}>
                    <Scene mouse={mouse} />
                </Suspense>
            </Canvas >
            {/* <ScrollIcon scrollIcon={scrollIcon} /> */}
            {/* <Loading /> */}
        </>
    )
}

export default CanvasComponent
