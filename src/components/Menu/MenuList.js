import React, { useState }from 'react';
import traslate from "../../assets/traslate/es.json";
import { Drawer, Button, List, ListItem, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import "./MenuTop.css";

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
        {[`${traslate["MENU"]["COMMENTS"]}`, `${traslate["MENU"]["REPORTS"]}`].map((text) => (
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