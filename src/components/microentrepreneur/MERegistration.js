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
import {grey } from '@material-ui/core/colors'

const styles = theme => ({
 /*  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    minWidth: 250,
    padding: 4,
    color: grey[900]
},
div:{
  padding: theme.spacing(2),
},
extradiv:{
  padding: theme.spacing(4),
}, */
})

class MERegistration extends Component {

   render() {
    const {
      handleSubmit,
    } = this.props;

    const { classes } = this.props;
    return (
      <Box bgcolor="background.main" p={4} m={2}>
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
                <Grid container item xs={12} spacing={1} direction="row">
                  <Grid item xs={6}>
                  <div className={classes.div}>
                    <Address {...this.props} />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className={classes.div}>
                    <BusinessInfo {...this.props} />
                    </div>
                  </Grid>
                </Grid>
              </div>


              <div className={classes.extradiv}>
                <Grid container item xs={12} spacing={1} align="center" justify="center" direction="row">
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
