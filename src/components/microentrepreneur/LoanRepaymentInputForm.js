import React, { Component } from 'react';
import { Formik } from 'formik';
import LoanRepayment from './LoanRepayment';
import * as Yup from 'yup'
import SideNavBar from '../SideNavBar';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/styles/withStyles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loanRepaymentAction } from '../../actions/LoanRepaymentActions';
import { fetchAllEntrepreneurs } from '../../actions/MEActions';
import CustomizedSnackbars from './../../utils/SnackBar';
import {populateSelect} from './../../utils/Common';


const styles = theme => ({
  /*   grid: {
        width: 1000
    } */
})


const validationSchema = Yup.object({
    /* companyName: Yup.string("")
        .min(8, "Company Name must contain at least 8 characters"),
    directorName: Yup.string("")
        .min(8, "Director Name must contain at least 8 characters"), */
});

class LoanRepaymentInputForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mfiValueOptions:[]
        };
    }

    componentWillMount(){
        //alert("userId"+JSON.stringify(this.props.user));
        //this.props.fetchAllEntrepreneurs({"mfiId":this.props.user.userId});
        //document.getElementById("mfiId").value=this.props.user.userId;
        //alert("microentrepreneurs"+JSON.stringify(this.props.microentrepreneurs));
        let mfiValues=[];
        mfiValues.push(this.props.user.mfiId);
        let mfiOptions=populateSelect(mfiValues)
       // alert('value options'+JSON.stringify(mfiValueOptions));
        //this.setState({mfiValueOptions:`${mfiValueOptions}`})
        this.setState({mfiOptions:mfiOptions})

        //loading the mes
        this.props.fetchAllEntrepreneurs({"mfiId":this.props.user.userId});
       
        alert('mevalues'+JSON.stringify(this.props.microentrepreneurs));
        let meValues=[];
        meValues.push(this.props.microentrepreneurs.map(x=>x.microEntrepreneurId));

        this.setState({meOptions:meValues})


    }

    render() {
        //const currentPath = this.props.location.pathname
        
        const {
            loanRepayment,
            loanRepaymentAction,
            isLoading,
            error,
            
        } = this.props;
        const { classes } = this.props; 
        const selectProps ={mfiOptions:this.state.mfiValueOptions,meOptions:this.state.meOptions};
        return (
            <React.Fragment>
                {/* <SideNavBar currentPath={currentPath} /> */}
                    <CustomizedSnackbars {...this.props} handleClose={this.handleClose} />
                            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
                                 <Grid item xs={12}> 
                                       <Formik
                                        initialValues={loanRepayment}
                                        enableReinitialize
                                        validationSchema={validationSchema}
                                        onSubmit={loanRepaymentAction}

                                        render={
                                            props => <LoanRepayment handleSubmit={this.props.handleSubmit} {...props} {...selectProps}/>}
                                    >
                                    </Formik>
                              </Grid> 
                            </Grid>                     
                
            </React.Fragment>
        );
    }


}

const mapStateToProps = state => ({
    loanRepayment: state.lr.loanRepayment,
    isLoading: state.lr.isLoading,
    error: state.lr.error,
    user:state.login.user,
    microentrepreneurs:state.me.microentrepreneurs
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
       loanRepaymentAction,
       fetchAllEntrepreneurs
    }, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoanRepaymentInputForm));

