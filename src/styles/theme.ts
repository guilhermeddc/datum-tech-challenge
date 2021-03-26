import {createMuiTheme} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#0081CB',
      dark: '#0081CB26',
    },
    // text: {
    //   primary: '#F0F0F0',
    // },
    background: {
      default: '#333333',
    },
  },
  spacing: 8,
});

export default theme;
