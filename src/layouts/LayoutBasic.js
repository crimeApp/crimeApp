import React, { Fragment } from 'react';
import MenuTop from '../components/Menu/MenuTop';
import './LayoutBasic.css';

export default function LayoutBasic({ children }){

    return (
        <Fragment>
            <div className="layout-basic-header">
                <MenuTop/>
            </div>
            
            <div className="layout-basic-content">
                {children}
            </div>
            
        </Fragment>
    );
}
