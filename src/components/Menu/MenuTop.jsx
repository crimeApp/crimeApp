import React, { Fragment, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import "./MenuTop.css";

import {
  Grid,
  Toolbar,
  AppBar,
  Button,
  IconButton,
  Drawer,
  GridList
} from "@material-ui/core";
import traslate from "../../assets/traslate/es.json";
import useWindowSize from "../../hooks/UseWindows";


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

export default function MenuTop() {
  const classes = useStyles();

  const [anchor, set_anchor] = useState(false);

  const { md } = useWindowSize();

  const FlashAccess = () => (
    <Fragment>
      <Grid item xs={8} md={4}>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          href="/currentcrimeform"
          className="m-top-1 m-bottom-1"
        >
          <p style={{ color: "white", fontSize: "small", fontWeight: "bold" }}>{traslate["MENU"]["CURRENTCRIME"]}</p>
        </Button>
      </Grid>
      <Grid item xs={8} md={6}>
        <Button
          variant="outlined"
          color="primary"
          size="medium"
          href="/pastcrimeform"
          className="m-top-1 m-bottom-1"
        >
          <p style={{ color: "var(--primaty-color)", fontSize: "small", fontWeight: "bold" }}>{traslate["MENU"]["PASTCRIME"]}</p>
        </Button>
      </Grid>
    </Fragment>
  );

  return (
    <AppBar position="fixed" m={0} className={classes.appbar}>
      <Toolbar>
        <Grid item xs={12} container alignContent="center" alignItems="center">
          <Grid item xs={8}>
            <img
              alt="CrimeApp"
              className="menu-logo"
              src={require("../../assets/CrimeApp.png").default}
            />
          </Grid>
          {!md ?
            <Grid item xs={4} container justify="flex-end">
              <FlashAccess />
            </Grid> :
            <Fragment>
              <Grid item xs container justify="flex-end">
                <IconButton onClick={() => set_anchor(!anchor)}><MenuIcon /></IconButton>
              </Grid>
              <Drawer anchor="left" open={anchor} onClose={() => set_anchor(!anchor)}>
                <GridList container xs={8} container justify="center" className="p-top-3 p-left-2">
                  <FlashAccess />
                </GridList>
              </Drawer>
            </Fragment>}
        </Grid>
      </Toolbar>
    </AppBar >
  );
}