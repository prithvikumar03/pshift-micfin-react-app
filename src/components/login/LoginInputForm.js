import React, { Component, useReducer } from 'react';
import { Redirect } from 'react-router-dom'
import { Formik } from 'formik';
import withStyles from "@material-ui/core/styles/withStyles";
import Login from './Login';
import * as Yup from 'yup'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser,logoutUser } from '../../actions/LoginActions';
import { notificationOff } from '../../actions/NotificationActions';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import DisplayCard from './DisplayCard';
import DisplayCard1 from './DisplayCard1';
import DisplayCard2 from './DisplayCard2';
import DisplayCard3 from './DisplayCard3';
import Typography from '@material-ui/core/Typography';
import Footer from './../Footer';


const validationSchema = Yup.object({
    email: Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    password: Yup.string("")
        .min(8, "Password must contain at least 8 characters")
        .required("Enter your password")

});

const styles = theme => ({
    loginBox: {
        bgcolor: "text.hint",
        color: "background.paper",
    },

})



class LoginInputForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {

        const {
            user,
            loginUser,
            isLoading,
            error,
            message,
            classes,
        } = this.props;

        let redirect = <div></div>;
/* 
        if(this.props.match.path=='/logout' && user.userId!==""){
            let tuser={
                userId:"",
                userGroup:"",
                entitlementLevel:""
            }
            this.props.logoutUser(tuser);
        } */

        if (message === 'LOGIN SUCCESS' && user.userId!=="") {
            redirect = <Redirect to="/main" />;
        }

        return (

            <React.Fragment>

                <div>
                    <Grid container justify="left">
                        <Grid spacing={0} alignItems="center" justify="center" container xs={12}>
                            <Grid item xs={12}>
                                <Grid item xs={12}>
                                    <AppBar position="static">
                                        <Toolbar className={classes.toolbar}>
                                            <Grid item xs={9}>

                                                <img src={require('./../../images/micfinlogo10.png')} alt="Micfin logo" />
                                                <img src={require('./../../images/addon8.png')} alt="Micfin logo" />
                                            </Grid>
                                            <Grid item xs={9}>
                                                <Grid spacing={0} alignItems="center" justify="flex-end" container xs={12}>
                                                    <Grid item xs={12}>
                                                      {/*   <a href="">Signup</a> */}
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                        </Toolbar>
                                    </AppBar>
                                </Grid>
                            </Grid>



                            <Grid item xs={12}>
                                <Divider className={classes.divider} />
                            </Grid>



                            <Grid item xs={12}>
                                <Grid container direction="row" alignItems="center" justify="center" className={classes.headerGrid}>

                                    <Grid item xs={12}>
                                        <Box
                                            /* bgcolor="background.secondary" */
                                            boxShadow={2}
                                            /* style={{background: 'linear-gradient(to right bottom, #430089, #82ffa1)'}} */
                                            style={{ background: 'linear-gradient(to right bottom, #1565c0, #82ffa1)' }}

                                            p={{ xs: 2, sm: 3, md: 4 }}
                                        >

                                            <div>
                                                <Formik
                                                    initialValues={user}
                                                    enableReinitialize
                                                    //validationSchema={validationSchema} 
                                                    onSubmit={(values, { setSubmitting }) => {
                                                        loginUser(values);
                                                    }}

                                                    render={
                                                        props => <Login handleSubmit={this.props.handleSubmit} {...props} {...this.props} />}
                                                />
                                            </div>
                                        </Box>

                                    </Grid>

                                </Grid>

                            </Grid>


                            <Grid item xs={12}>
                                <Grid container direction="row" alignItems="center" justify="center" className={classes.headerGrid}>
                                    <Grid item xs={3}>
                                        <DisplayCard1 {...this.props} />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <DisplayCard2 {...this.props} />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <DisplayCard {...this.props} />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <DisplayCard3 {...this.props} />
                                    </Grid>
                                </Grid>
                            </Grid>


                            <Grid item xs={12}>
                                <div>
                                    <Footer {...this.props}></Footer>
                                </div>
                            </Grid>

                        </Grid>

                    </Grid>
                </div>
                <div>{redirect}</div>
            </React.Fragment>

        );


    }


}

const mapStateToProps = state => ({
    user: state.login.user,
    isLoading: state.login.isLoading,
    error: state.login.error,
    open: state.login.open,
    message: state.login.message

});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        loginUser,
        logoutUser,
        notificationOff
    }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginInputForm));


