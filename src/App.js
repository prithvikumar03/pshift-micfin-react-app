import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import Routes from './routes'
import {red, blue, grey,indigo, cyan} from '@material-ui/core/colors'
import { withAuthenticator } from 'aws-amplify-react'

const theme = createMuiTheme({
  palette: {
    primary: {
      //main: "#b2ebf2" //teal theme 1
      //main: "#007bff" //blue theme 2
     // main: "#3b5998" //facebook theme 2
     main: cyan[800] // theme 4
     //  main: "#311b92"
     
      
      //main: red[700] //red theme 3
    },
    secondary: {
      //main: grey[600] //grey theme 1
      //main: "#fff" //white theme 2
      main: grey[900] //grey theme 3
    },
    background: {
      main: grey[300]
      //main: "#c5cae9"
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

export default withAuthenticator(App);


