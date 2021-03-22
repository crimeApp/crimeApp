import React from 'react';
import { MenuOutlined } from '@ant-design/icons';

import "./MenuTop.scss";

export default function MenuTop(){
    return (
        <div className='menu-top'>
            <div className='menu-top_left'>
                <MenuOutlined className='menu-top-left-logo'
                    
                />
                <MenuOutlined />
                
            </div>
        </div>
    )
}