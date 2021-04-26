import React from 'react';
import Tabs from '../../components/Tabs/Tabs';

const labels = ['Cash', 'Credit Card', 'Bitcoin'];

export default function TestTabs(){
    return(
        <div>
          <Tabs labels={labels}></Tabs>
        </div>
    )
}