import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { projectsCards } from "../Projects/ProjectData"
import ProjectCard from './components/ProjectCard'

const WorkComponent = () => {
    return (
        <>
            <Grid item xs={12}>
                <h2 style={{ fontFamily: "Montserrat", fontWeight: "900", fontStyle: "italic", fontSize: "50px", color: "#333333" }}>WORK</h2>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" style={{
                    marginBottom: "2em",
                    fontWeight: "400",
                    fontFamily: "Hind",
                    lineHeight: "184.69%",
                    letterSpacing: "0.03em",
                }}>
                    Have a look at my projects. They vary from school projects, work and my own.
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={8}>
                    {
                        projectsCards.map((project) => {
                            return (
                                <Grid key={project.id} item xs={12} md={6}>
                                    <ProjectCard {...project} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </>
    )
}

export default WorkComponent
