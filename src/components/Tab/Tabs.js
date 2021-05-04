import React, { useState } from "react";
import { ButtonGroup, Tab } from "@material-ui/core";
import "./Tab.css";

export default function Tabs({ label }) {
  const [active, setActive] = useState(null);

  return (
    <ButtonGroup color="primary">
        <Tab
          key={label}
          active={active === label}
          onClick={() => setActive(label)}
          className={active ? `tab-list-active` : ``}
        >
          <p className="tab-list-item">{label}</p>
        </Tab>
    </ButtonGroup>
  );
}
