import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import Routes from './routes'
import { blue, grey} from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: grey[600]
    },
    primary: {
      main: "#b2ebf2"
    },
    background: {
      main: grey[200]
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    /* fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',') */
   fontFamily: [
      '"Arial"',
      'sans-serif'
    ].join(',') 

  }
});


class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;


