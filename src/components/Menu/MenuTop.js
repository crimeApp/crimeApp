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
            <img
              alt="CrimeApp"
              src={require("../../assets/CrimeApp.png").default}
            />

            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              spacing={4}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="/pastcrimeform"
                className="m-right-3"
              >
                {traslate["MENU"]["PASTCRIME"]}
              </Button>

              <Button
                variant="contained"
                color="primary"
                size="large"
                href="/currentcrimeform"
                className="m-right-3"
              >
                {traslate["MENU"]["CURRENTCRIME"]}
              </Button>

              <MenuList className="m-right-2" />
            </Grid>
          </Toolbar>
        </BrowserView>

        <MobileView>
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <BottomNavigation
                value={value}
                showLabels
                onChange={(newValue) => {
                  setValue(newValue);
                }}
              >
                <BottomNavigationAction
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/pastcrimeform"
                  label={traslate["MENU"]["CURRENTCRIME"]}
                  value="currentcrimeform"
                  className="m-right-2"
                  icon={<AnnouncementOutlinedIcon color="primary" />}
                />
              </BottomNavigation>

              <BottomNavigation
                value={value}
                showLabels
                onChange={(newValue) => {
                  setValue(newValue);
                }}
              >
                <BottomNavigationAction
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/pastcrimeform"
                  className="m-right-3"
                  label={traslate["MENU"]["PASTCRIME"]}
                  value="pastcrimeform"
                  icon={<AnnouncementOutlinedIcon color="primary" />}
                />
              </BottomNavigation>

              <MenuList className="m-right-1" />
            </Grid>
          </Toolbar>
        </MobileView>
      </AppBar>
    </div>
  );
}
