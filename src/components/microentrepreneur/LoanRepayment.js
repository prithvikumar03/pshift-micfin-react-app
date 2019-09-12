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
import { populateSelect } from './../../utils/Common';
import PaymentHistory from './PaymentHistory';
import { tsThisType } from '@babel/types';

const styles = theme => ({

})

const mfiOptions = [];
const meOptions = [];

class LoanRepayment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {
                mfiId: '',
                microEntrepreneurId: '',
                loanId: '',
                productId: '',
                productName: '',
                interestRate: '',
                tenure: '',
                date: '',
            },
            displayPaymentHistory: false,
            selectedTransaction: null,
            mfiOptions: [],
            meOptions: [],
            loanOptions: []
        };
    }
    onSubmitClick = (values) => {
        //alert('handle submit in parent class ! Hurray');
        this.props.handleSubmit();
    }

    handleChange = (event) => {
        alert('handlechange');
        //   handleChange('mfiOptions')

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user && (nextProps.user !== this.props.user)) {
            let mfiValues = [];
            mfiValues.push(this.props.user.mfiId);
            this.setState({ mfiOptions: populateSelect(mfiValues) })
        }
        if (nextProps.microentrepreneurs && (nextProps.microentrepreneurs !== this.props.microentrepreneurs)) {
            let meValues = [];
            meValues.push(nextProps.microentrepreneurs.map(x => x.microEntrepreneurId));
            this.setState({ meOptions: populateSelect(meValues[0]) })
        }
        if (nextProps.transactions && (nextProps.transactions !== this.props.transactions)) {
            this.setState({ loanOptions: populateSelect(nextProps.transactions.map(x => x.loanId)) })
        }
    }

    componentWillMount() {
        if (this.props.user) {
            let mfiValues = [];
            mfiValues.push(this.props.user.mfiId);
            this.setState({ mfiOptions: populateSelect(mfiValues) });
        }

        //set today's date
        //this.setState({ date: new Date() })

    }

    handleMFIChange = (event) => {

        this.setState(prevState => ({
            ...prevState,
            values: {
                ...prevState.values,
                [event.target.name]: [event.target.value]
            }


        }))

        this.props.onMFIChange(event);
    }

    handleMEChange = (event) => {
        this.setState(prevState => ({
            ...prevState,
            values: {
                ...prevState.values,
                [event.target.name]: [event.target.value]
            }


        }))
        this.props.onMEChange(event);
    }

    handleLoanChange = (event) => {
        this.setState(prevState => ({
            ...prevState,
            values: {
                ...prevState.values,
                [event.target.name]: [event.target.value]
            }

        }))
        this.populateOtherInfo(event.target.value);

    }



    populateOtherInfo = (loanId) => {
        let { transactions } = this.props;
        let tInfo = transactions.filter(x => (x.loanId === loanId))

        this.setState(prevState => ({
            ...prevState,
            values: {
                ...prevState.values,
                productId: tInfo[0].productId,
                productName: tInfo[0].productName,
                tenure: tInfo[0].tenure,
                interestRate: tInfo[0].interestRate
            },
            displayPaymentHistory: true,
            selectedTransaction: tInfo

        }))

    }

    onSubmit = () => {
        alert('values' + JSON.stringify(this.state.values));
        // let valuesNew={...this.state.Values,payment:this.props.values.payment,date:this.props.values.date}
        let { values } = this.props
        values = {
            "date": "2019-09-10T04:12:57.870Z",
            "id": "string",
            "interestRate": 10,
            "loanAmount": 110,
            "loanId": "L200",
            "mfiId": "MFI1",
            "microEntrepreneurId": "ME101",
            "payment": 28,
            "paymentDelayedInMonths": 0,
            "productId": "string",
            "productName": "string",
            "tenure": 0
        }


        /*   values.payment= '12'
          values.date=this.state.values.date
          values.mfiId=this.state.values.mfiId[0]
          values.microentrepreneurs=this.state.values.microEntrepreneurId[0]
          values.loanId=this.state.values.loanId[0] */
        alert('values2' + JSON.stringify(this.props.values));

        this.props.handleSubmit();
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

        let renderPaymentHistory = <div></div>;
        /* if (this.state.displayPaymentHistory) {
            if(this.state.selectedTransaction){ */
            renderPaymentHistory = <PaymentHistory 
            data={this.state.selectedTransaction ? this.state.selectedTransaction[0].repaymentInfoList:null}
             {...this.props} />
          /*   }
        } */

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
                        <form onSubmit={this.onSubmit}>
                            {/* Remember values is sent by the Formik form */}


                            {/* MainID Details*/}
                            <div className={classes.div}>
                                <Card className={classes.cardNoSpacing}>
                                    <CardContent>
                                        <Typography className={classes.title} gutterBottom>
                                            Identifiers
                                        </Typography>
                                        <Grid container item xs={12} spacing={2} direction="row" className={classes.grid}>
                                            <Grid item xs={6} >


                                                <div>
                                                    <TextField id="filled-select-mfiOptions" select name="mfiId" label="MFI Id" className={classes.textField} value={this.state.values.mfiId} onChange={this.handleMFIChange} margin="dense"
                                                        variant="outlined"
                                                       // helperText="Please select  MFI ID"
                                                        InputLabelProps={{
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


                                                <div>
                                                    <TextField id="filled-select-meOptions" select name='microEntrepreneurId' label="MicroEntrepreneur Id" className={classes.textField} value={this.state.values.microEntrepreneurId} onChange={this.handleMEChange} margin="dense"
                                                        variant="outlined"
                                                       // helperText="Please select  ME ID"
                                                        InputLabelProps={{
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

                                                <div>
                                                    {/*  <TextField id="loanId" type="text" name="loanId" label="Loan Id" value={values.loanId} className={classes.textField} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                                                                    variant="outlined"
                                                                                    InputLabelProps={{
                                                                                        shrink: true
                                                                                    }}
                                                                                /> */}

                                                    <TextField id="filled-select-loanOptions" select name='loanId' label="Loan Id" className={classes.textField} value={this.state.values.loanId} onChange={this.handleLoanChange} margin="dense"
                                                        variant="outlined"
                                                        //helperText="Please select Loan ID"
                                                        InputLabelProps={{
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

                                                <div>
                                                    <TextField id="meName" required type="meName" name="date" label="MicroEntrepreneur Name" value={this.state.meName} className={classes.textField} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                                        variant="outlined"
                                                        InputLabelProps={{
                                                            shrink: true
                                                        }}
                                                    />
                                                </div>


                                            </Grid>
                                            <Grid item xs={6} >

                                                <div>
                                                    <TextField id="productId" type="text" name="productId" label="Product Id" className={classes.textField} value={this.state.values.productId} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                                        variant="outlined"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                </div>

                                                <div>
                                                    <TextField id="productName" type="text" name="productName" label="Product Name" className={classes.textField} value={this.state.values.productName} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                                        variant="outlined"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }} />
                                                </div>

                                                <div>
                                                    <TextField id="interestRate" type="text" name="interestRate" label="Interest Rate (%)" className={classes.textField} value={this.state.values.interestRate} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                                        variant="outlined"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                </div>

                                                <div>
                                                    <TextField id="tenure" type="text" name="tenure" label="Tenure (months)" className={classes.textField} value={this.state.values.tenure} onChange={handleChange} onBlur={handleBlur} margin="dense"
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

                            <div className={classes.div}>
                                {renderPaymentHistory}
                            </div>



                            {/* Loan  Amount */}
                            <div className={classes.div}>
                            <Card className={classes.cardNoSpacing}>
                                <CardContent>
                                    <Typography className={classes.title} gutterBottom>
                                        Make Payment
                                        </Typography>
                                    <Grid container item xs={12} spacing={2} direction="row">
                                        <Grid item xs={6} >
                                            <div>
                                                <TextField id="payment" required type="text" name="payment" label="Amount ($)" value={values.payment} className={classes.textField} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                                    variant="outlined"
                                                    InputLabelProps={{
                                                        shrink: true
                                                    }}
                                                />
                                            </div>

                                            <div>
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    margin="dense"
                                                >
                                                    Submit
                                                </Button>
                                            </div>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <div>
                                                <TextField id="date" required type="date" name="date" label="Today's Date" value={values.date} className={classes.textField} onChange={handleChange} onBlur={handleBlur} margin="dense"
                                                    variant="outlined"
                                                    InputLabelProps={{
                                                        shrink: true
                                                    }}
                                                />
                                            </div>


                                            <div>

                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    margin="dense"
                                                >
                                                    Reset
                                                </Button>
                                            </div>
                                        </Grid>

                                    </Grid>


                                </CardContent>
                            </Card>
                        </div>



                        </form>
                    </CardContent>
                </Card>
            </Box >

        );
    }

}

export default withStyles(styles)(LoanRepayment);
