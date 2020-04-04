import React from 'react'
import { useSpring, a } from 'react-spring'

const ScrollIcon = ({ scrollIcon }) => {
    const props = useSpring({
        opacity: scrollIcon ? 1 : 0,
        transform: !scrollIcon ? "translateY(-2rem)" : "translateY(0rem)",
        delay: 0,
        config: {
            mass: 1,
            tension: 340,
            friction: 30
        }
    })
    return (
        <a.div style={props} className="scrollDown">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
        </a.div>
    )
}

export default ScrollIcon
