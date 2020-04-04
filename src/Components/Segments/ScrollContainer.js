import React from 'react'
import App from '../App'
import '../App.css';
import { useSpring, a, config } from 'react-spring';

const ScrollContainer = ({ bind, onMouseMover }) => {
    const container = useSpring({
        from: {
            backgroundColor: "#fff"
        },
        to: {
            backgroundColor: "rgba(0,0,0,0)"
        },
        delay: 500,
        config: config.slow
    })
    return (
        <a.div onMouseMove={() => onMouseMover} style={container} className="scroll-container">
            {/* <div style={{ height: '150vw', }} /> */}
            <App style={{ position: "fixed" }} />
        </a.div>
    )
}

export default ScrollContainer
