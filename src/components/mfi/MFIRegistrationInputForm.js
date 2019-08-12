import React, { Component } from 'react';
import { Formik } from 'formik';
import MFIRegistration from './MFIRegistration';
import axios from 'axios'
//import Button from "@material-ui/core/Button";
//import * as Yup from 'yup'

export default class LoginInputForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    //invokes rest API
    registerMFI = (values) => {
        alert('handle submit in parent class ! Hurray' + JSON.stringify(values));
        var payload=JSON.stringify(values)
        axios.post('http://localhost:8081/mfi',payload).then((response) => {
            console.log(response);
            })
        .catch((error) => {
           alert(error)
          })
    }

    render() {

        return (
            <React.Fragment>
                <div>
                    <Formik
                        initialValues={{ firstName: '' }}
                        onSubmit={(values, { setSubmitting }) => {
                            this.registerMFI(values);
                        }}
                        render={
                            props => <MFIRegistration handleSubmit={this.props.handleSubmit} {...props} />}
                    >
                    </Formik>
                </div>
            </React.Fragment>
        );
    }


}

