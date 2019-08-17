import React, { Component } from 'react';
//import {Form}  from 'react';
import { TextField } from '@material-ui/core';
import { Container } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/styles/withStyles';
import MenuItem from '@material-ui/core/MenuItem';

const options = [
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
    minWidth:300,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
})


class MFIRegistration extends Component {


  onSubmitClick = (values) => {
    alert('handle submit in parent class ! Hurray');
    this.props.handleSubmit();
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
      <Box bgcolor="text.hint" color="text.primary" component="span" m={2}>
        <form onSubmit={handleSubmit}>
          <div>
            <Typography variant="h6" noWrap>
              MFI Registration
          </Typography>
          <Divider/>
          </div>
          <div></div>
          <div>
            <TextField id="mfiId" type="text" name="mfiId" label="MFI Id"  value={values.name} className={classes.textField} onChange={handleChange} onBlur={handleBlur} margin="dense"
        variant="outlined"
               />
          </div>

          <tr></tr>

          <div>
            <TextField id="companyName" type="text" name="companyName" label="Company Name" className={classes.textField}  value={values.name} onChange={handleChange} onBlur={handleBlur} margin="dense"
        variant="outlined"
              />
          </div>
          <tr></tr>

          <div>
            <TextField id="directorName" type="text" name="directorName" label="Director Name" className={classes.textField} value={values.name} onChange={handleChange} onBlur={handleBlur} margin="dense"
        variant="outlined"
             />
          </div>
          <tr></tr>
          <div>
            <TextField id="govtRegistrationNumber" type="text" name="govtRegistrationNumber" label="Govt Registration Number" className={classes.textField} value={values.name} onChange={handleChange} onBlur={handleBlur} margin="dense"
        variant="outlined"
               />
          </div>
          <tr></tr>
          <div>
            <TextField id="registrationDate" type="date" name="registrationDate" label="Registration Date" className={classes.textField}  value={values.name} onChange={handleChange} onBlur={handleBlur} margin="dense"
        variant="outlined"
              InputLabelProps={{
                shrink: true,
              }} />
          </div>
          <tr></tr>
          <div>
            <TextField id="netFundsOwned" type="text" name="netFundsOwned" label="Net Funds Owned" className={classes.textField}  value={values.name} onChange={handleChange} onBlur={handleBlur} margin="dense"
        variant="outlined"
               />
          </div>

          <tr></tr>
          <div>
            <TextField id="filled-select-yesNoOption" select label="Any Existing Bank Loans" className={classes.textField} value={values.options} onChange={handleChange('currency')} margin="dense"
        variant="outlined" InputLabelProps={{
              shrink: true,
            }} SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }} 
            >
              {options.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <tr></tr>
          

          <div>
            <TextField id="filled-select-yesNoOption" select label="Any Pending Case in Court" className={classes.textField} value={values.options} onChange={handleChange('currency')} margin="dense"
        variant="outlined" InputLabelProps={{
              shrink: true,
            }} SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }} 
            >
              {options.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <tr></tr>

          <div>
            <TextField id="reasonForApplication" type="text" name="reasonForApplication" label="Reason For Application" className={classes.textField}  value={values.name} onChange={handleChange} onBlur={handleBlur} margin="dense"
        variant="outlined"
              InputLabelProps={{
                shrink: true,
              }} />
          </div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            margin="dense"
          >
            Register
          </Button>

        </form>
      </Box>
    );
  }

}

export default withStyles(styles)(MFIRegistration);
