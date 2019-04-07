import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import App from './components/App';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

export default render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'),
);
