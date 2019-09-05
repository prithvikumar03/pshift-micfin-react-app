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
/* import FileViewer from 'react-file-viewer';
import { CustomErrorComponent } from 'custom-error'; */

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

const file = ''
const type = 'png'
class Training extends Component {

  onError(e) {
    console.log('error in file-viewer');
  }
  render() {
    const currentPath = this.props.location.pathname
    const { classes } = this.props;
    return (
      <div>
        <React.Fragment>
           <SideNavBar currentPath={currentPath} /> 
          <div>
            {/* <div className={classes.root}> */}
            <Grid container justify="center">
              <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
                <Grid item xs={12}>
                {/* <FileViewer
                    fileType={type}
                    filePath={file}
                    errorComponent={CustomErrorComponent}
                    onError={this.onError}/> */}
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
export default withStyles(styles)(Training);

