import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
//import MenuItem from '@material-ui/core/MenuItem';
import { ErrorMessage } from 'formik';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useStyles } from './../../styles/index';

export const yesNoOptions = [
    {
        value: 'YES',
        label: 'YES',
    },
    {
        value: 'NO',
        label: 'NO',
    },
];
export default function PersonalDetails(props) {

    const classes = useStyles();
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
                    Personal
                    </Typography>
                {/* <Divider /> */}
                <div>
                    <div>
                        <TextField id="aadhar" type="text" name="aadhar" label="Aadhar" value={values.aadhar} className={classes.textField} onChange={handleChange} onBlur={handleBlur} margin="dense"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    </div>
                    <div>
                        <TextField required id="firstName" type="text" name="firstName" label="First Name" className={classes.textField} value={values.firstName} onChange={handleChange} onBlur={handleBlur} margin="dense"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <ErrorMessage name="firstName">{msg => <div><span className={classes.error} >{msg}</span></div>}</ErrorMessage>
                    </div>
                    <div>
                        <TextField required id="lastName" type="text" name="lastName" label="Last Name" className={classes.textField} value={values.lastName} onChange={handleChange} onBlur={handleBlur} margin="dense"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <ErrorMessage name="lastName">{msg => <div><span className={classes.error} >{msg}</span></div>}</ErrorMessage>
                    </div>
                    <div>
                        <TextField required id="dob" type="text" name="dob" label="Date Of Birth" className={classes.textField} value={values.dob} onChange={handleChange} onBlur={handleBlur} margin="dense"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>

                </div>

            </CardContent>
        </Card>


    );

}