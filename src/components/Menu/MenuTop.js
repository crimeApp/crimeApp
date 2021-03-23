import React, { useState, useEffect, Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(0, 0, 0, 0),
  },
  menuButton: {
    color: 'black',
    width: 'auto',
    alignSelf: 'flex-end',
  },

  title: {
    flexGrow: 1,
    color: 'black'
  },

  appbar: {
    backgroundColor: 'white',
  },

 /*  Buscar forma de alinear MenuIcon al final del Menu
  toolbar: {
    alignItems: 'flex-end',
    alignContent: 'flex-end',
  }, */
 
}));

/**
 * Menu admin y para usuario, responsive. 
 */



export default function MenuTop() {
  const classes = useStyles();

   const [width, setWidth] = useState(window.innerWidth);
   const breakpoint = 620;
 
   useEffect(() => {
     window.addEventListener("resize", () => setWidth(window.innerWidth));
   }, []);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" m={0} className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
                { width < breakpoint ? 
                    <Fragment>
                      
                      <img alt="CrimeApp" src={require('../../assets/CrimeApp-mobile.png').default}/>
                      
                      <IconButton color="black" edge="end" className={classes.menuButton} aria-label="menu">
                          <MenuIcon/>
                      </IconButton>

                    </Fragment> : 
                    <Fragment>

                      <img alt="CrimeApp" src={require('../../assets/CrimeApp.png').default}/>
                     
                    </Fragment>
                }
        </Toolbar>
      </AppBar>
    </div>
  );
}
