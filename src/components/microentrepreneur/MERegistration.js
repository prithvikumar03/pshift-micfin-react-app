import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { RegistrationIcon } from './../../styles/icons';
import Address from './Address';
import BusinessInfo from './BusinessInfo';
import PersonalDetails from './PersonalDetails';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
})

class MERegistration extends Component {

  /* 
  onSubmitClick = (values) => {
    this.props.handleSubmit();
  } */

  getTitle = () => {
    return (
      <Typography variant="h6" color="textSecondary" component="p">
        MFI Registration
      </Typography>
    );
  }

  render() {
    const {
      handleSubmit,
    } = this.props;

    const { classes } = this.props;
    return (
      <Box bgcolor="background.main" p={8} m={4}>
        <Card className={classes.card}>
          <div>
            <Typography variant="h5">
              <IconButton>
                <RegistrationIcon />
              </IconButton>
              Microentrepreneur Registration
              </Typography>
            <Divider />
          </div>

          <CardContent>
            <form onSubmit={handleSubmit}>
              <PersonalDetails {...this.props} />
              <div className={classes.div}>
                <Grid container item xs={12} spacing={2} direction="row">
                  <Grid item xs={6}>
                    <Address {...this.props} />
                  </Grid>
                  <Grid item xs={6}>
                    <BusinessInfo {...this.props} />
                  </Grid>
                </Grid>
              </div>


              <div className={classes.extradiv}>
                <Grid container item xs={12} spacing={2} align="center" justify="center" direction="row">
                  <Grid item xs={6}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      margin="dense"
                    >
                      Register
                  </Button>
                  </Grid>

                  <Grid item xs={6}>

                    <Button
                      variant="contained"
                      color="primary"
                      margin="dense"
                    >
                      Reset
                  </Button>
                  </Grid>
                </Grid>
              </div>

            </form>
          </CardContent>
        </Card>
      </Box>
    );
  }

}

export default withStyles(styles)(MERegistration);
