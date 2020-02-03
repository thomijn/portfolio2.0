import React, { useState, useEffect } from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import ProjectCard from '../Segments/components/ProjectCard'
import { getOtherProjects } from '../../helperfunctions/getOtherProjects'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    title: {
        fontFamily: "Montserrat",
        fontStyle: "italic",
        fontWeight: "900",
        fontSize: "50px",
        color: "#333333"
    },
    body1: {
        marginBottom: "2em",
        fontWeight: "400",
        fontFamily: "Hind",
        lineHeight: "184.69%",
        letterSpacing: "0.03em",
    }
})

const OtherProjects = () => {
    const history = useHistory()
    const [projects, set] = useState([])
    useEffect(() => {
        set(getOtherProjects(history.location.pathname))
    }, [history.location.pathname])

    const classes = useStyles()
    return (
        <Grid container justify="center">
            <Grid item xs={8}>
                <Grid container style={{ marginTop: "4em" }} spacing={8}>
                    <Grid item xs={12}>
                        <Typography className={classes.title} variant="h2">
                            Other projects
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={8}>
                            {
                                projects.map(project => {
                                    return (
                                        <Grid key={project.id} item xs={12} md={6}>
                                            <ProjectCard {...project} />
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default OtherProjects
