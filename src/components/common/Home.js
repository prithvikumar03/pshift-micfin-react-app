import React, { Component } from 'react';
import SideNavBar from '../SideNavBar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import DisplayCard from './../login/DisplayCard';
import DisplayCard1 from './../login/DisplayCard1';
import DisplayCard2 from './../login/DisplayCard2';
import DisplayCard3 from './../login/DisplayCard3';

const styles = theme => ({

})

class Home extends Component {

  render() {
    const currentPath = this.props.location.pathname
    const { classes } = this.props;
    return (
      <div>
        <React.Fragment>
          <SideNavBar currentPath={currentPath} />

          <div className={classes.adjustedRoot2}>
            <Grid container alignItems="center" justify="center">

              <Grid xs={12} spacing={10} alignItems="center" justify="center" container className={classes.grid}>

               {/*  <Grid item xs={12}>
                  <Typography variant="body2" component="p">
                    <div className={classes.div}>
                     Welcome {this.props.user.userId}
                     
                    </div>
                  </Typography>
                </Grid> */}
                <Grid item xs={12}>
                  <Grid container direction="row" alignItems="center" justify="center" className={classes.headerGrid}>
                    <Grid item xs={3}>
                      <DisplayCard1 {...this.props} />
                    </Grid>
                    <Grid item xs={3}>
                      <DisplayCard2 {...this.props} />
                    </Grid>
                    <Grid item xs={3}>
                      <DisplayCard {...this.props} />
                    </Grid>
                    <Grid item xs={3}>
                      <DisplayCard3 {...this.props} />
                    </Grid>
                  </Grid>
                </Grid>

              </Grid>

            </Grid>
          </div>
        </React.Fragment>
      </div>

    );

  }
}
export default withStyles(styles)(Home);

