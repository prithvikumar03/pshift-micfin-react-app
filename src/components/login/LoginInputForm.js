import React, { Component } from 'react';
import { Formik } from 'formik';
import withStyles from "@material-ui/core/styles/withStyles";
import Login from './Login';
import * as Yup from 'yup'
import { withAuthenticator } from 'aws-amplify-react'
import { TextField } from '@material-ui/core';

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

    login = (values) => {
        alert('handle submit in parent class ! Hurray' + JSON.stringify(values));
    }

   

    render() {

        return (
            /*   <React.Fragment>
                  <div>
                  
                      <Formik
                      initialValues={values}
                      validationSchema={validationSchema} 
                      onSubmit={(values, { setSubmitting }) => {
                          this.login(values);
                      }}
                      
                      render={
                          props => <Login handleSubmit={this.props.handleSubmit} {...props}/>}
                      /> 
  
                  </div>
              </React.Fragment> */

            <div className="App">
                <header className="App-header">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <p>
                        Edit <code>src/App.js</code> and save to reload !! HELLO GG
              </p>
                  
                 
                </header>
            </div >


        );
    }


}
export default withAuthenticator(withStyles(styles)(LoginInputForm));
