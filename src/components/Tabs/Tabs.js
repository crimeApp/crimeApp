import React, { useState } from 'react';
import Tab from './Tab';

import { ButtonGroup } from '@material-ui/core';
import "./Tabs.css";

export default function Tabs({ labels}) {
  
  const [active, setActive] = useState(labels[0]);

    return (
      <div className="tab">
        <ButtonGroup className="tab-list tab-ol">
        {labels.map(label => (
            <Tab
              key={label}
              active={active === label}
              onClick={() => setActive(label)}
            >
              {label}
            </Tab>
          ))}
        </ButtonGroup>

        <div className="tab-content">
          <p> Your payment selection: {active} </p>
        </div>

      </div>
    );
}