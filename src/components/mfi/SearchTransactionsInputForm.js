import React, { Component } from 'react';
import { Formik } from 'formik';
import SearchTransactions from './SearchTransactions';
import * as Yup from 'yup'
import SideNavBar from './../SideNavBar';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/styles/withStyles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTransactions } from './../../actions/TransactionsActions';


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



class SearchTransactionsInputForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
   
    render() {
        //const currentPath = this.props.location.pathname
        const { classes } = this.props;
        const {
            transactions,
            fetchTransactions,
            error,
        } = this.props;

        return (
            <React.Fragment>
                {/* <SideNavBar currentPath={currentPath} /> */}
                        <Grid container justify="center">
                            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
                                 {/* <Grid item xs={12}>  */}
                                    <Formik
                                        //this is the crux.Never forget to initialise and enableReinitialize the formik form with the values!
                                        initialValues={transactions}
                                        enableReinitialize
                                       // validationSchema={validationSchema}
                                        onSubmit={fetchTransactions}

                                        render={
                                            props => <SearchTransactions handleSubmit={this.props.handleSubmit} {...props} />}
                                    >
                                    </Formik>
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
    error: state.tr.error

});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        fetchTransactions
    }, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SearchTransactionsInputForm));

