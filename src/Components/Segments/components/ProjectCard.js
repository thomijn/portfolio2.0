import React, { useState } from 'react'
import { Card, CardMedia, CardContent, Grid, Typography } from '@material-ui/core'
import { useSpring, a, config } from "react-spring"
import { useHistory } from "react-router-dom"

const ProjectCard = ({ title, description, image, link }) => {
    const history = useHistory()
    const AnimatedCardMedia = a(CardMedia)
    const AnimatedTypography = a(Typography)
    const [hover, set] = useState(false)
    const props = useSpring({
        marginBottom: "10px",
        cursor: "pointer",
        paddingTop: "56.25%",
        transform: hover ? "scale(1.07)" : "scale(1)"
    })
    const propsTitle = useSpring({
        fontFamily: "Montserrat",
        fontWeight: "900",
        fontStyle: "italic",
        fontSize: "30px",
        color: hover ? "#494c7a" : "#333333"
    })
    const iconProps = useSpring({
        marginLeft: hover ? "15px" : "10px",
        config: config.stiff
    })
    return (
        <Card style={{ backgroundColor: "rgba(0,0,0,0)" }} elevation={0} square={true}>
            <AnimatedCardMedia onClick={() => history.push(`${link}`)} onMouseEnter={() => set(true)} onMouseLeave={() => set(false)} style={props} image={image} />
            <CardContent  >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <AnimatedTypography style={propsTitle} variant="h3">{title}</AnimatedTypography>
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <Typography
                            style={{
                                fontWeight: "400",
                                fontFamily: "Hind",
                                lineHeight: "184.69%",
                                letterSpacing: "0.03em",
                            }} variant="body1">
                            {description}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Typography variant="body1"
                            onClick={() => history.push(`${link}`)} onMouseEnter={() => set(true)} onMouseLeave={() => set(false)}
                            style={{
                                fontWeight: "400",
                                fontFamily: "Hind",
                                lineHeight: "184.69%",
                                letterSpacing: "0.03em",
                                cursor: "pointer"
                            }}>
                            View Project
                                <a.i className="far fa-chevron-right" style={iconProps} />
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent >
        </Card >
    )
}

export default ProjectCard
