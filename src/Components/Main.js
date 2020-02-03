import React from 'react';
import { Grid } from '@material-ui/core';
import { useSpring, a } from 'react-spring';

import ContactComponent from './Segments/ContactComponent';
import WorkComponent from './Segments/WorkComponent';
import FooterComponent from './Segments/components/FooterComponent';

const Main = () => {
    const AnimatedGrid = a(Grid)
    const props = useSpring({
        position: "relative",
        zIndex: 5,
    })

    return (
        <AnimatedGrid container direction='row' justify="center" style={props} spacing={6}>
            <WorkComponent />
            <Grid item xs={12}>
                <ContactComponent />
            </Grid>
            <Grid item xs={12}>
                <FooterComponent />
            </Grid>
        </AnimatedGrid>
    )
}

export default Main
