import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useStyles } from './../../styles/index';
import Grid from '@material-ui/core/Grid';

export default function Product(props) {
    const classes = useStyles();

    const {
        values,
        handleChange,
        handleBlur,
    } = props;


 return (
        <div className={classes.div}>
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                    Product
                </Typography>

                <Grid container item xs={12} spacing={2} direction="row">
                    <Grid item xs={3} >
                    <div>
                        <TextField id="productId" disabled type="text" name="productId" label="Product Id" className={classes.textField} value={values.product.productId} onChange={handleChange} onBlur={handleBlur} margin="dense"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    </Grid>

                    <Grid item xs={3} >
                    <div>
                        <TextField id="productName" disabled type="text" name="productName" label="Product Name" className={classes.textField} value={values.product.productName} onChange={handleChange} onBlur={handleBlur} margin="dense"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }} />
                    </div>
                    </Grid>

                    <Grid item xs={3} >
                    <div>
                        <TextField id="interestRate" disabled type="text" name="interestRate" label="Interest Rate (%)" className={classes.textField} value={values.product.interestRate} onChange={handleChange} onBlur={handleBlur} margin="dense"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    </Grid>

                    <Grid item xs={3} >
                    <div>
                        <TextField id="tenure" disabled type="text" name="tenure" label="Tenure (months)" className={classes.textField} value={values.product.tenure} onChange={handleChange} onBlur={handleBlur} margin="dense"
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


    );

}