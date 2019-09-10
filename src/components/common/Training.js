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
import FileViewer from 'react-file-viewer';
import { CustomErrorComponent } from 'custom-error';
import Box from '@material-ui/core/Box';

const styles = theme => ({

})

const file = './../../training/MicroFinancing Dealer Platform_v4.pptx'
//const file = './../../training/MicroFinance.docx'

const type = 'ppt'
//const type = 'docx'

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
            <div className={classes.adjustedRoot}>
              <Grid container justify="center">
              <Box
                                            /* bgcolor="background.secondary" */
                                            boxShadow={2}
                                            
                                          className={classes.Box}
                                        >
                <Grid spacing={1} alignItems="center" justify="center" container className={classes.grid} xs={12}>
                  <Grid item xs={12}>
                  
                      <Typography variant="h6" component="p">
                     
                          Training Documents
                        
                      </Typography>
                    
                  </Grid>

                  <Grid item xs={12}>
                    <div>
                      <FileViewer
                        fileType={type}
                        filePath={file}
                        errorComponent={CustomErrorComponent}
                        onError={this.onError} />
                    </div>
                  </Grid>

                </Grid>

                </Box>
              </Grid>
            </div>
          </div>
        </React.Fragment>
      </div>

    );

  }
}
export default withStyles(styles)(Training);

