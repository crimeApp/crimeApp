import React from "react";
import { Link } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import PersonIcon from "@material-ui/icons/Person";
import MapIcon from "@material-ui/icons/Map";
import BarChartIcon from "@material-ui/icons/BarChart";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'white',
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, ),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }
}));

export default function MiniDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}>
        <Toolbar>

          <BrowserView>
            <img
              alt="CrimeApp"
              src={require("../../assets/CrimeApp.png").default}
            />
          </BrowserView>

          <MobileView>
            <img
              alt="CrimeApp"
              src={require("../../assets/CrimeApp-mobile.png").default}
            />
          </MobileView>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent">
        <div className={classes.toolbar} />
        <Divider />
        <List spacing={4}>
          <ListItem button>
            <Link to="/account">
              <PersonIcon color="primary" />
            </Link>
          </ListItem>

          <ListItem button>
            <Link to="/map">
              <MapIcon color="primary" />
            </Link>
          </ListItem>

          <ListItem button>
            <Link to="/reports">
              <BarChartIcon color="primary" />
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
