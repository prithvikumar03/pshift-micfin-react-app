import React, { Component } from 'react';
import { Formik } from 'formik';
import LoanRepayment from './LoanRepayment';
import * as Yup from 'yup'
import SideNavBar from '../SideNavBar';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/styles/withStyles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loanRepaymentAction } from '../../actions/LoanRepaymentActions';
import { fetchAllEntrepreneurs } from '../../actions/MEActions';
import { fetchTransactions } from '../../actions/TransactionsActions';
import CustomizedSnackbars from './../../utils/SnackBar';
import { populateSelect } from './../../utils/Common';
import Errors from './../../utils/Errors';


const styles = theme => ({

})


const validationSchema = Yup.object({
    /* companyName: Yup.string("")
        .min(8, "Company Name must contain at least 8 characters"),
    directorName: Yup.string("")
        .min(8, "Director Name must contain at least 8 characters"), */
});

class LoanRepaymentInputForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mfiOptions: [],
            meOptions: []
        };
    }

    onMFIChange = (event) => {
        this.props.fetchAllEntrepreneurs(this.props.user.mfiId);
    }

    onMEChange = (event) => {
        //TODO change it later to use MEID instead of MFI ID
        this.props.fetchTransactions({ "mfiId": this.props.user.mfiId });
    }
    componentWillMount() {
    }

    render() {

        const {
            loanRepayment,
            loanRepaymentAction,
            isLoading,
            error,

        } = this.props;
        const { classes } = this.props;

        return (
            <React.Fragment>

               {/*  <CustomizedSnackbars {...this.props} handleClose={this.handleClose} /> */}
                <Grid spacing={12} alignItems="center" justify="center" container className={classes.grid}>
                   {/*  <Grid item xs={12}>
                        <Errors {...this.props} />
                    </Grid> */}
                    <Grid item xs={12}>

                        <Formik
                            //initialValues={loanRepayment}
                            //enableReinitialize
                            //validationSchema={validationSchema}
                            //onSubmit={loanRepaymentAction}
                            onSubmit={(values, { setSubmitting }) => {
                                loanRepaymentAction(values);
                            }}


                            render={
                                props => <LoanRepayment handleSubmit={this.props.handleSubmit}
                                    onMFIChange={this.onMFIChange}
                                    onMEChange={this.onMEChange}
                                    {...props} {...this.props} />}
                        >
                        </Formik>
                    </Grid>
                </Grid>

            </React.Fragment>
        );
    }


}

const mapStateToProps = state => ({
    loanRepayment: state.lr.loanRepayment,
    isLoading: state.lr.isLoading,
    error: state.lr.error,
    user: state.login.user,
    microentrepreneurs: state.me.microentrepreneurs,
    transactions: state.tr.transactions,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        loanRepaymentAction,
        fetchAllEntrepreneurs,
        fetchTransactions
    }, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoanRepaymentInputForm));

