import React from "react";
import { Grid } from "@material-ui/core";

import { Link } from "react-router-dom";

import BarChartIcon from "@material-ui/icons/BarChart";
import PersonIcon from "@material-ui/icons/Person";
import MapIcon from "@material-ui/icons/Map";

import "./SideBar.css";

export default function SideBar() {
  return (
    <Grid
        container
        className="sidebar"
        direction="column"
        alignItems="center"
        justify="center"
        spacing={3}
      >
        <Grid item>
          <Link to="/account">
            <PersonIcon />
          </Link>
        </Grid>

        <Grid item>
          <Link to="/map">
            <MapIcon />
          </Link>
        </Grid>

        <Grid item>
          <Link to="/reports">
            <BarChartIcon />
          </Link>
        </Grid>
  </Grid>
  );
}
