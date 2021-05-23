import React, { Fragment } from "react";
import SideBar from "../components/SideBar/SideBar";
import "./LayoutAdmin.css";

export default function LayoutAdmin({ children }) {
  return (
    <Fragment>
            <div className="layout-admin-header">
                <SideBar/>
            </div>
            
            <div className="layout-admin-content">
                    {children}
            </div>
            
    </Fragment>
  );
}
