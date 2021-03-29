import React, { useState }from 'react';

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';

import traslate from "../../assets/traslate/es.json";
import { Drawer } from '@material-ui/core';

export default function MenuList() {
  const [clicked, setClicked] = useState(null);

  const handleClick = (event) => {
    setClicked(event.currentTarget);
  };

  const handleClose = () => {
    setClicked(null);
  };

  const list = (clicked) => (
    <div>
      <List className='list'>
        {[`${traslate["MENU"]["COMMENTS"]}`, `${traslate["MENU"]["COMMENTS"]}`].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Button className='' aria-haspopup="true" onClick={handleClick}>
            <MenuIcon/>
      </Button>

      <Drawer
        id="simple-menu"
        anchorEl={clicked}
        keepMounted
        open={Boolean(clicked)}
        onClose={handleClose}
      >
        {list(clicked)}
      </Drawer>
    </div>
  );
}