import React, { useState } from 'react';
import { useThree, Dom, useFrame } from 'react-three-fiber'
import { a } from 'react-spring/three'

import { skills } from '../data'
import SkillsComponent from '../../Segments/SkillsComponent';
import '../../App.css';
import Image from "./Image"

function Skills({ top, mouse, pos }) {
    const [mobile, setmobile] = useState(false)
    const [tablet, settablet] = useState(false)
    const { size } = useThree()
    useFrame(() => {
        size.width <= 600 ? setmobile(true) : setmobile(false)
        size.width <= 1280 ? settablet(true) : settablet(false)
    })
    const getYDom = () => {
        if (mobile) {
            return -30
        } else if (tablet) {
            return 0
        } else {
            return 11
        }
    }
    const getYDom2 = () => {
        if (mobile) {
            return -80
        } else if (tablet) {
            return -70
        } else {
            return -55
        }
    }
    const getXDom = () => {
        if (mobile) {
            return 0
        } else if (tablet) {
            return -30
        } else {
            return -50
        }
    }
    return skills.map(([url, x, y, factor, z, scale, args], index) => (
        <a.group key={url} position={top.interpolate(top => [mobile ? 0 : 15, getYDom2() + top / 50, 40])}>
            <Image
                key={index}
                args={args}
                url={url}
                scale={scale}
                opacity={1}
            />
            <a.mesh position={top.interpolate(top => [10 + top / -600, 12, 5])}>
                <boxBufferGeometry attach="geometry" args={[5, 1, 1]} />
                <meshPhongMaterial attach="material" color="#2a2b45" />
            </a.mesh>
            <Dom style={{ zIndex: 4 }} center={mobile} position={[getXDom(), getYDom(), 0]}>
                <SkillsComponent />
            </Dom>
        </a.group >
    ))
}

export default Skills