import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { RegistrationIcon } from './../../styles/icons';
import Grid from '@material-ui/core/Grid';
import Product from './../product/Product';
import { red, grey } from '@material-ui/core/colors'
import MenuItem from '@material-ui/core/MenuItem';
import {populateSelect} from './../../utils/Common';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
        minWidth: 200,
        padding: 5,
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
    },
    /*  card: {
       //maxWidth: 345,
       padding: theme.spacing(3),
       marginLeft: theme.spacing(0),
       marginRight: theme.spacing(0),
   }, */

})

const mfiOptions =[]; 
const meOptions =[]; 
 
class LoanRepayment extends Component {

  
    onSubmitClick = (values) => {
        //alert('handle submit in parent class ! Hurray');
        this.props.handleSubmit();
    }


    render() {
        const {
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            mfiOptions,
            meOptions
            
        } = this.props;


    
        const { classes } = this.props;
        return (
            <Box bgcolor="background.main" p={4} m={2}>
                <Card className={classes.card}>
                    <div>
                        <Typography variant="h6">
                            <IconButton>
                                <RegistrationIcon />
                            </IconButton>

                            Loan Repayment
              </Typography>
                        <Divider />
                    </div>

                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            {/* Remember values is sent by the Formik form */}


                            {/* MainID Details*/}
                            <div className={classes.div}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography className={classes.title} gutterBottom>
                                            Identifiers
                                        </Typography>
                                        <Grid container item xs={12} spacing={2} direction="row">
                                            <Grid item xs={3} >
                                               
                                                <div>
                                                    <TextField id="filled-select-mfiOptions" select label="MFI Id" className={classes.textField} value={values.mfiOptions} onChange={handleChange('mfiOptions')} margin="dense"
                                                        variant="outlined" InputLabelProps={{
                                                            shrink: true,
                                                        }} SelectProps={{
                                                            MenuProps: {
                                                                className: classes.menu,
                                                            },
                                                        }}
                                                    >
                                                        {mfiOptions.map(option => (
                                                            <MenuItem key={option.value} value={option.value}>
                                                                {option.label}
                                                            </MenuItem>
                                                        ))}
                                                    </TextField>
                                                </div>

                                            </Grid>
                                            <Grid item xs={3} >
                                                {/* <div>
                                                    <TextField id="microEntrepreneurId" type="text" name="microEntrepreneurId" label="MicroEntrepreneur Id" value={values.microEntrepreneurId} className={classes.textField} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                                        variant="outlined"
                                                        InputLabelProps={{
                                                            shrink: true
                                                        }}
                                                    />
                                                </div> */}
                                                <div>
                                                    <TextField id="filled-select-meOptions" select label="MicroEntrepreneur Id" className={classes.textField} value={values.meOptions} onChange={handleChange('meOptions')} margin="dense"
                                                        variant="outlined" InputLabelProps={{
                                                            shrink: true,
                                                        }} SelectProps={{
                                                            MenuProps: {
                                                                className: classes.menu,
                                                            },
                                                        }}
                                                    >
                                                        {meOptions.map(option => (
                                                            <MenuItem key={option.value} value={option.value}>
                                                                {option.label}
                                                            </MenuItem>
                                                        ))}
                                                    </TextField>
                                                </div>
                                            </Grid>
                                            <Grid item xs={3} >
                                                <div>
                                                    <TextField id="loanId" type="text" name="loanId" label="Loan Id" value={values.loanId} className={classes.textField} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                                        variant="outlined"
                                                        InputLabelProps={{
                                                            shrink: true
                                                        }}
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={3} >
                                                <div>
                                                    <TextField id="date" required type="date" name="date" label="Today's Date" value={values.date} className={classes.textField} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                                        variant="outlined"
                                                        InputLabelProps={{
                                                            shrink: true
                                                        }}
                                                    />
                                                </div>
                                            </Grid>

                                        </Grid>
                                    </CardContent>
                                </Card>
                            </div>


                            {/* Product Details*/}
                            {/* <Product {...this.props}></Product> */}
                            <div className={classes.div}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography className={classes.title} gutterBottom>
                                            Product
                                        </Typography>

                                        <Grid container item xs={12} spacing={2} direction="row">
                                            <Grid item xs={3} >
                                                <div>
                                                    <TextField id="productId" type="text" name="productId" label="Product Id" className={classes.textField} value={values.productId} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                                        variant="outlined"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                </div>
                                            </Grid>

                                            <Grid item xs={3} >
                                                <div>
                                                    <TextField id="productName" type="text" name="productName" label="Product Name" className={classes.textField} value={values.productName} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                                        variant="outlined"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }} />
                                                </div>
                                            </Grid>

                                            <Grid item xs={3} >
                                                <div>
                                                    <TextField id="interestRate" type="text" name="interestRate" label="Interest Rate (%)" className={classes.textField} value={values.interestRate} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                                        variant="outlined"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                </div>
                                            </Grid>

                                            <Grid item xs={3} >
                                                <div>
                                                    <TextField id="tenure" type="text" name="tenure" label="Tenure (months)" className={classes.textField} value={values.tenure} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                                        variant="outlined"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </div>




                            {/* Loan  Amount */}
                            <div className={classes.div}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography className={classes.title} gutterBottom>
                                            Payment
                                        </Typography>
                                        <Grid container item xs={12} spacing={2} direction="    ">
                                            <Grid item xs={4} >
                                                <div>
                                                    <TextField id="payment" required type="text" name="payment" label="Amount ($)" value={values.payment} className={classes.textField} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                                        variant="outlined"
                                                        InputLabelProps={{
                                                            shrink: true
                                                        }}
                                                    />
                                                </div>

                                            </Grid>
                                            <Grid item xs={4}>
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    margin="dense"
                                                >
                                                    Submit
                                                </Button>
                                            </Grid>

                                            <Grid item xs={4}>

                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    margin="dense"
                                                >
                                                    Reset
                                                </Button>
                                            </Grid>

                                        </Grid>
                                    </CardContent>
                                </Card>
                            </div>



                        </form>
                    </CardContent>
                </Card>
            </Box>

        );
    }

}

export default withStyles(styles)(LoanRepayment);
