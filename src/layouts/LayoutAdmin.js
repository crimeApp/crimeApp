import React from 'react';
import MenuTop from '../components/Menu/MenuTop';
import "./LayoutAdmin.css";

export default function LayoutAdmin({ children }){

    return (
        <>
        <div className="layout-admin-header">
            <MenuTop/>
        </div>
            
        <div className="layout-admin-content">
            {children}
        </div>

        </>
    );
}
