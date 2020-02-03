import React from 'react';
import { Grid, createStyles, makeStyles } from '@material-ui/core';

import './App.css';
import Main from "./Main"

const useStyles = makeStyles((theme) => createStyles({
  app: {
    backgroundColor: "rgba(0,0,0,0)",
    [theme.breakpoints.down('xl')]: {
      position: "absolute",
      top: "200vh",
    },
    [theme.breakpoints.down('lg')]: {
      position: "absolute",
      top: "210vh",
    },
    [theme.breakpoints.down('md')]: {
      position: "absolute",
      top: "230vh",
    },
    [theme.breakpoints.down('sm')]: {
      position: "absolute",
      top: "260vh",
    },
    [theme.breakpoints.down('xs')]: {
      position: "absolute",
      top: "350vh",
    },
  }
}))

function App({ top }) {
  const classes = useStyles()
  return (
    <div className={classes.app}>
      <Grid container justify="center" >
        <Grid item xs={8}>
          <Main top={top} />
        </Grid>
      </Grid>
    </div >
  );
}

export default App;
