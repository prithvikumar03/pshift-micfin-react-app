import React, { Component } from 'react';
import SideNavBar from '../SideNavBar';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/styles/withStyles';
import MEMenuTab from './MEMenuTab';

const styles = theme => ({
    
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
            <Grid spacing={10} direction="row" alignItems="center" justify="center" container className={classes.grid} xs={12}>
              <Grid item xs={8}>
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
    
