import React, { Component } from 'react';
import SideNavBar from '../SideNavBar';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/styles/withStyles';
import MFIMenuTab from './MFIMenuTab';
import Box from '@material-ui/core/Box';
const styles = theme => ({
  /* grid: {
    width: 1000
  },
  card: {
    maxWidth: 1000,
  },
  media: {
    height: 500,
  }, */
})

class MFIHome extends Component {

  render() {
    const currentPath = this.props.location.pathname
    const { classes } = this.props;
    return (
      <div>
        <React.Fragment>
          <SideNavBar currentPath={currentPath} />
          <div>
            <Grid container justify="center">
              <Grid spacing={24} direction="column" alignItems="center" justify="center" container className={classes.grid} xs={12}>

                <Grid item xs={6}>
                  <MFIMenuTab {...this.props}/>

                </Grid>
                {/* <Grid item xs={2}>
                <Box style={{ background: 'linear-gradient(to right bottom, #1565c0, #82ffa1)' }}>hello</Box>
              </Grid>  */}
              </Grid>
            </Grid>
          </div>
        </React.Fragment>
      </div>

    );
  }


}
export default withStyles(styles)(MFIHome);

