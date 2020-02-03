import React, { useState, useEffect } from 'react'
import { Grid, Paper, Typography, useTheme, useMediaQuery } from '@material-ui/core'
import { useTransition, a, config } from 'react-spring'

const icons = [
    { id: 0, name: 'fab fa-react', title: "React" },
    { id: 1, name: 'fab fa-node-js', title: "NodeJs" },
    { id: 2, name: 'fab fa-js', title: "Javascript ES6" },
    { id: 3, name: 'fab fa-git-alt', title: "Git" },
]

const TitleComponent = () => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down("sm"));
    const [index, set] = useState(0)
    const transitions = useTransition(icons[index], item => item.id, {
        from: { opacity: 0, position: "absolute", transform: "translateY(-1rem)", marginLeft: "10px", padding: "0px", color: "#494c7a", fontFamily: "Montserrat", fontWeight: "900", fontStyle: "italic" },
        enter: { opacity: 1, transform: "translateY(0rem)" },
        leave: { opacity: 0, transform: "translateY(1rem)" },
        config: config.stiff
    })

    useEffect(() => {
        const intervalId = setInterval(() => set(state => (state + 1) % 4), 2000)
        return () => clearInterval(intervalId);
    }, [])



    return (
        <Grid container direction="column">
            <Grid style={{ width: "50%" }} item >
                <Typography variant="h1" style={{ fontFamily: "Montserrat", fontWeight: "900", fontStyle: "italic", fontSize: small ? "40px" : "70px", color: "#333333" }}>THOMAS GERTENBACH</Typography>
            </Grid>
            <Grid item>
                <Paper elevation={0} square={true} style={{ maxWidth: "600px", padding: "1em", paddingBottom: "2em", backgroundColor: "rgba(255,255,255)" }}>
                    <Typography
                        variant="h5"
                        style={{ fontFamily: "Montserrat", fontWeight: "600", color: "#616161", lineHeight: "2.2em" }}>
                        I <span style={{ fontFamily: "Montserrat", fontWeight: "900", fontStyle: "italic", color: "#494c7a" }}>
                            <b>Design</b>
                        </span> and <span style={{ fontFamily: "Montserrat", fontWeight: "900", fontStyle: "italic", color: "#494c7a" }} >
                            <b>Develop </b>
                        </span>
                        user interfaces, <br />
                        using
                        {transitions.map(({ item, key, props }) =>
                            <a.span key={key} style={props}><i className={item.name} style={{ fontSize: "40px", color: "#333333" }} />  {item.title}</a.span>
                        )}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default TitleComponent
