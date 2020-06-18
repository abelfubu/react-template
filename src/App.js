import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import { ThemeProvider, Container, Fab } from '@material-ui/core';
import { mainContext } from './main-context';
import { lightTheme, darkTheme } from './theme';
import Cajon from './components/Cajon';
import Content from './components/Content';
import ScrollTop from './components/ScrollTop';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function App(props) {
  const main = useContext(mainContext);
  return (
    <ThemeProvider theme={main.dark ? darkTheme : lightTheme}>
      <div style={main.dark ? { background: 'black', color: 'white' } : null}>
        <Navbar />
        <Cajon />
        <Content />

        <ScrollTop {...props}>
          <Fab color='secondary' size='small' aria-label='scroll back to top'>
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </div>
    </ThemeProvider>
  );
}

export default App;
