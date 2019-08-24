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
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';

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
        <div className={classes.div}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        Personal
                    </Typography>
                    {/* <Divider /> */}
                    <Grid container item xs={12} spacing={2} direction="row">
                        <Grid item xs={6} >

                            <div>
                                <TextField required id="aadhar" type="text" name="aadhar" label="Aadhar" value={values.aadhar} className={classes.textField} onChange={handleChange} onBlur={handleBlur} margin="dense"
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

                            
                            <div>
                                <TextField id="filled-select-yesNoOption" select label="Gender" className={classes.textField} value={values.yesNoOptions} onChange={handleChange('yesNoOptions')} margin="dense"
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

                            <div>
                                <TextField id="filled-select-yesNoOption" select label="maritialStatus" className={classes.textField} value={values.yesNoOptions} onChange={handleChange('yesNoOptions')} margin="dense"
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

                            <div>
                                <TextField  id="emiMonthly" type="text" name="emiMonthly" label="Monthly EMI" className={classes.textField} value={values.emiMonthly} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>

                            <div>
                                <TextField id="filled-select-yesNoOption" select label="Smoker" className={classes.textField} value={values.yesNoOptions} onChange={handleChange('yesNoOptions')} margin="dense"
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
                        </Grid>
                        <Grid item xs={6}>
                            <div>
                                <TextField  required id="mfiId" type="text" name="mfiId" label="MFI Id" className={classes.textField} value={values.mfiId} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                            <div>
                                <TextField  id="formalSavingsAccount" type="text" name="formalSavingsAccount" label="Formal Savings Account" className={classes.textField} value={values.formalSavingsAccount} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                            <div>
                                <TextField  id="highestEducation" type="text" name="highestEducation" label="Highest Education" className={classes.textField} value={values.highestEducation} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                            <div>
                                <TextField  id="householExp" type="text" name="householExp" label="Household Expenses" className={classes.textField} value={values.householExp} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>

                            <div>
                                <TextField  id="householdIncome" type="text" name="householdIncome" label="Household Income" className={classes.textField} value={values.householdIncome} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>

                            <div>
                                <TextField  id="incomeFromOtherSources" type="text" name="incomeFromOtherSources" label="Income from Other Sources" className={classes.textField} value={values.incomeFromOtherSources} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>

                            <div>
                                <TextField  id="totalAssests" type="text" name="totalAssests" label="Total Assets" className={classes.textField} value={values.totalAssests} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>

                            <div>
                                <TextField id="filled-select-yesNoOption" select label="Drinker" className={classes.textField} value={values.yesNoOptions} onChange={handleChange('yesNoOptions')} margin="dense"
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
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>

    );

}