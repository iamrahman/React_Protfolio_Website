import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
//styles
import useStyles from "./styles";
import Fade from "react-reveal/Fade";
import gifSrc from "../../assets/wip.gif";
const Home = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.root}
    >
      <Fade top>
        <Typography
          style={{ fontSize: 25, color: "orangered", fontWeight: "bold" }}
        >
          Website is under construction !!
        </Typography>
        <Typography>I will back soon ....</Typography>
      </Fade>
      <Grid item>
        <img src={gifSrc} style={{ width: "35vw" }} />
      </Grid>
      <Grid item>
        <Fade top>
          <Typography>Website Owner : Inamur Rahman</Typography>
        </Fade>
      </Grid>
      <Grid>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() =>
            window.open("https://www.linkedin.com/in/inamur-rahman/", "_blank")
          }
        >
          Contact
        </Button>
      </Grid>
    </Grid>
  );
};

export default Home;
