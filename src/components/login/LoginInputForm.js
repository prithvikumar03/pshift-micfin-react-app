import React, { Component } from 'react';
import { Formik } from 'formik';
import withStyles from "@material-ui/core/styles/withStyles";
//import Paper from "@material-ui/core/Paper";
import Login from './Login';
//import Button from "@material-ui/core/Button";
import * as Yup from 'yup'
import { Auth } from 'aws-amplify'
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

function checkUser() {
    Auth.currentAuthenticatedUser()
        .then(user => console.log({ user }))
        .catch(err => console.log(err))
}

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

    signin = (username, password) => {
        alert('sign in ' + username + ',' + password + ',');
        const user = Auth.signIn({
            username, // Required, the username
            password // Optional, the password

        }).then(user => console.log("User signed in successfully" + user))
            .catch(err => console.log(err));
    }


    signOut = () => {
        Auth.signOut()
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }


    verify = (username, code, ) => {

        alert('verify' + username, code);
        Auth.confirmSignUp(username, code, {
            // Optional. Force user confirmation irrespective of existing alias. By default set to True.
            forceAliasCreation: true
        }).then(data => console.log(data))
            .catch(err => console.log(err));

        Auth.resendSignUp(username).then(() => {
            console.log('code resent successfully');
        }).catch(e => {
            console.log(e);
        });
    }
    signup = (username, password, email) => {
        alert('sign up ' + username + ',' + password + ',' + email);
        Auth.signUp({
            username,
            password,
            attributes: {
                email,
            },
            validationData: []  //optional
        })
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }


    render() {

        //const values = { username: "ggavarra", email: "gayathri1.g@gmail.com", password: "ggavarra" };
        let username = "micfinMFIUser3";
        let password = "micfinMFIUser3";
        let email = "gayathri1.g@gmail.com";
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
                    <div>
                        <button onClick={() => Auth.federatedSignIn({ provider: 'Google' })}>federated Sign In</button>
                    </div>

                    <div>
                        <button onClick={() =>
                            Auth.signUp({
                                username,
                                password,
                                attributes: {
                                    email,
                                },
                                validationData: []  //optional
                            })
                                .then(data => console.log(data))
                                .catch(err => console.log(err))}>
                            Sign up
                    </button>
                    </div>

                    <div>
                        <TextField id="code" type="text" name="code" label="Code" />

                        <button onClick={() => this.verify(username, "476277")}
                        >
                            Verify
                    </button>
                    </div>


                    <div>
                        <button onClick={() => this.signin(username, password)}> Sign In</button>
                    </div>

                    <div>
                        <button onClick={() => this.signOut()}> Sign out</button>
                    </div>
                </header>
            </div >


        );
    }


}
export default withStyles(styles)(LoginInputForm);
