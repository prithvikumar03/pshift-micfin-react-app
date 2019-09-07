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

const styles = theme => ({
  grid: {
    width: 1000
},
 card: {
  maxWidth: 1000,
},
media: {
  height: 120,
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
            {/* <div className={classes.root}> */}
            <Grid container alignItems="center" justify="center"> 
            
              <Grid xs={12} spacing={24} alignItems="center" justify="center" container className={classes.grid}>
                <Grid item xs={12}>
                  <Card classNam={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={require('./../../images/Microfinancing.jpg')}
                        /* title="" */
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="h2"> 
                        
                            <Typography gutterBottom variant="body" component="h2">
                              MICFIN - Digitalizing microfinancing in developing nations!
                           </Typography>
                        </Typography>
                         
                        <Typography variant="body2" component="p">
                          Creating digital engagement that empowers customers to get the banking services they need
                          while doing good for the environment and society.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="secondary">
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid> 
            {/* </div> */}
          </div>
        </React.Fragment>
      </div>

    );

  }
}
export default withStyles(styles)(Home);

