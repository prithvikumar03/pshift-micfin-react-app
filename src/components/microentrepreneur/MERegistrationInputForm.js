import React, { Component } from 'react';
import { Formik } from 'formik';
import MERegistration from './MERegistration';
import * as Yup from 'yup'
import SideNavBar from '../SideNavBar';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/styles/withStyles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registerME } from '../../actions/MEActions';
import {notificationOff} from '../../actions/NotificationActions';
//import Snackbar from '@material-ui/core/Snackbar';
import CustomizedSnackbars from './../../utils/SnackBar';



const styles = theme => ({
   /*  grid: {
        width: 1000
    } */
})


const validationSchema = Yup.object({
    /* companyName: Yup.string("")
        .min(8, "Company Name must contain at least 8 characters"),
    directorName: Yup.string("")
        .min(8, "Director Name must contain at least 8 characters"), */
});

class MERegistrationInputForm extends Component {

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
            microentrepreneur,
            registerME,
            isLoading,
            error,
        } = this.props;
        const { classes } = this.props;
        return (
            <React.Fragment>
                {/* <SideNavBar currentPath={currentPath} /> */}
                    <CustomizedSnackbars {...this.props} handleClose={this.handleClose} />
                        <Grid container spacing={12} alignItems="center" justify="center" className={classes.grid}>
                            <Grid item xs={12} >
                                    <Formik
                                        initialValues={microentrepreneur}
                                        enableReinitialize
                                        validationSchema={validationSchema}
                                        onSubmit={registerME}

                                        render={
                                            props => <MERegistration handleSubmit={this.props.handleSubmit} {...props} {...this.props}/>}
                                    >
                                    </Formik>
                            </Grid>
                        </Grid>
            </React.Fragment>
        );
    }


}

const mapStateToProps = state => ({
    microentrepreneur: state.me.microentrepreneur,
    isLoading: state.me.isLoading,
    error: state.me.error,
    open:state.me.open,
    message: state.me.message

});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        registerME,
        notificationOff
    }, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MERegistrationInputForm));

