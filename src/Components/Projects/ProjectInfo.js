import React from 'react'
import { Typography, Grid, makeStyles } from '@material-ui/core'

import "../../Components/App.css"

const useStyles = makeStyles({
    head: {
        marginBottom: "2em",
        fontWeight: "900",
        fontStyle: "italic",
        fontFamily: "Montserrat",
        lineHeight: "184.69%",
        letterSpacing: "0.03em",
    },
    text: {
        marginBottom: "0em",
        fontWeight: "400",
        fontFamily: "Hind",
        lineHeight: "184.69%",
        letterSpacing: "0.03em",
    },
    link: {
        textDecoration: "none",
        marginBottom: "0em",
        fontWeight: "900",
        fontFamily: "Hind",
        color: "#494c7a",
        lineHeight: "184.69%",
        letterSpacing: "0.03em",
        '&:hover': {
            transition: "width .3s",
            borderBottom: "2px solid #494c7a"
        },
    }
})

const ProjectInfo = ({ project }) => {
    const classes = useStyles()

    return (
        <Grid container >
            <Grid item xs={6} sm={3} md={2}>
                <Grid container direction="column">
                    <Grid item xs={12}>
                        <Typography className={classes.head} variant="body1">
                            TYPE
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.text} variant="body1">
                            {project.type}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
                <Grid container direction="column">
                    <Grid item xs={12}>
                        <Typography className={classes.head} variant="body1">
                            STACK
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        {project.stack.map(stack => {
                            return (
                                <Typography key={stack} className={classes.text} variant="body1">
                                    {stack}
                                </Typography>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
            {project.code &&
                <Grid item xs={6} sm={3} md={2}>
                    <Grid container direction="column">
                        <Grid item xs={12}>
                            <Typography className={classes.head} variant="body1">
                                CODE
                        </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.text} variant="body1">
                                <a className={classes.link} href={`${project.code}`}>
                                    Github
                                </a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            }
            {project.live &&
                <Grid item xs={6} sm={3} md={2}>
                    <Grid container direction="column">
                        <Grid item xs={12}>
                            <Typography className={classes.head} variant="body1">
                                LIVE
                        </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.text} variant="body1">
                                <a className={classes.link} href={`${project.live}`}>
                                    View site
                                </a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            }
        </Grid>
    )
}

export default ProjectInfo
