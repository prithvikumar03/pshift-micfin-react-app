import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import { RegistrationIcon } from './../../styles/icons';
import Address from './Address';
import BusinessInfo from './BusinessInfo';
import PersonalDetails from './PersonalDetails';
import { useStyles } from './../../styles/index';
import Grid from '@material-ui/core/Grid';

const yesNoOptions = [
  {
    value: 'YES',
    label: 'YES',
  },
  {
    value: 'NO',
    label: 'NO',
  },
];


const styles = theme => ({
})

class MERegistration extends Component {


  onSubmitClick = (values) => {
    alert('handle submit in parent class ! Hurray');
    this.props.handleSubmit();
  }

  getTitle = () => {
    return (
      <Typography variant="h6" color="textSecondary" component="p">
        MFI Registration
      </Typography>
    );
  }

  render() {
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
    } = this.props;

    const { classes } = this.props;
    return (
      <Box bgcolor="background.main" p={8} m={4}>
        <Card className={classes.card}>
          <div>
            <Typography variant="h6">
              <IconButton>
                <RegistrationIcon />
              </IconButton>
              Microentrepreneur Registration
              </Typography>
            <Divider />
          </div>

          <CardContent>
            <form onSubmit={handleSubmit}>

              <Grid container spacing={1} justify="center">
                <Grid xs={12} spacing={3} alignItems="center" container>
                  <Grid item xs={6}>

                    <PersonalDetails {...this.props} />
                  </Grid>
                </Grid>
                <Grid xs={12} spacing={3} alignItems="center" container>
                  <Grid item xs={6}>
                    <BusinessInfo {...this.props} />
                  </Grid>
                </Grid>
              </Grid>



              {/* 
              <div>
                <Address {...this.props} />
              </div>
 */}


              <div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  margin="dense"
                >
                  Register
              </Button>

                &nbsp;&nbsp;
          <Button
                  variant="contained"
                  color="primary"
                  margin="dense"
                >
                  Reset
          </Button>
              </div>

            </form>
          </CardContent>
        </Card>
      </Box>
    );
  }

}

export default withStyles(styles)(MERegistration);
