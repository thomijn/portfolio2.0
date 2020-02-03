import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const FooterComponent = ({ project }) => {
    return (
        <Grid container justify="center" style={{ marginTop: project ? "10em" : "20em" }} >
            <Grid item xs={project ? 8 : 12}>
                <Typography variant="body2">
                    © | Copyright by Thomas Gertenbach
               </Typography>
            </Grid>
        </Grid>
    )
}

export default FooterComponent
