import React, { useRef, useCallback, Suspense, useState } from 'react'
import CanvasComponent from './Components/ThreeJs/Canvas'
import useWindowDimensions from './helperfunctions/windowDimensions';
import { useSpring } from 'react-spring/three';
import { useGesture } from 'react-use-gesture';
import { getScrollSpeed } from './helperfunctions/getScrollSpeed';
import './Components/App.css';
import ScrollContainer from './Components/Segments/ScrollContainer';

const Home = () => {
    const { height } = useWindowDimensions();
    const [scrollY, setscrollY] = useState(true)
    const [{ top }, set] = useSpring(() => ({ top: 0 }))
    const mouseText = useRef([0, 0])
    const onMouseMover = useCallback(({ clientX: x, clientY: y }) => (mouseText.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])

    const bind = useGesture({
        onScroll: ({ xy }) => {
            if (xy[1] > 0) {
                set({ top: xy[1] * getScrollSpeed(height) })
                xy[1] >= 100 && setscrollY(false)
                xy[1] < 100 && setscrollY(true)
            }
        },
    })

    return (
        <>
            <Suspense fallback={<p>loading...</p>}>
                <CanvasComponent scrollIcon={scrollY} top={top} mouseText={mouseText} />
            </Suspense>
            <ScrollContainer bind={bind} onMouseMover={onMouseMover} />
        </>
    )
}

export default Home
