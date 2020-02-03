import React, { useMemo, useRef, useState } from 'react';
import * as THREE from 'three'
import { useFrame, useThree } from 'react-three-fiber'
import { a } from 'react-spring/three'

import '../../App.css';

const _color = new THREE.Color()

function Swarm({ count, mouse, top }) {
    const [mobile, setmobile] = useState(false)
    const { size } = useThree()
    const mesh = useRef()
    const group = useRef()
    const dummy = useMemo(() => new THREE.Object3D(), [])
    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100
            const factor = 20 + Math.random() * 100
            const speed = 0.01 + Math.random() / 200
            const xFactor = -20 + Math.random() * 40
            const yFactor = -20 + Math.random() * 40
            const zFactor = -20 + Math.random() * 40
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
        }
        return temp
    }, [count])
    const colours = ["#fff", "#2f314d", "#fff", "#fff"]
    const colors = useMemo(() => new Array(1000).fill().map(() => colours[Math.floor(Math.random() * Math.floor(4))]), [colours])
    const colorArray = useMemo(() => {
        const color = new Float32Array(1000 * 3)
        for (let i = 0; i < 1000; i++) {
            _color.set(colors[i])
            _color.toArray(color, i * 3)
        }
        return color
    }, [colors])

    useFrame(() => {
        size.width <= 500 ? setmobile(true) : setmobile(false)
        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle
            t = particle.t += speed / 2
            const a = Math.cos(t) + Math.sin(t * 1) / 10
            const b = Math.sin(t) + Math.cos(t * 2) / 10
            const s = Math.max(1.5, Math.cos(t) * 5)
            particle.mx += (mouse.current[0] - particle.mx) * 0.01
            particle.my += (-mouse.current[1] - particle.my) * 0.01
            dummy.position.set(
                (particle.mx / 20) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                (particle.my / 20) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                (particle.my / 20) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            )
            dummy.scale.set(s, s, s)
            dummy.updateMatrix()
            mesh.current.setMatrixAt(i, dummy.matrix)
        })
        mesh.current.instanceMatrix.needsUpdate = true
    })

    return (
        <>
            <a.group ref={group} position={top.interpolate(top => [mobile ? 0 : 20, 1 + top / 22, 0])}>
                <a.instancedMesh frustumCulled={false} ref={mesh} args={[null, null, 5]}>
                    <boxBufferGeometry attach="geometry" args={[5, 1, 1]} >
                        <instancedBufferAttribute attachObject={['attributes', 'color']} args={[colorArray, count]} />
                    </boxBufferGeometry>
                    <meshPhongMaterial attach="material" vertexColors={THREE.VertexColors} />
                </a.instancedMesh>
            </a.group>
        </>
    )
}

export default Swarm