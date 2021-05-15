import React from "react";

import { Grid } from "@material-ui/core";
import SideBar from "../components/SideBar/SideBar";
import "./LayoutAdmin.css";

export default function LayoutAdmin({ children }) {
  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="flex-start"
      className="layout-admin"
    >
      <Grid item className="layout-admin-header">
        <SideBar />
      </Grid>

      <Grid item className="layout-admin-content">
        {children}
      </Grid>
        
    </Grid>
  );
}
