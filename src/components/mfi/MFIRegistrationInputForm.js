import React, { Component } from 'react';
import { Formik } from 'formik';
import MFIRegistration from './MFIRegistration';
import axios from 'axios'
//import Button from "@material-ui/core/Button";
import * as Yup from 'yup'
import SideNavBar from './../SideNavBar';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/styles/withStyles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registerMFI } from './../../actions/MFIActions';
import {notificationOff} from '../../actions/NotificationActions';
//import Snackbar from '@material-ui/core/Snackbar';
import CustomizedSnackbars from './../../utils/SnackBar';


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.grey['A500'],
        overflow: 'hidden',
        /* background: `url(${backgroundShape}) no-repeat`, */
        backgroundSize: 'cover',
        backgroundPosition: '0 400px',
        marginTop: 20,
        padding: 20,
        paddingBottom: 200
    },
    grid: {
        width: 1000
    }
})


const validationSchema = Yup.object({
    companyName: Yup.string("")
        .min(8, "Company Name must contain at least 8 characters"),
    directorName: Yup.string("")
        .min(8, "Director Name must contain at least 8 characters"),
});

const initialState = {
    mfiId: "",
    companyName: "",
    directorName: ""
}

class MFIRegistrationInputForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    
    handleClose=()=>{
        this.props.notificationOff();
    }

    /*  //invokes rest API
     registerMFI = (values) => {
 
          alert('handle submit in parent class ! Hurray' + JSON.stringify(values));
         var payload = JSON.stringify(values)
         axios.post('http://localhost:8081/mfi', payload).then((response) => {
             console.log(response);
         })
             .catch((error) => {
                 alert(error)
             }) 
     }
  */
    render() {
        //const currentPath = this.props.location.pathname
        const { classes } = this.props;
        const {
            mfi,
            registerMFI,
            isLoading,
            error,
        } = this.props;

        return (
            <React.Fragment>
                {/* <SideNavBar currentPath={currentPath} /> */}
                <CustomizedSnackbars {...this.props} handleClose={this.handleClose} />
                {/*     <div className={classes.root}> */}
                        <Grid container justify="center">
                            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
                                 <Grid item xs={12}> 
                                    <Formik
                                        initialValues={mfi}
                                        enableReinitialize
                                        validationSchema={validationSchema}
                                        /* onSubmit={(values, { setSubmitting }) => {
                                           this.registerMFI(values);
                                           
                                       }}  */
                                        onSubmit={registerMFI}

                                        render={
                                            props => <MFIRegistration handleSubmit={this.props.handleSubmit} {...props} />}
                                    >
                                    </Formik>
                                </Grid> 
                            </Grid>
                        </Grid>
                    
                {/* </div> */}
            </React.Fragment>
        );
    }


}

const mapStateToProps = state => ({
    mfi: state.mfi.mfi,
    isLoading: state.mfi.isLoading,
    error: state.mfi.error,
    open:state.mfi.open,
    message: state.mfi.message

});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        registerMFI,
        notificationOff
    }, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MFIRegistrationInputForm));

