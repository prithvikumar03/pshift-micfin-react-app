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
import { RegistrationIcon } from '../../styles/icons';
import Grid from '@material-ui/core/Grid';
import LoanGrid from './LoanGrid';
import { red,grey } from '@material-ui/core/colors'

const styles = theme => ({
     textField: {
        /* marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1), */
    },
    card: {
        //maxWidth: 345,
        padding: theme.spacing(0),
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
    },
    div:{
        padding: theme.spacing(2),
    },
    extradiv:{
        padding: theme.spacing(4),
    }
})


const columns = [
    {
        name: "mfiId",
        label: "MFI Id",
        options: {
         filter: true,
         sort: true,
        }
       },
     {
     name: "mfiName",
     label: "MFI Name",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
        name: "microEntrepreneurId",
        label: "ME Id",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
    name: "microEntrepreneurName",
    label: "ME Name",
    options: {
        filter: true,
        sort: true,
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
        name: "loanBalance",
        label: "Loan Balance ($)",
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




class LedgerResults extends Component {


    constructor(props) {
        super(props);
        this.state = {
          
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

    onSearchClick=(event)=>{
        
        //alert('mfiid-'+event.target.elements.mfiId.value); 
        let values={
            mfiId:`${event.target.elements.mfiId.value}`,
            microEntrepreneurId:`${event.target.elements.microEntrepreneurId.value}`,
            loanId:`${event.target.elements.loanId.value}`
        }
        //alert('values'+ JSON.stringify(values));
        this.props.onSearchClick(values);
    }

    render() {
        const {
            classes,
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            user,
        } = this.props;

        
       

        return (
            <div>

                <React.Fragment>
                            <div className={classes.div}>
                                <Grid container item xs={12} spacing={2}>
                                    <Grid item xs={12}>
                                    <LoanGrid data={values} columns={columns} title={"Loans"} onRowsSelect={this.props.onRowsSelect} onRowClick={this.props.onRowClick} {...this.props} />
       
                                    </Grid>
                                </Grid>
                            </div>


                </React.Fragment>
            </div> 
        );
    }

}

export default withStyles(styles)(LedgerResults);
