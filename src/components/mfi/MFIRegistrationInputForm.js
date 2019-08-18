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
import { fetchMFI } from './../../actions/MFIActions';


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
    firstName: Yup.string("")
        .min(8, "firstName must contain at least 8 characters")
        .required("Enter your firstName")
});

class MFIRegistrationInputForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    //invokes rest API
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

    render() {
        const currentPath = this.props.location.pathname
        const { classes } = this.props;
        const {
            fetchMFI,
            isLoading,
            error,
          } = this.props;
      
        return (
            <React.Fragment>
                <SideNavBar currentPath={currentPath} />
                <div>
                    <div className={classes.root}>
                        <Grid container justify="center">
                            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
                                <Grid item xs={12}>
                                    <Formik
                                        initialValues={{ firstName: '' }}
                                       /*  validationSchema={validationSchema} */
                                       /*  onSubmit={(values, { setSubmitting }) => {
                                            this.registerMFI(values);
                                            
                                        }} */
                                         onSubmit={fetchMFI} 

                                        render={
                                            props => <MFIRegistration handleSubmit={this.props.handleSubmit} {...props} />}
                                    >
                                    </Formik>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </React.Fragment>
        );
    }


}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        fetchMFI
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MFIRegistrationInputForm));

