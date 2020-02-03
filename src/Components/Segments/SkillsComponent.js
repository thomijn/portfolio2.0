import React from 'react'
import { Grid, Paper, Typography, useTheme, useMediaQuery } from '@material-ui/core'

const SkillsComponent = () => {
    const theme = useTheme()
    const xs = useMediaQuery(theme.breakpoints.down("xs"));
    return (
        <div style={{ zIndex: 5 }}>
            <Grid container justify={xs ? "center" : "flex-start"}>
                <Grid item xs={12}>
                    <h2 style={{ textAlign: xs ? "center" : "left", fontFamily: "Montserrat", fontWeight: "900", fontStyle: "italic", fontSize: "50px", color: "#333333" }}>MY SKILLS</h2>
                </Grid>
                <Grid item xs={10}>
                    <Paper elevation={0} square={true} style={{ maxWidth: xs ? "100%" : "60vw", padding: "1em", backgroundColor: "rgba(255,255,255,0.9)", marginTop: "-2em" }}>
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
                                <Grid item xs={12} sm={6} md={4} lg={4}>
                                    <ul className="fa-ul" >
                                        <li><span className="fas fa-brackets-curly fa-lg" style={{ marginRight: "10px", color: "#494c7a" }} />HTML5</li>
                                        <li><span className="fas fa-brackets-curly fa-lg" style={{ marginRight: "10px", color: "#494c7a" }} />CSS3</li>
                                        <li><span className="fas fa-brackets-curly fa-lg" style={{ marginRight: "10px", color: "#494c7a" }} />Javascript ES6</li>
                                    </ul>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={4}>
                                    <ul className="fa-ul">
                                        <li><span className="fas fa-brackets-curly fa-lg" style={{ marginRight: "10px", color: "#494c7a" }} />React</li>
                                        <li><span className="fas fa-brackets-curly fa-lg" style={{ marginRight: "10px", color: "#494c7a" }} />React-native</li>
                                        <li><span className="fas fa-brackets-curly fa-lg" style={{ marginRight: "10px", color: "#494c7a" }} />Redux</li>
                                    </ul>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={4}>
                                    <ul className="fa-ul">
                                        <li><span className="fas fa-brackets-curly fa-lg" style={{ marginRight: "10px", color: "#494c7a" }} />NodeJs</li>
                                        <li><span className="fas fa-brackets-curly fa-lg" style={{ marginRight: "10px", color: "#494c7a" }} />Typescript</li>
                                        <li><span className="fas fa-brackets-curly fa-lg" style={{ marginRight: "10px", color: "#494c7a" }} />MongoDB</li>
                                    </ul>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default SkillsComponent
