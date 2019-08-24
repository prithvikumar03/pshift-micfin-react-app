import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
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
export default function BusinessInfo(props) {
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
                    Business Details
                </Typography>

                <div>
                    <div>
                        <TextField id="businessExp" type="text" name="businessExp" label="Business Experience" className={classes.textField} value={values.businessExp} onChange={handleChange} onBlur={handleBlur} margin="dense"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>

                    <div>
                        <TextField id="businessStartYear" type="date" name="businessStartYear" label="Business Start Year" className={classes.textField} value={values.businessStartYear} onChange={handleChange} onBlur={handleBlur} margin="dense"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }} />
                    </div>

                    <div>
                        <TextField id="distBusinessToHome" type="text" name="distBusinessToHome" label="Distance from Home" className={classes.textField} value={values.distBusinessToHome} onChange={handleChange} onBlur={handleBlur} margin="dense"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>


                    <div>
                        <TextField id="filled-select-yesNoOption" select label="Is Business Registered" className={classes.textField} value={values.yesNoOptions} onChange={handleChange('yesNoOptions')} margin="dense"
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

                </div>
            </CardContent>
        </Card>



    );

}