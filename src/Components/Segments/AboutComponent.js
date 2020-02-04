import React from 'react'
import { Grid, Paper, Typography, useTheme, useMediaQuery } from '@material-ui/core'
import me from "../../images/me2.jpg"
const AboutComponent = () => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <div style={{ zIndex: 5 }}>

            <Grid container alignItems="center" justify={small ? "center" : "flex-start"} spacing={8} >
                <Grid item sm={12} md={6}>
                    <img src={me} width="100%" height="auto" alt="Thomas" />
                </Grid>
                <Grid item sm={12} md={6}>
                    <Grid container direction="column" spacing={6}>
                        <Grid item xs={12}>
                            <h2 style={{ margin: 0, textAlign: "left", fontFamily: "Montserrat", fontWeight: "900", fontStyle: "italic", fontSize: "50px", color: "#333333" }}>ABOUT ME</h2>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper elevation={0} square={true} style={{ maxWidth: small ? "100%" : "50vw", padding: "1em", backgroundColor: "rgba(255,255,255,0)", marginTop: "-2em" }}>
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
                </Grid>
            </Grid>
        </div >
    )
}

export default AboutComponent
