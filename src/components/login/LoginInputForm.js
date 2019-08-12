import React, { Component } from 'react';
import { Formik} from 'formik';
import withStyles from "@material-ui/core/styles/withStyles";
//import Paper from "@material-ui/core/Paper";
import Login from './Login';
//import Button from "@material-ui/core/Button";
import * as Yup from 'yup'

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

    handleSubmitParent = () => {
        alert('handle submit in parent class ! Hurray');
        
    }

    render() {

        const values = { email: "",  password: "" };
        return (
            <React.Fragment>
                <div>
                    <Formik
                    initialValues={values}
                    validationSchema={validationSchema}
                    render={
                        props => <Login handleSubmitParent={this.handleSubmitParent} {...props}/>}
                    /> 
                   
                    {/* <div>
                        <Login handleSubmitParent={this.handleSubmitParent}></Login>
                    </div>                       */}

                </div>
            </React.Fragment>
        );
    }


}
export default withStyles(styles)(LoginInputForm);
