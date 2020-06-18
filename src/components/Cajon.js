import React, { useContext } from 'react';
import { Drawer, makeStyles, useTheme } from '@material-ui/core';
import { mainContext } from '../main-context';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Cajon = () => {
  const main = useContext(mainContext);
  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerToggle = () => {
    main.update({ ...main, drawer: !main.drawer });
  };

  return (
    <div>
      <Drawer
        variant='temporary'
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={main.drawer}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}></Drawer>
    </div>
  );
};

export default Cajon;
