import { createMuiTheme } from '@material-ui/core/styles';

import lime from '@material-ui/core/colors/lime';

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: lime[700],
    },
    secondary: {
      main: lime[200],
    },
    type: 'light',
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: lime[700],
    },
    secondary: {
      main: lime[200],
    },
    type: 'dark',
  },
});
