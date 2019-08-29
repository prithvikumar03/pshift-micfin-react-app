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
import { red, grey } from '@material-ui/core/colors'
import Product from './../product/Product';


const styles = theme => ({
    /* container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
        minWidth: 250,
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
        height: 48,
        padding: '0 30px', 
    } */

})


class LoanRepayment extends Component {


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
            <Box bgcolor="background.main" p={8} m={4}>
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
                                                    <TextField id="mfiId" disabled type="text" name="mfiId" label="MFI Id" value={values.mfiId} className={classes.textField} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                                        variant="outlined"
                                                        InputLabelProps={{
                                                            shrink: true
                                                        }}
                                                    />
                                                </div>

                                            </Grid>
                                            <Grid item xs={3} >
                                                <div>
                                                    <TextField id="meId" disabled type="text" name="meId" label="MicroEntrepreneur Id" value={values.meId} className={classes.textField} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                                        variant="outlined"
                                                        InputLabelProps={{
                                                            shrink: true
                                                        }}
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={3} >
                                                <div>
                                                    <TextField id="loanId" disabled type="text" name="loanId" label="Loan Id" value={values.loanId} className={classes.textField} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                                        variant="outlined"
                                                        InputLabelProps={{
                                                            shrink: true
                                                        }}
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={3} >
                                                <div>
                                                    <TextField id="date" required disabled type="date" name="date" label="Today's Date" value={values.date} className={classes.textField} onChange={handleChange} onBlur={handleBlur} margin="dense"
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
                            <Product {...this.props}></Product>



                            {/* Loan  Amount */}
                            <div className={classes.div}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography className={classes.title} gutterBottom>
                                            Payment
                                        </Typography>
                                        <Grid container item xs={12} spacing={2} direction="row">
                                            <Grid item xs={4} >
                                                <div>
                                                    <TextField id="amount" required type="text" name="amount" label="Amount ($)" value={values.amount} className={classes.textField} onChange={handleChange} onBlur={handleBlur} margin="dense"
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
