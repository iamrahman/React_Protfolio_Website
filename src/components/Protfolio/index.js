import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";
import Fade from "react-reveal/Fade";
function Protfolio(props) {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" direction="column" className={classes.root}>
      <Grid item>
        <img src="https://static.geekyants.com/image-resize-cache/eyJpZCI6MTA3NSwidCI6ImZpdCIsInciOjIwMCwiaCI6MjAwLCJxIjo5MCwidiI6MX0=.png" />
      </Grid>
      <Grid item>
        <Fade top>
          <Typography className={classes.hi}>Inamur Rahman</Typography>
          <Typography className={classes.hi}>Software Developer</Typography>
        </Fade>
      </Grid>
    </Grid>
  );
}

export default Protfolio;
