import React, { useRef } from "react";
import { useResource, useFrame, Dom } from "react-three-fiber";
import { Button } from "@material-ui/core";
import { useState, useEffect } from 'react';
import { useStore } from "../../store";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export default ({ mouse }) => {
    const { height, width } = useWindowDimensions();
    const { setPage } = useStore()
    const [ref, pLight1] = useResource();
    useFrame(() => {
        ref.current.position.x += ((mouse.current.x * -0.004 - width / 2 * -0.004) - ref.current.position.x) * 0.05
        ref.current.position.z += ((mouse.current.y * -0.02 - 5) - ref.current.position.z) * 0.05

    })

    return (
        <group>
            <Dom>
                <Button onClick={() => setPage('about')} variant='contained'>okee</Button>
            </Dom>
            <ambientLight position={[0, 4, 0]} intensity={0.3} />
            <directionalLight intensity={2} position={[0, 0, 0]} color={0xffffff} />
            <pointLight
                penumbra={1}
                ref={ref}
                intensity={2}
                position={[0, 2.5, 0]}
                color='white'
            /
            >

        </group>
    );
};