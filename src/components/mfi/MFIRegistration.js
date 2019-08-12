import React, { Component } from 'react';
//import {Form}  from 'react';
import  {TextField} from '@material-ui/core';
import { Container } from '@material-ui/core'

class MFIRegistration extends Component {
  render() {
    return (
      <Container maxWidth="lg">
      <div>
          <TextField id="mfiId" type="text" name="mfiId" label="MFI Id" />
      </div>
      <div>
          <TextField id="firstName" type="text" name="firstName" label="First Name" />
      </div>
      <div>
          <TextField id="lastName" type="text" name="lastName" label="LastName" />
      </div>
      <div>
          <TextField id="dateOfInception" type="date" name="dateOfInception" label="Date Of Inception" />
      </div>
      <div>
          <TextField id="mfiId" type="text" name="mfiId" label="MFI Id" />
      </div>
      <div>
          <TextField id="mfiId" type="text" name="mfiId" label="MFI Id" />
      </div>
      </Container>
    );
  }

}

export default MFIRegistration;
