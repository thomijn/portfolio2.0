import React from 'react'
import { Grid, Paper, Typography, useTheme, useMediaQuery } from '@material-ui/core'

const AboutComponent = () => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down("xs"));
    return (
        <div style={{ zIndex: 5 }}>
            <Grid container justify={small ? "center" : "flex-start"} >
                <Grid item xs={10}>
                    <h2 style={{ textAlign: "left", fontFamily: "Montserrat", fontWeight: "900", fontStyle: "italic", fontSize: "50px", color: "#333333" }}>ABOUT ME</h2>
                </Grid>
                <Grid item xs={10} lg={6}>
                    <Paper elevation={0} square={true} style={{ maxWidth: small ? "100%" : "50vw", padding: "1em", backgroundColor: "rgba(255,255,255,0.9)", marginTop: "-2em" }}>
                        <Grid style={{ marginTop: "0" }} item xs={12}>
                            <Typography style={{
                                fontWeight: "400",
                                fontFamily: "Hind",
                                lineHeight: "184.69%",
                                letterSpacing: "0.03em",
                            }} variant="body1">
                                Hi there, my name is Thomas Gertenbach. I am a 20 years old student, living in the Netherlands. <br /> <br />
                                I am currently studying Creative Media and Game Technologies in Rotterdam to become the greatest creative technologist you will ever see! <br /> <br />
                                I have a big passion for creating user experiences that please the eye and discovering new technologies
                            </Typography>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div >
    )
}

export default AboutComponent
