import React from "react";

import { BrowserView, MobileView } from "react-device-detect";

import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Toolbar,
  AppBar,
  Button,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import traslate from "../../assets/traslate/es.json";
import AnnouncementOutlinedIcon from "@material-ui/icons/AnnouncementOutlined";
import { Link } from "react-router-dom";
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
  const [value, setValue] = React.useState(0);

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

              <Button variant="contained" color="primary" size="large" href='/pastcrimeform'>
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
              <BottomNavigation
                value={value}
                showLabels
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              >
                <BottomNavigationAction
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/pastcrimeform"
                  label={traslate["MENU"]["TITLE"]}
                  value="pastcrimeform"
                  icon={<AnnouncementOutlinedIcon color="primary" />}
                />
              </BottomNavigation>

              <MenuList className={classes.menuButton} />
            </Grid>
          </Toolbar>
        </MobileView>
      </AppBar>
    </div>
  );
}
