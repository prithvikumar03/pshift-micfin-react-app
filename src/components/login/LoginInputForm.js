import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Formik } from 'formik';
import withStyles from "@material-ui/core/styles/withStyles";
import Login from './Login';
import * as Yup from 'yup'
//import { withAuthenticator } from 'aws-amplify-react'
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser } from '../../actions/LoginActions';
import { notificationOff } from '../../actions/NotificationActions';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { red, blue, grey, indigo, cyan } from '@material-ui/core/colors'
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const validationSchema = Yup.object({
    email: Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    password: Yup.string("")
        .min(8, "Password must contain at least 8 characters")
        .required("Enter your password")
});

const styles = theme => ({
    /*  root: {
         width: '100%',
         maxWidth: 600,
         backgroundColor: theme.palette.background.secondary,
       }, */
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
        if (message === 'SUCCESS') {
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
                                    <Grid item xs={6}>
                                        to do
                                    </Grid>
                                    
                                    <Grid item xs={6}>
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
                                    </Grid>
                                    
                                </Grid>

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
        notificationOff
    }, dispatch);


//export default withAuthenticator(withStyles(styles)(LoginInputForm));
//export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginInputForm));
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginInputForm));


