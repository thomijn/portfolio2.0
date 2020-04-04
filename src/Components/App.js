import React from 'react';
import { Grid, createStyles, makeStyles } from '@material-ui/core';

import './App.css';
import Main from "./Main"

const useStyles = makeStyles((theme) => createStyles({
  app: {
    backgroundColor: "rgba(0,0,0,0)",
    position: "Absolute",
  }
}))

function App() {
  const classes = useStyles()
  return (
    <div className={classes.app}>
      <Grid container justify="center" >
        <Grid item xs={8}>
          <Main />
        </Grid>
      </Grid>
    </div >
  );
}

export default App;
