import React, { useState }from 'react';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import MenuIcon from '@material-ui/icons/Menu';

export default function MenuList() {
  const [clicked, setClicked] = useState(null);

  const handleClick = (event) => {
    setClicked(event.currentTarget);
  };

  const handleClose = () => {
    setClicked(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon/>
      </Button>

      <Menu
        id="simple-menu"
        anchorEl={clicked}
        keepMounted
        open={Boolean(clicked)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Hacer denuncia</MenuItem>
        <MenuItem onClick={handleClose}>Ver reportes</MenuItem>
        <MenuItem onClick={handleClose}>Dejar un comentario</MenuItem>
      </Menu>
    </div>
  );
}