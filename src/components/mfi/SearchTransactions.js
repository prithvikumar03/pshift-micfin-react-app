import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/styles/withStyles';
//import { ErrorMessage } from 'formik';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { RegistrationIcon } from './../../styles/icons';
import Grid from '@material-ui/core/Grid';
import LoanGrid from './LoanGrid';
import SpanningTable from './SpanningTable';

const styles = theme => ({

})


const columns = [
    /* {
     name: "mfiName",
     label: "MFI Name",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
        name: "meId",
        label: "ME Id",
        options: {
            filter: true,
            sort: true,
        }
    }, */
    {
    name: "meName",
    label: "ME Name",
    options: {
        filter: true,
        sort: true,
    }
    },
    {
    name: "loanId",
    label: "Loan Id",
    options: {
        filter: true,
        sort: false,
    }
    },   
    {
     name: "loanAmount",
     label: "Loan Amount ($)",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "Date",
     label: "Date",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
        name: "productName",
        label: "Product Name",
        options: {
         filter: true,
         sort: false,
        }
    },
    {
     name: "interestRate",
     label: "Interest Rate",
     options: {
      filter: true,
      sort: false,
     }
    },
     {
        name: "tenure",
        label: "Tenure",
        options: {
         filter: true,
         sort: false,
        }
    },
   ];




class SearchTransactions extends Component {


    constructor(props) {
        super(props);
        this.state = {
            displayLoanRepayments: false
        };
    }

    onRowsSelect=(curRowSelected, allRowsSelected)=>{
        let rowSelected=curRowSelected[0].index;
        console.log('Loan Id'+ JSON.stringify(this.props.values.loanDisbursements[rowSelected].loanId));
        this.setState({displayLoanRepayments: true, selectedLoanId:this.props.values.loanDisbursements[rowSelected].loanId});
    }
    
    
    onRowClick=()=>{
        this.onRowsSelect();
    }

    render() {
        const {
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
        } = this.props;

        const { classes } = this.props;
        let renderloanDisbursements = <div></div>;
        let renderLoanRepaymentHistory=<div></div>;
        //if(values.loanDisbursements && values.loanDisbursements.length>0){
        if (values && values.loanDisbursements.length>0) {
            renderloanDisbursements =<LoanGrid data={values.loanDisbursements} columns={columns} title={"Loan Disbursement"} onRowsSelect={this.onRowsSelect} onRowClick={this.onRowClick} {...this.props} />;
        }

        if(this.state.displayLoanRepayments){
            renderLoanRepaymentHistory=<SpanningTable/>
        }

        return (
            <Box bgcolor="background.main" p={8} m={4}>
                <Card className={classes.card}>
                    <div>
                        <Typography variant="h6">
                            <IconButton>
                                <RegistrationIcon />
                            </IconButton>

                            Transactions
              </Typography>
                        <Divider />
                    </div>

                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            {/* Remember values is sent by the Formik form */}


                            {/* Search Card*/}
                            <div className={classes.div}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography className={classes.title} gutterBottom>
                                            Search
                                        </Typography>
                                        <Grid container item xs={12} spacing={2} direction="row">
                                            <Grid item xs={3} >
                                                <div>
                                                    <TextField id="mfiId" type="text" name="mfiId" label="MFI Id" value={values.mfiId} className={classes.textField} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                                        variant="outlined"
                                                        InputLabelProps={{
                                                            shrink: true
                                                        }}
                                                    />
                                                </div>

                                            </Grid>
                                            <Grid item xs={3} >
                                                <div>
                                                    <TextField id="meId" type="text" name="meId" label="Microentrepreneur Id" value={values.meId} className={classes.textField} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                                        variant="outlined"
                                                        InputLabelProps={{
                                                            shrink: true
                                                        }}
                                                    />
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
                                                    <TextField id="date" type="date" name="date" label="Date" value={values.date} className={classes.textField} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                                        variant="outlined"
                                                        InputLabelProps={{
                                                            shrink: true
                                                        }}
                                                    />
                                                </div>
                                            </Grid>
                                        </Grid>





                                        <Grid container item xs={8} spacing={2} direction="row">
                                            <Grid item xs={4}>
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    margin="dense"
                                                >
                                                    Search
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

                            <div className={classes.div}>
                                <Grid container item xs={12} spacing={2}>
                                    <Grid item xs={12}>
                                        {renderloanDisbursements}
                                    </Grid>
                                </Grid>
                            </div>

                            <div className={classes.div}>
                                <Grid container item xs={12} spacing={2}>
                                    <Grid item xs={12}>
                                        {renderLoanRepaymentHistory}
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

export default withStyles(styles)(SearchTransactions);
