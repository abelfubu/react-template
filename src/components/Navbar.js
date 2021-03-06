import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import { useScrollTrigger, FormControlLabel, Switch } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { mainContext } from '../main-context';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    'position': 'relative',
    'borderRadius': theme.shape.borderRadius,
    'backgroundColor': fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    'marginLeft': 0,
    'width': '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      'width': '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar(props) {
  const classes = useStyles();
  const main = useContext(mainContext);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    main.update({ ...main, drawer: true });
  };

  const handleDark = () => {
    main.update({ ...main, dark: !main.dark });
  };
  return (
    <div id='top' className={classes.root}>
      <AppBar
        style={{ transition: 'all 0.5s ease-out' }}
        position='fixed'
        className={!trigger ? 'MuiAppBar-colorTransparent' : classes.root}
        elevation={!trigger ? 0 : 2}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            onClick={handleClick}
            color='secondary'
            aria-label='open drawer'>
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant='h6' noWrap>
            numDates
          </Typography>
          <FormControlLabel
            value='left'
            control={<Switch onChange={handleDark} color='secondary' />}
            label='Dark Mode'
            labelPlacement='end'
          />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
