import React, { Component } from 'react';
import SideNavBar from '../SideNavBar';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/styles/withStyles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMFI } from '../../actions/MFIActions';
import MUIDataTable from 'mui-datatables';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
//import { useStyles } from '../styles/index';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
     root: {
        flexGrow: 1,
        //backgroundColor: theme.palette.grey['A500'],
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundPosition: '0 400px',
        marginTop: 20,
        padding: 20,
        paddingBottom: 200 
    },
    /*    grid: {
        width: 1000
    }  */
})

const columns = [
    {
        name: "mfiId",
        label: "MFI Id",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "companyName",
        label: "Company Name",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "directorName",
        label: "Director Name",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "netFundsOwned",
        label: "Net Funds Owned",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "govtRegistrationNumber",
        label: "Govt Registration Number",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "anyCasePendingInCourt",
        label: "Pending Case in Court",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "borrowedFromBanks",
        label: "Borrowed From Banks",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "operating",
        label: "Is Operating",
        options: {
            filter: true,
            sort: false,
        }
    },
];

const options = {
    filterType: 'checkbox'
};

class SearchMFIs extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
       // alert('mfiID'+this.props.user.mfiId);
        this.props.fetchMFI();
       
    }

    render() {
        //const currentPath = this.props.location.pathname
        const { classes } = this.props;
        const {
            MFIs,
            isLoading,
            error,
        } = this.props;
        console.log('mfis ->' + JSON.stringify(MFIs));

        return (
            <React.Fragment>
                {/* <SideNavBar currentPath={currentPath} /> */}
            
                    <Grid container justify="center">
                        <Grid alignItems="center" justify="center" container className={classes.grid} xs={12}>
                            <Grid item xs={12}>
                                    {/* <Typography component="div" variant="body1">    
                                    <Box bgcolor="background.main"> */}
                                    
                                                {  <MUIDataTable
                                                        title={"Registered Micro Financial Institutions"}
                                                        data={MFIs}
                                                        columns={columns}
                                                        options={options}
                                                    /> 
                                                    }
                                        
                                   {/*  </Box>   
                                    </Typography> */}
                            </Grid>
                        </Grid>
                    </Grid>
                
            </React.Fragment>

        );
    }


}

const mapStateToProps = state => ({
    //mfiId:state.me.mfiId,
    MFIs: state.mfi.MFIs,
    isLoading: state.mfi.isLoading,
    error: state.mfi.error,
    user:state.login.user,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
    fetchMFI
    }, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SearchMFIs));

