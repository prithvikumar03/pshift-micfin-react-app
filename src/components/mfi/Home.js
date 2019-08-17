import React, { Component } from 'react';
import SideNavBar from './../SideNavBar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/styles/withStyles';



const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.grey['A500'],
      overflow: 'hidden',
      /* background: `url(${backgroundShape}) no-repeat`, */
      backgroundSize: 'cover',
      backgroundPosition: '0 400px',
      marginTop: 20,
      padding: 20,
      paddingBottom: 200
    },
    grid: {
      width: 1000
    }
  })

class Home extends Component {

  render() {
    const currentPath = this.props.location.pathname
    const { classes } = this.props;
    return (
      <div>
        <React.Fragment>
          <SideNavBar currentPath={currentPath} />
          <div>
            <div className={classes.root}>
              <Grid container justify="center">
                <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
                  <Grid item xs={12}>
                    <Typography variant="h6" noWrap>
                      Welcome to MFI Home Page!
                         </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </div>
        </React.Fragment>
      </div>

    );

  }
}
export default withStyles(styles)(Home);

