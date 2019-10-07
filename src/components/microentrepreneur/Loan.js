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

import IconButton from '@material-ui/core/IconButton';
import { RegistrationIcon } from './../../styles/icons';
import Grid from '@material-ui/core/Grid';
import CustomInput from './../../utils/Dropzone';
import { grey } from '@material-ui/core/colors'

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


class Loan extends Component {


 /*  onSubmitClick = (values) => {
    //alert('handle submit in parent class ! Hurray');
    this.props.handleSubmit();
  }
 */
  /* getTitle = () => {
    return (
      <Typography variant="h6" color="textSecondary" component="p">
        Loan Application
      </Typography>
    );
  } */

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
      <Box bgcolor="background.main" p={1} m={1}>
        <Card className={classes.card}>
          <div>
            <Typography variant="h6">
              <IconButton>
                <RegistrationIcon />
              </IconButton>

              Loan Application
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
 <Grid container item xs={12} spacing={2} direction="row" className={classes.grid}>
                        <Grid item xs={6} >
              <div>
                <TextField id="mfiId" required type="text" name="mfiId" label="MFI Id"  value={values.mfiId} className={classes.textField} onChange={handleChange} onBlur={handleBlur} margin="dense"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </div>

              <tr></tr>

              

              <div>
                <TextField  id="loanId" type="text" name="loanId" label="Loan Id" className={classes.textField} value={values.loanId} onChange={handleChange} onBlur={handleBlur} margin="dense"
                  variant="outlined" InputLabelProps={{
                    shrink: true,
                  }}
                />
                
              </div>
              <tr></tr>

              <div>
                <TextField  id="interestRate" type="text" name="interestRate" label="Interest Rate" className={classes.textField} value={values.interestRate} onChange={handleChange} onBlur={handleBlur} margin="dense"
                  variant="outlined" InputLabelProps={{
                    shrink: true,
                  }}
                />
                
              </div>
              <tr></tr> 
              <div>
                <TextField id="productId" type="text" name="productId" label="Product Id" className={classes.textField} value={values.productId} onChange={handleChange} onBlur={handleBlur} margin="dense"
                  variant="outlined" InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>

              <div>
                <TextField id="date" type="date" name="date" label="Start Date" className={classes.textField} value={values.date} onChange={handleChange} onBlur={handleBlur} margin="dense"
                  variant="outlined" InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <tr></tr>
             
              </Grid>
              <Grid item xs={6} >

              <div>
                <TextField required id="microEntrepreneurId" type="text" name="microEntrepreneurId" label="Microentrepreneur Id" className={classes.textField} value={values.microEntrepreneurId} onChange={handleChange} onBlur={handleBlur} margin="dense"
                  variant="outlined" InputLabelProps={{
                    shrink: true
                  }}
                />
        
              </div>
              <tr></tr>

              

             
              <div>
                <TextField id="loanAmount" type="text" name="loanAmount" label="Loan Amount" className={classes.textField} value={values.loanAmount} onChange={handleChange} onBlur={handleBlur} margin="dense"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }} />
              </div>

              <div>
                <TextField  id="tenure" type="text" name="tenure" label="Tenure" className={classes.textField} value={values.tenure} onChange={handleChange} onBlur={handleBlur} margin="dense"
                  variant="outlined" InputLabelProps={{
                    shrink: true,
                  }}
                />
                
              </div>

              <tr></tr>
              <div>
                <TextField id="productName" type="text" name="productName" label="Product Name" className={classes.textField} value={values.productName} onChange={handleChange} onBlur={handleBlur} margin="dense"
                  variant="outlined" InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <tr></tr>
             
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

export default withStyles(styles)(Loan);
