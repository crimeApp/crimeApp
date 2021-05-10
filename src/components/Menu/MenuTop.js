import React from "react";

import { BrowserView, MobileView } from "react-device-detect";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Toolbar, AppBar, Button } from "@material-ui/core";
import traslate from "../../assets/traslate/es.json";

import MenuList from "./MenuList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(0, 0, 0, 0),
  },

  menuButton: {
    color: "black",
    width: "auto",
  },

  title: {
    flexGrow: 1,
    color: "black",
  },

  appbar: {
    backgroundColor: "white",
  },
}));

/**
 * Menu admin y para usuario, responsive.
 */

export default function MenuTop() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" m={0} className={classes.appbar}>
        <BrowserView>
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <img
                alt="CrimeApp"
                src={require("../../assets/CrimeApp.png").default}
              />

              <Button variant="contained" color="primary" size="large">
                {traslate["MENU"]["TITLE"]}
              </Button>
            </Grid>
          </Toolbar>
        </BrowserView>

        <MobileView>
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <img
                alt="CrimeApp"
                src={require("../../assets/CrimeApp-mobile.png").default}
              />

              <Button variant="contained" color="primary" size="large">
                {traslate["MENU"]["TITLE"]}
              </Button>

              <MenuList className={classes.menuButton} />
            </Grid>
          </Toolbar>
        </MobileView>
      </AppBar>
    </div>
  );
}
