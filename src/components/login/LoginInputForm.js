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
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {red, blue, grey,indigo, cyan} from '@material-ui/core/colors'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'


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
            classes,
        } = this.props;
        
        let redirect= <div></div>;
        if(message==='SUCCESS'){
            redirect= <Redirect to="/main" /> ;
        }
       
        return (
            
               <React.Fragment>
                        <div>
                                <Grid container justify="left">
                                <Grid spacing={24} alignItems="center" justify="center" container>
                                   {/*  <Grid item xs={12}>
                                    <Card classNam={classes.card}>
                                        <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={require('./../../images/Microfinancing.jpg')}
                                            title="" 
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="h2"> 
                                            
                                                <Typography gutterBottom variant="body" component="h2">
                                                MICFIN - Digitalizing microfinancing in developing nations!
                                            </Typography>
                                            </Typography>
                                            
                                            <Typography variant="body2" component="p">
                                            Creating digital engagement that empowers customers to get the banking services they need
                                            while doing good for the environment and society.
                                            </Typography>
                                        </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                        <Button size="small" color="secondary">
                                            Learn More
                                        </Button>
                                        </CardActions>
                                    </Card>
                                    </Grid> */}

                                    <Grid item xs={12}>
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
    open:state.login.open,
    message: state.login.message

});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        loginUser,
        notificationOff
    }, dispatch);


//export default withAuthenticator(withStyles(styles)(LoginInputForm));
//export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginInputForm));
export default connect(mapStateToProps, mapDispatchToProps)(LoginInputForm);


