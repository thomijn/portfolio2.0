import React, { useState } from 'react'
import { Grid, IconButton, Link, Typography } from '@material-ui/core'
import { useSpring, a, config, useTransition, useTrail } from 'react-spring'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useStore } from '../store'

const Navigation = ({ mouse, top }) => {
    const { setPage, page } = useStore()
    const [toggle, set] = useState(true)
    const AnimatedGrid = a(Grid)
    const animatedNavigation = useSpring({
        width: "20%",
        position: "absolute",
        zIndex: 4,
        margin: "2em",

    })

    const items = ["HOME", "ABOUTME", "WORK", "CONTACT"]

    const paperItemAnimated = useSpring({
        height: toggle ? "0%" : "100%",
        config: config.stiff
    })

    const trail = useTrail(items.length, {
        transform: !toggle ? "translateX(0px)" : "translateX(-50px)",
        opacity: !toggle ? 1 : 0,
        config: config.stiff
    })

    const transitions = useTransition(toggle, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.stiff
    })

    return (
        <>
            <AnimatedGrid style={animatedNavigation} container alignItems="center" justify="left">
                <AnimatedGrid style={paperItemAnimated} item >
                    <IconButton onClick={() => {
                        set(!toggle)
                    }
                    }>
                        {transitions.map(({ item, key, props }) =>
                            item
                                ? <a.div style={props}><MenuIcon style={{ fontSize: "40px", color: "#333333" }} /></a.div>
                                : <a.div style={props}><CloseIcon style={{ fontSize: "40px", color: "#333333" }} /></a.div>
                        )}
                    </IconButton>
                    {!toggle &&
                        <Grid container style={{ marginTop: "1em" }} direction="column">
                            {trail.map((props, index) => (
                                <a.div style={props}>
                                    <Grid item >
                                        <Link onClick={() => {
                                            setPage(items[index])
                                        }} style={{ color: "#333333", cursor: "pointer" }}>
                                            <Typography style={{ fontSize: "60px", fontWeight: "900", fontStyle: "italic", fontFamily: "Montserrat", textDecoration: page === items[index] ? "underline" : "none" }} >{items[index]}</Typography>
                                        </Link>
                                    </Grid>
                                </a.div>
                            ))}
                        </Grid>
                    }
                </AnimatedGrid>
            </AnimatedGrid>
        </>
    )
}

export default Navigation
