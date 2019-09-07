import React, { Component } from 'react';
import SideNavBar from '../SideNavBar';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/styles/withStyles';
import MEMenuTab from './MEMenuTab';

const styles = theme => ({
    grid: {
    width: 1000
  },
  card: {
    maxWidth: 1000,
  },
  media: {
    height: 500,
  }, 
})

class MEHome extends Component {

  render() {
    const currentPath = this.props.location.pathname
    const { classes } = this.props;
    return (
      <div>
      <React.Fragment>
        <SideNavBar currentPath={currentPath} />
        <div>
          <Grid container justify="center">
            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
              <Grid item xs={12}>
                <MEMenuTab {...this.props}/>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
      </div>

        );
    }


}
export default withStyles(styles)(MEHome);
    
