import React from "react";

import { Grid } from "@material-ui/core";

import MenuTop from "../components/Menu/MenuTop";
import SideBar from "../components/SideBar/SideBar";
import "./LayoutAdmin.css";

export default function LayoutAdmin({ children }) {
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="stretch"
      className="layout-admin"
    >
      <div className="layout-admin-header">
        <MenuTop />
      </div>

      <Grid container direction="row" justify="flex-start" alignItems="stretch">
        <Grid item className="layout-admin-sidebar">
          <SideBar />
        </Grid>

        <Grid item className="layout-admin-content">
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
}
