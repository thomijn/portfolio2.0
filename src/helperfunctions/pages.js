import React from "react"
import { animated } from "react-spring"
import Home from "../Home"
import ProjectsContainer from "../Components/Projects/ProjectsContainer"

export const pages = {
    home: ({ style, history }) => (
        <animated.div style={{ ...style, height: "100%" }}>
            <Home />
        </animated.div>
    ),
    project: ({ style, history }) => (
        <animated.div style={{ ...style, height: "100%" }}>
            <ProjectsContainer />
        </animated.div>
    ),
}