import React, { Component } from 'react';
//import {Form}  from 'react';
import { TextField } from '@material-ui/core';
import { Container } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from "@material-ui/core/Button";


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
      <Container maxWidth="lg">
        <form onSubmit={handleSubmit}>
          <div>
            <TextField id="mfiId" type="text" name="mfiId" label="MFI Id" variant="outlined" value={values.name} onChange={handleChange} onBlur={handleBlur}
              className={errors.name && touched.name ? 'error' : ''} />
          </div>
          <div>
            <TextField id="firstName" type="text" name="firstName" label="First Name" variant="outlined" value={values.name} onChange={handleChange} onBlur={handleBlur}
              className={errors.name && touched.name ? 'error' : ''} />
          </div>
          <div>
            <TextField id="lastName" type="text" name="lastName" label="LastName" variant="outlined" value={values.name} onChange={handleChange} onBlur={handleBlur}
              className={errors.name && touched.name ? 'error' : ''} />
          </div>
          <div>
            <TextField id="dateOfInception" type="date" name="dateOfInception" label="Date Of Inception" variant="outlined" value={values.name} onChange={handleChange} onBlur={handleBlur}
              className={errors.name && touched.name ? 'error' : ''} />
          </div>

          {/* <div>
          <RadioGroup name="Gender" >
            <Radio value="Female" inputProps={{ 'aria-label': 'Female'}}/>
            <Radio value="Female" inputProps={{'aria-label': 'Male' }}/>
          </RadioGroup>
          </div> */}
          <Button
            type="submit"
            variant="outlined"
            color="primary"
          >
            Register
          </Button>

        </form>
      </Container>
    );
  }

}

export default MFIRegistration;
