import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/styles/withStyles';
import MenuItem from '@material-ui/core/MenuItem';
import { ErrorMessage } from 'formik';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { RegistrationIcon } from './../../styles/icons';
import Grid from '@material-ui/core/Grid';
import CustomInput from './../../utils/Dropzone';
import {red, grey } from '@material-ui/core/colors'

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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    minWidth: 300,
    padding: 3,
    color: grey[900]
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  error: {
    color: 'red',
    /* height: 48,
    padding: '0 30px', */
  }

})


class MFIRegistration extends Component {


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

              MFI Registration
              </Typography>
            <Divider />
          </div>

          <CardContent>
            <form onSubmit={handleSubmit}>
              {/* <div>
                <Typography variant="h6" noWrap>
                  MFI Registration
                </Typography>
                <Divider />
              </div>
              <div></div> */}
 <Grid container item xs={12} spacing={2} direction="row">
                        <Grid item xs={6} >
              <div>
                <TextField id="mfiId" type="text" name="mfiId" label="MFI Id" disabled value={values.mfiId} className={classes.textField} onChange={handleChange} onBlur={handleBlur} margin="dense"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                    color: red[900]
                  }}
                />
              </div>

              <tr></tr>

              <div>
                <TextField required id="companyName" type="text" name="companyName" label="Company Name" className={classes.textField} value={values.companyName} onChange={handleChange} onBlur={handleBlur} margin="dense"
                  variant="outlined" InputLabelProps={{
                    shrink: true,
                    color:red[900]
                  }}
                />
                <ErrorMessage name="companyName">{msg => <div><span className={classes.error} >{msg}</span></div>}</ErrorMessage>
              </div>
              <tr></tr>

              <div>
                <TextField required id="directorName" type="text" name="directorName" label="Director Name" className={classes.textField} value={values.directorName} onChange={handleChange} onBlur={handleBlur} margin="dense"
                  variant="outlined" InputLabelProps={{
                    shrink: true,
                  }}
                />
                <ErrorMessage name="companyName">{msg => <div><span className={classes.error} >{msg}</span></div>}</ErrorMessage>
              </div>
              <tr></tr>
              <div>
                <TextField id="govtRegistrationNumber" type="text" name="govtRegistrationNumber" label="Govt Registration Number" className={classes.textField} value={values.govtRegistrationNumber} onChange={handleChange} onBlur={handleBlur} margin="dense"
                  variant="outlined" InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <tr></tr>
              <div>
                <TextField id="registrationDate" type="date" name="registrationDate" label="Registration Date" className={classes.textField} value={values.registrationDate} onChange={handleChange} onBlur={handleBlur} margin="dense"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }} />
              </div>
              <tr></tr>
              <div>
                <TextField id="netFundsOwned" type="text" name="netFundsOwned" label="Net Funds Owned" className={classes.textField} value={values.netFundsOwned} onChange={handleChange} onBlur={handleBlur} margin="dense"
                  variant="outlined" InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              </Grid>
              <Grid item xs={6} >
              <tr></tr>
              <div>
                <TextField id="filled-select-yesNoOption" select label="Any Existing Bank Loans" className={classes.textField} value={values.yesNoOptions} onChange={handleChange('yesNoOptions')} margin="dense"
                  variant="outlined" InputLabelProps={{
                    shrink: true,
                  }} SelectProps={{
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                >
                  {yesNoOptions.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <tr></tr>


              <div>
                <TextField id="filled-select-yesNoOption" select label="Any Pending Case in Court" className={classes.textField} value={values.yesNoOptions} onChange={handleChange('yesNoOptions')} margin="dense"
                  variant="outlined" InputLabelProps={{
                    shrink: true,
                  }} SelectProps={{
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                >
                  {yesNoOptions.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <tr></tr>

              <div>
                <TextField id="reasonForApplication" type="text" name="reasonForApplication" label="Reason For Application" className={classes.textField} value={values.reasonForApplication} onChange={handleChange} onBlur={handleBlur} margin="dense"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }} />
              </div>

              <div>
               <CustomInput /> 
              </div>

             
              </Grid>
              </Grid>

              
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

export default withStyles(styles)(MFIRegistration);
