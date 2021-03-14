import React from "react";
import { Grid } from "@material-ui/core";
//styles
import useStyles from "./styles";
const Layout = ({ body, protfolio }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid
        item
        style={{ width: "100%", height: "100%", backgroundColor: "black" }}
      >
        {protfolio}
      </Grid>
    </Grid>
  );
};

export default Layout;
