import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useStyles } from './../../styles/index';

export default function Address(props) {

    const classes = useStyles();
    //const { classes } = this.props;

    const {
        values,
        handleChange,
        handleBlur,
    } = props;

    //alert ('address'+ JSON.stringify(this.props.values.address));      
    return (


        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                    Address
                </Typography>
                <div>
                    <div>
                        <TextField id="unitNo" type="text" name="unitNo" label="Unit No" className={classes.textField} value={values.address.unitNo} onChange={handleChange} onBlur={handleBlur} margin="dense"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }} />
                    </div>

                    <div>
                        <TextField id="streetName" type="text" name="streetName" label="Street Name" className={classes.textField} value={values.address.streetName} onChange={handleChange} onBlur={handleBlur} margin="dense"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }} />
                    </div>


                    <div>
                        <TextField id="city" type="text" name="city" label="City" className={classes.textField} value={values.address.city} onChange={handleChange} onBlur={handleBlur} margin="dense"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }} />
                    </div>


                    <div>
                        <TextField id="country" type="text" name="country" label="Country" className={classes.textField} value={values.address.country} onChange={handleChange} onBlur={handleBlur} margin="dense"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }} />
                    </div>


                    <div>
                        <TextField id="pinCode" type="text" name="pinCode" label="PinCode" className={classes.textField} value={values.address.pinCode} onChange={handleChange} onBlur={handleBlur} margin="dense"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }} />
                    </div>

                </div>
            </CardContent>
        </Card>



    );

}