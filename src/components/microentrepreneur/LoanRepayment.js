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
   
})

const mfiOptions =[]; 
const meOptions =[]; 
 
class LoanRepayment extends Component {

    constructor(props) {
        super(props);
        this.state = {
           mfiId:'',
           microEntrepreneurId:'',
           loanId:'',
           productId:'',
           productName:'',
           interestRate:'',
           tenure:'',
           mfiOptions:[],
           meOptions:[],
           loanOptions:[]
        };
    }
    onSubmitClick = (values) => {
        //alert('handle submit in parent class ! Hurray');
        this.props.handleSubmit();
    }

    handleChange=(event)=>{
        alert('handlechange');
        //   handleChange('mfiOptions')

    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user!==this.props.user){
            let mfiValues=[];
            mfiValues.push(this.props.user.mfiId);
            this.setState({mfiOptions:populateSelect(mfiValues)})
        }
        if(nextProps.microentrepreneurs!==this.props.microentrepreneurs){
            let meValues=[];
            meValues.push(nextProps.microentrepreneurs.map(x=>x.microEntrepreneurId));
            this.setState({meOptions:populateSelect(meValues)})
        }
        if(nextProps.transactions!==this.props.transactions){
            this.setState({loanOptions:populateSelect(nextProps.transactions.map(x=>x.loanId))})
        }
    }

    componentWillMount(){
        if(this.props.user){
            let mfiValues=[];
            mfiValues.push(this.props.user.mfiId);
            this.setState({mfiOptions:populateSelect(mfiValues)});
        }
    }

    handleMFIChange=(event)=>{
        this.setState(
            {
                [event.target.name]:[event.target.value],
            }
        );
        this.props.onMFIChange(event);
    }

    handleMEChange=(event)=>{
        this.setState(
            {
                [event.target.name]:[event.target.value],
            }
        );
        this.props.onMEChange(event);
    }
    
    handleLoanChange=(event)=>{
        this.setState(
            {
                [event.target.name]:[event.target.value],
            }
        );
        this.populateProductInfo(event.target.value);
    }
    
    populateProductInfo=(loanId)=>{
        let {transactions}=this.props;
        let tInfo=transactions.filter(x=>(x.loanId===loanId))
        this.setState({
            productId:tInfo[0].productId,
            productName:tInfo[0].productName,
            tenure:tInfo[0].tenure,
            interestRate:tInfo[0].interestRate
        })
    }

    render() {
        const {
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            onMFIChange,
            mfiValues,
            meValues
            
        } = this.props;


    
        const { classes } = this.props;
        return (
            <Box bgcolor="background.main" p={1} m={1}>
                <Card className={classes.cardNoSpacing}>
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
                                <Card className={classes.cardNoSpacing}>
                                    <CardContent>
                                        <Typography className={classes.title} gutterBottom>
                                            Identifiers
                                        </Typography>
                                        <Grid container item xs={12} spacing={2} direction="row">
                                            <Grid item xs={3} >
                                               
                                                <div>
                                                    <TextField id="filled-select-mfiOptions" select name="mfiId" label="MFI Id" className={classes.textField} value={this.state.mfiId} onChange={this.handleMFIChange} margin="dense"
                                                        variant="outlined" InputLabelProps={{
                                                            shrink: true,
                                                        }} SelectProps={{
                                                            MenuProps: {
                                                                className: classes.menu,
                                                            },
                                                        }}
                                                    >
                                                        {this.state.mfiOptions.map(option => (
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
                                                    <TextField id="filled-select-meOptions" select name='microEntrepreneurId' label="MicroEntrepreneur Id" className={classes.textField} value={this.state.microEntrepreneurId} onChange={this.handleMEChange} margin="dense"
                                                        variant="outlined" InputLabelProps={{
                                                            shrink: true,
                                                        }} SelectProps={{
                                                            MenuProps: {
                                                                className: classes.menu,
                                                            },
                                                        }}
                                                    >
                                                        {this.state.meOptions.map(option => (
                                                            <MenuItem key={option.value} value={option.value}>
                                                                {option.label}
                                                            </MenuItem>
                                                        ))}
                                                    </TextField>
                                                </div>
                                            </Grid>
                                            <Grid item xs={3} >
                                                <div>
                                                   {/*  <TextField id="loanId" type="text" name="loanId" label="Loan Id" value={values.loanId} className={classes.textField} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                                        variant="outlined"
                                                        InputLabelProps={{
                                                            shrink: true
                                                        }}
                                                    /> */}

                                                    <TextField id="filled-select-loanOptions" select name='loanId' label="Loan Id" className={classes.textField} value={this.state.loanId} onChange={this.handleLoanChange} margin="dense"
                                                        variant="outlined" InputLabelProps={{
                                                            shrink: true,
                                                        }} SelectProps={{
                                                            MenuProps: {
                                                                className: classes.menu,
                                                            },
                                                        }}
                                                    >
                                                        {this.state.loanOptions.map(option => (
                                                            <MenuItem key={option.value} value={option.value}>
                                                                {option.label}
                                                            </MenuItem>
                                                        ))}
                                                    </TextField>
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
                                <Card className={classes.cardNoSpacing}>
                                    <CardContent>
                                        <Typography className={classes.title} gutterBottom>
                                            Product
                                        </Typography>

                                        <Grid container item xs={12} spacing={2} direction="row">
                                            <Grid item xs={3} >
                                                <div>
                                                    <TextField id="productId" disabled type="text" name="productId" label="Product Id" className={classes.textField} value={this.state.productId} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                                        variant="outlined"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                </div>
                                            </Grid>

                                            <Grid item xs={3} >
                                                <div>
                                                    <TextField id="productName" disabled type="text" name="productName" label="Product Name" className={classes.textField} value={this.state.productName} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                                        variant="outlined"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }} />
                                                </div>
                                            </Grid>

                                            <Grid item xs={3} >
                                                <div>
                                                    <TextField id="interestRate" disabled type="text" name="interestRate" label="Interest Rate (%)" className={classes.textField} value={this.state.interestRate} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                                        variant="outlined"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                </div>
                                            </Grid>

                                            <Grid item xs={3} >
                                                <div>
                                                    <TextField id="tenure" type="text" disabled name="tenure" label="Tenure (months)" className={classes.textField} value={this.state.tenure} onChange={handleChange} onBlur={handleBlur} margin="dense"
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
                                <Card className={classes.cardNoSpacing}>
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
