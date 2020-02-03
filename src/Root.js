import React, { useState, useEffect } from "react"
import { useTransition } from "react-spring"
import { pages } from "./helperfunctions/pages"
import { useHistory, useLocation } from 'react-router-dom'
import { projectsCards } from "./Components/Projects/ProjectData"

const Root = () => {
    const history = useHistory()
    const location = useLocation()
    const [index, setIndex] = useState('home')

    useEffect(
        () => {
            if (location.pathname === '/') setIndex('home')
            else {
                projectsCards.map(project => {
                    if (location.pathname === project.link) setIndex('project')
                    return null
                })
            }
        },
        [location],
    )
    const transitions = useTransition(index, p => p, {
        from: { opacity: 0 },
        to: { opacity: 1 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    return (
        <div style={{ height: "100%" }} >
            {transitions.map(({ item, props, key }) => {
                const Page = pages[item]
                return <Page key={key} style={props} history={history} />
            })}
        </div>
    )

}

export default Root