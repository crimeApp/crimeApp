import React, { useState } from 'react';
import { ButtonGroup, Tab } from '@material-ui/core';
import "./Tabs.css";

export default function CustomTabs(props) {
  const { labels } = props;
  
  const [active, setActive] = useState(null);

    return (
      <div className="tab">
        <ButtonGroup className="tab-list tab-ol">
        {labels.map(label => (
            <Tab
              key={label}
              active={active === label}
              onClick={() => setActive(label)}
              className={active? `tab-list-active tab-list-item` : `tab-list-item`}
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