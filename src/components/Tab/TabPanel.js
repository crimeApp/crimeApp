import React, { useState } from "react";
import Tabs from './Tabs';
import "./Tab.css";

export default function TabPanel({ tabs }) {

  return (
    <div className="tab">
      <Tabs labels={tabs}/>

      <div className="tab-content">
        <p>{tabs}</p>
      </div>

    </div>
  );
}
