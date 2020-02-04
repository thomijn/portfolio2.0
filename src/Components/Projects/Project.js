import React, { useState } from 'react'
import { Grid, Typography, makeStyles, createStyles } from '@material-ui/core'
import { a, config, useSpring } from "react-spring"
import { useHistory } from 'react-router-dom'

import ProjectInfo from './ProjectInfo'
import "../../Components/App.css"
import ProjectImages from './ProjectImages'
import OtherProjects from './OtherProjects'
import FooterComponent from '../Segments/components/FooterComponent'

const useStyles = makeStyles((theme) => createStyles({
    title: {
        fontFamily: "Montserrat",
        fontStyle: "italic",
        fontWeight: "900",
        fontSize: "60px",
        color: "#333333",
    },
    body1: {
        marginBottom: "2em",
        fontWeight: "400",
        fontFamily: "Hind",
        lineHeight: "184.69%",
        letterSpacing: "0.03em",
    }
}))

const Project = ({ project }) => {
    const [hoverBack, setHoverback] = useState(false)
    const classes = useStyles()
    const history = useHistory()
    const backIconProps = useSpring({
        transform: hoverBack ? "translateX(-0.5em)" : "translateX(0em)",
        cursor: "pointer",
        config: config.stiff
    })

    return (
        <Grid container justify="center">
            <Grid item xs={10} md={8}>
                <Grid container spacing={8} >
                    <Grid style={{ marginTop: "4em" }} item xs={12}>
                        <a.i onMouseOver={() => setHoverback(true)} onMouseLeave={() => setHoverback(false)} style={backIconProps} onClick={() => history.push('/')} className="fal fa-long-arrow-left fa-2x" />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.title} variant="h1">
                            {project.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography className={classes.body1} variant="body1">
                            {project.text}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <ProjectInfo project={project} />
                    </Grid>
                    <Grid item xs={12}>
                        <ProjectImages project={project} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid style={{ marginTop: "8em", background: "#f7f7f7" }} item xs={12}>
                <OtherProjects />
                <FooterComponent project />
            </Grid>
        </Grid>
    )
}

export default Project
