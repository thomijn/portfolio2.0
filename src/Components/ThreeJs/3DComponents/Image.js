import React, { useMemo, useRef } from 'react';
import * as THREE from 'three'
import { a } from 'react-spring/three'

function Image({ url, position, args }) {
    const texture = useMemo(() => new THREE.TextureLoader().load(url), [url])
    const ref = useRef()

    return (
        <a.mesh ref={ref} position={position} >
            <planeBufferGeometry attach="geometry" args={args} />
            <a.meshStandardMaterial attach="material">
                <primitive attach="map" object={texture} />
            </a.meshStandardMaterial>
        </a.mesh>
    )
}

export default Image