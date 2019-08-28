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


const styles = theme => ({
    grid: {
        width: 1000
    }
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
        this.state = {};
    }

    componentWillMount(){
    }

    render() {
        const currentPath = this.props.location.pathname
        
        const {
            loanRepayment,
            loanRepaymentAction,
            isLoading,
            error,
            
        } = this.props;

        return (
            <React.Fragment>
                <SideNavBar currentPath={currentPath} />
                {/*     <div className={classes.root}> */}
                        <Grid container justify="center" alignItems="center" spacing={24}>
                            {/* <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
                                 <Grid item xs={12}> 
                             */}        <Formik
                                        initialValues={loanRepayment}
                                        enableReinitialize
                                        validationSchema={validationSchema}
                                        onSubmit={loanRepaymentAction}

                                        render={
                                            props => <LoanRepayment handleSubmit={this.props.handleSubmit} {...props} />}
                                    >
                                    </Formik>
                            {/*     </Grid> 
                            </Grid> */}
                        </Grid>
                    
                {/* </div> */}
            </React.Fragment>
        );
    }


}

const mapStateToProps = state => ({
    loanRepayment: state.lr.loanRepayment,
    isLoading: state.lr.isLoading,
    error: state.lr.error
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
       loanRepaymentAction
    }, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoanRepaymentInputForm));

