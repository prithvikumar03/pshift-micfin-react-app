import React, { Component } from 'react';
import SideNavBar from '../SideNavBar';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/styles/withStyles';
import DBSMenuTab from './DBSMenuTab';

const styles = theme => ({

  newGrid: {
    // width: '100%'
   },
  /*  grid: {
    width: 1000
  },
  card: {
    maxWidth: 1000,
  },
  media: {
    height: 500,
  }, */
})

class DBSHome extends Component {

  render() {
    const currentPath = this.props.location.pathname
    const { classes } = this.props;
    return (
      <div>
      <React.Fragment>
        <SideNavBar currentPath={currentPath} />
        <div>
          <Grid container justify="center">
            <Grid spacing={10} direction="row"  alignItems="center" justify="center" container className={classes.grid} xs={12}>
              <Grid item xs={8}>
                <DBSMenuTab {...this.props} />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
      </div>

        );
    }


}
export default withStyles(styles)(DBSHome);
    
