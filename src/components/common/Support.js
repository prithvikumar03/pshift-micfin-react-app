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
import { TextField } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
const styles = theme => ({
  grid: {
    width: 1000
  },
  div: {
    padding: theme.spacing(2),
  },
  /* card: {
    maxWidth: 1000,
  },
  media: {
    height: 500,
  }, */
})

class Support extends Component {

  render() {
    const currentPath = this.props.location.pathname
    const { classes } = this.props;
    return (
      <div>
        <React.Fragment>
          <SideNavBar currentPath={currentPath} />
          <div>
            <div className={classes.adjustedRoot}>
              <Grid container justify="center">
                <Grid spacing={10} alignItems="center" justify="center" container className={classes.grid}>
                  <Grid item xs={9}>
                    <Card classNam={classes.card}>
                      <CardActionArea>

                        <CardContent>
                          <Typography gutterBottom variant="h6" component="h2">
                            Support
                         </Typography>
                          <Divider />

                          <Typography variant="body2" component="p">
                            <div className={classes.div}>
                              Your feedback is important to us. Please write to us  - greenpark@dbsparadigmshift.com
                          </div>
                          </Typography>
                          <div>
                            <TextField multiline
                              rowsMax="10" fullWidth id="feedback" type="text" name="feedback" label="Feedback" className={classes.textField} margin="dense" />
                          </div>
                          <Button variant="contained"
                            color="primary"
                            margin="dense">
                            Send
                            </Button>

                        </CardContent>
                      </CardActionArea>

                    </Card>
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
export default withStyles(styles)(Support);

