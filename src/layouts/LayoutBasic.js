import React from 'react';
import MenuTop from '../components/Menu/MenuTop';
import './LayoutBasic.css';

export default function LayoutBasic({ children }){

    return (
        <>
            <div className="layout-basic-header">
                <MenuTop/>
            </div>
            
            <div className="layout-basic-content">
                    {children}
            </div>
            
        </>
    );
}
