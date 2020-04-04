import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { useSpring, a } from 'react-spring';

import ContactComponent from './Segments/ContactComponent';
import WorkComponent from './Segments/WorkComponent';
import FooterComponent from './Segments/components/FooterComponent';
import AboutComponent from './Segments/AboutComponent';
import SkillsComponent from './Segments/SkillsComponent';

const Main = () => {
    const AnimatedGrid = a(Grid)
    const props = useSpring({
        position: "relative",
        zIndex: 5,
    })

    return (
        <AnimatedGrid container direction='row' justify="center" style={props} spacing={6}>
            <Grid item xs={12}>
            <Button variant='contained'>okee</Button>
                {/* <AboutComponent /> */}
            </Grid>
            {/* <Grid item xs={12}>
                <SkillsComponent />
            </Grid>
            <WorkComponent />
            <Grid item xs={12}>
                <ContactComponent />
            </Grid>
            <Grid item xs={12}>
                <FooterComponent />
            </Grid> */}
        </AnimatedGrid>
    )
}

export default Main
