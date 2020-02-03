import React, { useRef, useCallback, Suspense } from 'react'
import CanvasComponent from './Components/ThreeJs/Canvas'
import App from './Components/App'
import useWindowDimensions from './helperfunctions/windowDimensions';
import { useSpring } from 'react-spring/three';
import { useScroll } from 'react-use-gesture';
import { getScrollSpeed } from './helperfunctions/getScrollSpeed';
import './Components/App.css';

const Home = () => {
    const { height } = useWindowDimensions();
    const [{ top, mouse }, set] = useSpring(() => ({ top: 0, mouse: [0, 0] }))
    const mouseText = useRef([0, 0])
    const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouseText.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])
    const bind = useScroll(({ xy }) => {
        if (xy[1] > 0) {
            set({ top: xy[1] * getScrollSpeed(height) })
        }
    })
    return (
        <>
            <Suspense fallback={<p>loading...</p>}>
                <CanvasComponent top={top} mouseText={mouseText} />
            </Suspense>
            <div {...bind()} className="scroll-container" onMouseMove={onMouseMove}>
                <div style={{ height: '150vw', }} />
                <App top={top} style={{ position: "fixed" }} mouse={mouse} />
            </div>
        </>
    )
}

export default Home
