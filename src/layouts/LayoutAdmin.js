import React from "react";
import SideBar from "../components/SideBar/SideBar";
import "./LayoutAdmin.css";

export default function LayoutAdmin({ children }) {
  return (
    <>
            <div className="layout-admin-header">
                <SideBar/>
            </div>
            
            <div className="layout-basic-content">
                    {children}
            </div>
            
        </>
  );
}
