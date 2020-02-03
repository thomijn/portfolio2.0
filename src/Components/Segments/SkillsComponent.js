import React from 'react'
import { Grid, Paper, Typography, useTheme, useMediaQuery } from '@material-ui/core'

import code from "../../images/coding.jpg"

const SkillsComponent = () => {
    const theme = useTheme()
    const xs = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <div style={{ zIndex: 5 }}>
            <Grid container justify={xs ? "center" : "flex-start"} style={{ marginBottom: "4em" }} alignItems="center" spacing={8}>
                <Grid item sm={12} md={6}>
                    <Grid container direction="column" spacing={6}>
                        <Grid item xs={12}>
                            <h2 style={{ margin: 0, fontFamily: "Montserrat", fontWeight: "900", fontStyle: "italic", fontSize: "50px", color: "#333333" }}>MY SKILLS</h2>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper elevation={0} square={true} style={{ padding: "1em", backgroundColor: "rgba(255,255,255,0)", marginTop: "-2em" }}>
                                <Grid style={{ marginTop: "0" }} item xs={12}>
                                    <Typography variant="body1" style={{
                                        marginBottom: "2em",
                                        fontWeight: "400",
                                        fontFamily: "Hind",
                                        lineHeight: "184.69%",
                                        letterSpacing: "0.03em",
                                    }}>
                                        I love expanding my skillset whenever i get the chance. New technologies inspire me to learn and do more. <br />
                                        I am a front-end enthusiast and love developing with React. <br /> <br />
                                        Here are some of my frequently used technologies. <br /> <br />
                                    </Typography>
                                </Grid>
                                <Grid style={{ marginTop: "2em" }} item xs={12}>
                                    <Grid container>
                                        <Grid item md={4} lg={4}>
                                            <ul style={{ listStyle: "none", marginLeft: "0", padding: "0" }} >
                                                <li>HTML5</li>
                                                <li>CSS3</li>
                                                <li>Javascript ES6</li>
                                            </ul>
                                        </Grid>
                                        <Grid item md={4} lg={4}>
                                            <ul style={{ listStyle: "none", marginLeft: "0", padding: "0" }} >
                                                <li>React</li>
                                                <li>React-native</li>
                                                <li>Redux</li>
                                            </ul>
                                        </Grid>
                                        <Grid item md={4} lg={4}>
                                            <ul style={{ listStyle: "none", marginLeft: "0", padding: "0" }} >
                                                <li>NodeJs</li>
                                                <li>Typescript</li>
                                                <li>MongoDB</li>
                                            </ul>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={12} md={6}>
                    <img src={code} width="100%" height="auto" />
                </Grid>
            </Grid>
        </div >
    )
}

export default SkillsComponent
