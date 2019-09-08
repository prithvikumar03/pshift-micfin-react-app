import React, { Component } from 'react';
import { Formik } from 'formik';
import Ledger from './Ledger';
import * as Yup from 'yup'
import SideNavBar from '../SideNavBar';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/styles/withStyles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTransactions } from '../../actions/TransactionsActions';


const styles = theme => ({
    /* root: {
        flexGrow: 1,
        backgroundColor: theme.palette.grey['A500'],
        overflow: 'hidden',
        background: `url(${backgroundShape}) no-repeat`, 
        backgroundSize: 'cover',
        backgroundPosition: '0 400px',
        marginTop: 20,
        padding: 20,
        paddingBottom: 200
    },
    grid: {
        width: 1000
    } */
})


/* const validationSchema = Yup.object({
    companyName: Yup.string("")
        .min(8, "Company Name must contain at least 8 characters"),
    directorName: Yup.string("")
        .min(8, "Director Name must contain at least 8 characters"),
}); */





class LedgerInputForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    
    onSearchClick=(values)=>{
        //alert('in parent'+ JSON.stringify(values));
        this.props.searchCriteria={...values}
        this.props.dispatch(fetchTransactions(this.props.searchCriteria));
        /* alert('1-'+event.taret[0].value);
        alert('2'+event.target.elements); */
    }

    render() {
        //const currentPath = this.props.location.pathname
        const { classes } = this.props;
        const {
            transactions,
            searchCriteria,
            fetchTransactions,
            error,
            user,
        } = this.props;

       //alert('user'+JSON.stringify(user));
        //alert('values'+JSON.stringify(values));
        let mfiId='';
        let meId='';
        if(user.userGroup==='MFI'){
            searchCriteria.mfiId=user.userId;
        }else if (user.userGroup==='ME'){
            searchCriteria.microEntrepreneurId=user.userId
        }
        
        return (
            <React.Fragment>
                {/* <SideNavBar currentPath={currentPath} /> */}
                        <Grid container justify="center">
                            <Grid spacing={2} alignItems="center" justify="center" container className={classes.grid}>
                                 {/* <Grid item xs={12}>  */}
                                     
                                     <Formik
                                                initialValues={searchCriteria}
                                                enableReinitialize
                                                //validationSchema={validationSchema} 
                                                onSubmit={(values, { setSubmitting }) => {
                                                    fetchTransactions(values);
                                                }}

                                                render={
                                                    props => <Ledger handleSubmit={this.props.handleSubmit} {...props} {...this.props} />}
                                            />  
                                    
                                {/* </Grid>  */}
                            </Grid>
                        </Grid>
                    
                {/* </div> */}
            </React.Fragment>
        );
    }


}

const mapStateToProps = state => ({
    transactions: state.tr.transactions,
    isLoading: state.tr.isLoading,
    error: state.tr.error,
    user: state.login.user,
    searchCriteria:state.tr.searchCriteria

});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        fetchTransactions
    }, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LedgerInputForm));

