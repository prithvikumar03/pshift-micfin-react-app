import React, { Component } from 'react';
//import {Form}  from 'react';
import { TextField } from '@material-ui/core';
import { Container } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

class MFIRegistration extends Component {

  render() {
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
    } = this.props;
    return (
      <Box bgcolor="text.hint" color="text.primary" component="span" m={2}>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField id="mfiId" type="text" name="mfiId" label="MFI Id"  margin="dense" variant="outlined" value={values.name} onChange={handleChange} onBlur={handleBlur}
              className={errors.name && touched.name ? 'error' : ''} />
          </div>
          
          <tr></tr>
          
          <div>
            <TextField id="firstName" type="text" name="firstName" label="First Name"   margin="dense" variant="outlined" value={values.name} onChange={handleChange} onBlur={handleBlur}
              className={errors.name && touched.name ? 'error' : ''} />
          </div>
          <tr></tr>
          
          <div>
            <TextField id="lastName" type="text" name="lastName" label="Last Name" variant="outlined"  margin="dense" value={values.name} onChange={handleChange} onBlur={handleBlur}
              className={errors.name && touched.name ? 'error' : ''} />
          </div>
          <tr></tr>
          <div>
            <TextField id="date" type="date" name="dateOfInception" label="Date Of Inception"  margin="normal" variant="outlined" value={values.name} onChange={handleChange} onBlur={handleBlur}
              className={errors.name && touched.name ? 'error' : ''} InputLabelProps={{
                shrink: true,
              }}/>
          </div>
          <tr></tr>
          
          {/* <div>
          <RadioGroup name="Gender" >
            <Radio value="Female" inputProps={{ 'aria-label': 'Female'}}/>
            <Radio value="Female" inputProps={{'aria-label': 'Male' }}/>
          </RadioGroup>
          </div> */}
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

export default MFIRegistration;
