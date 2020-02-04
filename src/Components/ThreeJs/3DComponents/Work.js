import React, { useState, useRef } from 'react';
import { useThree, useFrame } from 'react-three-fiber'
import { a } from 'react-spring/three'

import '../../App.css';

function Work({ top, mouse }) {
    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const [mobile, setmobile] = useState(false)
    const { size } = useThree()
    useFrame(({ clock }) => {
        ref1.current.rotation.x = ref1.current.rotation.y = ref1.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.3
        ref2.current.rotation.x = ref2.current.rotation.y = ref2.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.5
        ref3.current.rotation.x = ref3.current.rotation.y = ref3.current.rotation.z = Math.sin(clock.getElapsedTime()) * -0.3
        ref4.current.rotation.x = ref4.current.rotation.y = ref4.current.rotation.z = Math.sin(clock.getElapsedTime()) * 1
        size.width <= 600 ? setmobile(true) : setmobile(false)
    })
    return (
        <a.group position={top.interpolate(top => [0, mobile ? -160 + top / 50 : -110 + top / 50, 40])}>
            <a.mesh ref={ref1} position={top.interpolate(top => [50 + top / -80, 60 + top / 600, 5])}>
                <boxBufferGeometry attach="geometry" args={[7, 1, 2]} />
                <meshPhongMaterial attach="material" color="#2a2b45" />
            </a.mesh>
            <a.mesh ref={ref1} position={top.interpolate(top => [-50 + top / 80, 80, 5])}>
                <boxBufferGeometry attach="geometry" args={[7, 1, 2]} />
                <meshPhongMaterial attach="material" color="#2a2b45" />
            </a.mesh>
            <a.mesh ref={ref1} position={top.interpolate(top => [-50 + top / 80, 25, 5])}>
                <boxBufferGeometry attach="geometry" args={[7, 1, 2]} />
                <meshPhongMaterial attach="material" color="#2a2b45" />
            </a.mesh>
            <a.mesh ref={ref2} position={top.interpolate(top => [28, -10 + top / 600, 5])}>
                <boxBufferGeometry attach="geometry" args={[3, 1, 5]} />
                <meshPhongMaterial attach="material" color="#2a2b45" />
            </a.mesh>
            <a.mesh ref={ref3} position={top.interpolate(top => [-28, -30 + top / 800, 5])}>
                <boxBufferGeometry attach="geometry" args={[8, 1, 2]} />
                <meshPhongMaterial attach="material" color="#2a2b45" />
            </a.mesh>
            <a.mesh ref={ref4} position={top.interpolate(top => [0, -45 + top / 30000, 5])}>
                <boxBufferGeometry attach="geometry" args={[8, 1, 2]} />
                <meshPhongMaterial attach="material" color="#2a2b45" />
            </a.mesh>
        </a.group>
    )
}

export default Work