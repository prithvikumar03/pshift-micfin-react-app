import React, { Component } from 'react';
import {red, blue, grey,indigo, cyan} from '@material-ui/core/colors'
import Router from './routes'
import {styles} from './styles/corestyles';
import withStyles from '@material-ui/styles/withStyles';




class App extends Component {
  render() {
    return (
      <div>
        {/* <ThemeProvider theme={theme}> */}
          <Router {...this.props} />
        {/* </ThemeProvider> */}
      </div>
    );
  }
}

export default withStyles(styles)(App);



