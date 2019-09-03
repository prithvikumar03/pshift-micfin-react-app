import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import { Formik } from 'formik';
import withStyles from "@material-ui/core/styles/withStyles";
import Login from './Login';
import * as Yup from 'yup'
//import { withAuthenticator } from 'aws-amplify-react'
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser } from '../../actions/LoginActions';
import {notificationOff} from '../../actions/NotificationActions';


const styles = theme => ({
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
            .spacing.unit * 5}px`
    },
    container: {
        maxWidth: "200px"
    }
});

const validationSchema = Yup.object({
    email: Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    password: Yup.string("")
        .min(8, "Password must contain at least 8 characters")
        .required("Enter your password")
});

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
        } = this.props;
        
        let redirect= <div></div>;
        if(message==='SUCCESS'){
            redirect= <Redirect to="/mfiHome" /> ;
        }
       
        return (

               <React.Fragment>
                  <div>
                  
                      <Formik
                      initialValues={user}
                      enableReinitialize
                      //validationSchema={validationSchema} 
                      onSubmit={(values, { setSubmitting }) => {
                        loginUser(values);
                      }} 
                      
                      
                      render={
                          props => <Login handleSubmit={this.props.handleSubmit} {...props}/>}
                      /> 
  
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
    open:state.login.open,
    message: state.login.message

});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        loginUser,
        notificationOff
    }, dispatch);


//export default withAuthenticator(withStyles(styles)(LoginInputForm));
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginInputForm));


