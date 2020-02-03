import React, { useRef, useCallback, Suspense, useEffect, useState } from 'react'
import { useSpring } from 'react-spring/three'
import { useScroll } from 'react-use-gesture'

import Project from './Project'
import ProjectCanvas from './ProjectCanvas'
import "../App.css"
import { useLocation } from 'react-router-dom'
import { projectsCards } from './ProjectData'

const ProjectsContainer = () => {
    const location = useLocation()
    const [project, setProject] = useState(undefined)
    const [{ top }, set] = useSpring(() => ({ top: 0 }))
    const mouseText = useRef([0, 0])
    const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouseText.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])
    const bind = useScroll(({ xy }) => {
        if (xy[1] > 0) {
            set({ top: xy[1] * 2 })
        }
    })

    useEffect(() => {
        const findProject = () => {
            setProject(projectsCards.find(projectCard => {
                return projectCard.link === location.pathname
            }))
        }
        findProject()
    }, [location.pathname])

    useEffect(() => {
        const scroll = () => {
            if (location.pathname !== "/") {
                window.scrollTo(0, 0)
            }
        }
        scroll()
    }, [location])

    return (

        <Suspense fallback={<p>loading...</p>}>
            {project !== undefined &&
                <>
                    <ProjectCanvas {...bind()} top={top} mouse={mouseText} />
                    <div onMouseMove={onMouseMove} className="project-container" >
                        <Project project={project} style={{ positon: "absolute", top: "0vw" }} />
                    </div>
                </>
            }
        </Suspense>
    )
}

export default ProjectsContainer
