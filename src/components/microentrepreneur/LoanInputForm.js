import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import {grey } from '@material-ui/core/colors'
import Loan from './Loan'
import {notificationOff} from '../../actions/NotificationActions';
//import Snackbar from '@material-ui/core/Snackbar';
import CustomizedSnackbars from './../../utils/SnackBar';
import { Formik } from 'formik';
import { registerLoan } from '../../actions/LoanActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Yup from 'yup'

const styles = theme => ({
 
})


const validationSchema = Yup.object({
    /* companyName: Yup.string("")
        .min(8, "Company Name must contain at least 8 characters"),
    directorName: Yup.string("")
        .min(8, "Director Name must contain at least 8 characters"), */
});

class LoanInputForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

   

    handleClose=()=>{
        this.props.notificationOff();
    }

    render() {
        //const currentPath = this.props.location.pathname
        const {
            loan,
            registerLoan,
            isLoading,
            error,
        } = this.props;

        const { classes } = this.props;
       return(
                <React.Fragment>
                {/* <SideNavBar currentPath={currentPath} /> */}
                <CustomizedSnackbars {...this.props} handleClose={this.handleClose} />
                {/*     <div className={classes.root}> */}
                        <Grid container justify="center">
                            <Grid spacing={12} alignItems="center" justify="center" container className={classes.grid}>
                                <Grid item xs={12}> 
                                    <Formik
                                        initialValues={loan}
                                        enableReinitialize
                                        //validationSchema={validationSchema}
                                        /* onSubmit={(values, { setSubmitting }) => {
                                        this.registerMFI(values);
                                        
                                    }}  */
                                        onSubmit={registerLoan}

                                        render={
                                            props => <Loan handleSubmit={this.props.handleSubmit} {...props} {...this.props}/>}
                                    >
                                    </Formik>
                                </Grid> 
                            </Grid>
                        </Grid>
                    
                {/* </div> */}
            </React.Fragment>
       )
    
  }

}

const mapStateToProps = state => ({
    loan: state.loan.loan,
    isLoading: state.loan.isLoading,
    error: state.loan.error,
    open:state.loan.open,
    message: state.loan.message

});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        registerLoan,
        notificationOff
    }, dispatch);

    export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoanInputForm));

