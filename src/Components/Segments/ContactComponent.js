import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useSpring, a, config } from 'react-spring'

const ContactComponent = () => {
    const [hoverLinkedin, setHoverLinkedin] = useState(false)
    const [hoverGithub, setHoverGithub] = useState(false)
    const [hoverInstagram, setHoverInstagram] = useState(false)
    const [hoverEmail, setHoverEmail] = useState(false)
    const linkedinProps = useSpring({
        position: "absolute",
        transform: !hoverLinkedin ? "translateX(0px)" : "translateX(50px)",
        fontFamily: "Hind",
        letterSpacing: "0.03em",
        fontWeight: "400",
        fontSize: "12pt",
        lineHeight: 2,
        opacity: hoverLinkedin ? 1 : 0,
        config: config.stiff
    })
    const githubProps = useSpring({
        position: "absolute",
        transform: !hoverGithub ? "translateX(0px)" : "translateX(50px)",
        fontFamily: "Hind",
        letterSpacing: "0.03em",
        fontWeight: "400",
        fontSize: "12pt",
        lineHeight: 2,
        opacity: hoverGithub ? 1 : 0,
        config: config.stiff
    })
    const instagramProps = useSpring({
        position: "absolute",
        transform: !hoverInstagram ? "translateX(0px)" : "translateX(50px)",
        fontFamily: "Hind",
        letterSpacing: "0.03em",
        fontWeight: "400",
        fontSize: "12pt",
        lineHeight: 2,
        opacity: hoverInstagram ? 1 : 0,
        config: config.stiff
    })
    const colorProps1 = useSpring({ color: hoverLinkedin ? "#494c7a" : "#bdbdbd" })
    const colorProps2 = useSpring({ color: hoverGithub ? "#494c7a" : "#bdbdbd" })
    const colorProps3 = useSpring({ color: hoverInstagram ? "#494c7a" : "#bdbdbd" })
    const emailIconProps = useSpring({ color: hoverEmail ? "#494c7a" : "#bdbdbd", config: config.stiff, marginRight: "10px" })

    return (
        <Grid container style={{ marginTop: "8em" }} spacing={4}>
            <Grid item xs={12}>
                <h2 style={{ fontFamily: "Montserrat", fontWeight: "900", fontStyle: "italic", fontSize: "50px", color: "#333333" }}>Contact</h2>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Grid container direction="column" spacing={6}>
                    <Grid item xs={12}>
                        <Typography style={{
                            fontWeight: "400",
                            fontFamily: "Hind",
                            lineHeight: "184.69%",
                            letterSpacing: "0.03em",
                        }} variant="body1">
                            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <a onMouseOver={() => setHoverEmail(true)} onMouseLeave={() => setHoverEmail(false)} style={{ textDecoration: "none" }} href="mailto: Thomas.gertenbach@gmail.com">
                            <Typography style={{
                                color: "black",
                                fontWeight: "400",
                                fontFamily: "Hind",
                                lineHeight: "184.69%",
                                letterSpacing: "0.03em",
                            }} variant="body1">
                                <a.i className="fal fa-envelope fa-lg" style={emailIconProps} />     Thomas.gertenbach99@gmail.com
                        </Typography>
                        </a>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <div style={{ borderLeft: "3px solid #494c7a" }}>
                    <ul style={{ listStyleType: "none", margin: "0px" }}>
                        <li>
                            <a style={{ color: "black" }} href="https://www.linkedin.com/in/thomas-gertenbach-5a6b18178/">
                                <a.i onMouseOver={() => setHoverLinkedin(true)} onMouseLeave={() => setHoverLinkedin(false)} style={colorProps1} className="fab fa-linkedin-in fa-2x"></a.i>
                            </a>
                            <a.span style={linkedinProps}>LinkedIn</a.span>
                        </li>
                        <li>
                            <a href="https://github.com/thomijn">
                                <a.i onMouseOver={() => setHoverGithub(true)} onMouseLeave={() => setHoverGithub(false)} style={colorProps2} className="fab fa-github fa-2x "></a.i>
                            </a>
                            <a.span style={githubProps}>Github</a.span>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/thomasgertenbach5/?hl=nl">
                                <a.i onMouseOver={() => setHoverInstagram(true)} onMouseLeave={() => setHoverInstagram(false)} style={colorProps3} className="fab fa-instagram fa-2x "></a.i>
                            </a>
                            <a.span style={instagramProps}>Instagram</a.span>
                        </li>
                    </ul>
                </div>
            </Grid>
        </Grid >
    )
}

export default ContactComponent
