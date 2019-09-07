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
  
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  } ,
  card: {
    maxWidth: 345,
    padding: theme.spacing(3),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    
  },

})

class DisplayCard2 extends Component {

  render() {
    
    const { classes } = this.props;
    return (
      <div>
        <React.Fragment>
       
          <div>
            {/* <div className={classes.root}> */}
            <Grid container alignItems="center" justify="center"> 
            
              <Grid xs={12} spacing={4} alignItems="center" justify="center" container className={classes.grid}>
                <Grid item xs={12}>
                  <Card classNam={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={require('./../../images/industry.jpg')}
                        /* title="" */
                      />
                      <CardContent>
                          <Typography gutterBottom variant="body" component="h4">
                            Financing small scale workshops.
                           </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary"  variant="outlined">
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
export default withStyles(styles)(DisplayCard2);

