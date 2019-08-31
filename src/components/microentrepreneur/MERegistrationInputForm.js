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

class MERegistrationInputForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount(){
    }

    handleClose=()=>{
        this.props.notificationOff();
    }

    render() {
        const currentPath = this.props.location.pathname
        const {
            microentrepreneur,
            registerME,
            isLoading,
            error,
        } = this.props;

        return (
            <React.Fragment>
                <SideNavBar currentPath={currentPath} />
                    <CustomizedSnackbars {...this.props} handleClose={this.handleClose} />
                        <Grid container justify="center" alignItems="center" spacing={24}>
                                    <Formik
                                        initialValues={microentrepreneur}
                                        enableReinitialize
                                        validationSchema={validationSchema}
                                        onSubmit={registerME}

                                        render={
                                            props => <MERegistration handleSubmit={this.props.handleSubmit} {...props} />}
                                    >
                                    </Formik>
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

