import React, { useState } from 'react';
import { useThree, Dom, useFrame } from 'react-three-fiber'
import { a } from 'react-spring/three'

import '../../App.css';
import AboutComponent from '../../Segments/AboutComponent';
import { about } from '../data'
import Image from './Image';

function About({ top }) {
    const [mobile, setmobile] = useState(false)
    const [tablet, settablet] = useState(false)
    const { size } = useThree()
    useFrame(() => {
        size.width <= 600 ? setmobile(true) : setmobile(false)
        size.width <= 1024 ? settablet(true) : settablet(false)
    })

    return about.map(([url, x, y, factor, z, scale, args], index) => (
        <a.group key={url} position={top.interpolate(top => [mobile || tablet ? 0 : -15, -35 + top / 50, 40])}>
            <Image
                key={index}
                args={args}
                url={url}
                scale={scale}
                opacity={top.interpolate([0, 500], [0, 1])}
                position={[x, y, z]}
            />
            <a.mesh position={top.interpolate(top => [-5 + top / 700, 9, 5])}>
                <boxBufferGeometry attach="geometry" args={[7, 1, 1]} />
                <meshPhongMaterial attach="material" color="#2a2b45" />
            </a.mesh>
            <Dom center={mobile || tablet} position={[mobile || tablet ? 0 : 20, mobile || tablet ? -19 : 10, 0]}>
                <AboutComponent />
            </Dom>
        </a.group>
    ))
}

export default About