import React, { Component } from 'react';
import SideNavBar from '../SideNavBar';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/styles/withStyles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllEntrepreneurs } from '../../actions/MEActions';
import MUIDataTable from 'mui-datatables';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
   /*  root: {
        flexGrow: 1,
        backgroundColor: theme.palette.grey['A500'],
        overflow: 'hidden',
        background: `url(${backgroundShape}) no-repeat`, 
        backgroundSize: 'cover',
        backgroundPosition: '0 400px',
        marginTop: 20,
        padding: 20,
        paddingBottom: 200
    },
    grid: {
        width: 1000
    } */
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
        name: "microEntrepreneurId",
        label: "Microentrepreneur Id",
        options: {
            filter: true,
            sort: true,
        }
    },
   /*  {
        name: "aadhar",
        label: "Aadhar",
        options: {
            filter: true,
            sort: true,
        }
    }, */
    {
        name: "firstName",
        label: "First Name",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "lastName",
        label: "Last Name",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "gender",
        label: "Gender",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "businessStartYear",
        label: "Business Start Year",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "creditScore",
        label: "Credit Score",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "householdIncome",
        label: "Household Income",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "householExp",
        label: "Household Expenses",
        options: {
            filter: true,
            sort: false,
        }
    }
];

const options = {
    filterType: 'checkbox'
};

class SearchEntrepreneurs extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        //alert('mfiID'+this.props.user.mfiId);
        this.props.fetchAllEntrepreneurs(this.props.user.mfiId);
        //this.props.fetchAllEntrepreneurs({"mfiId":"MFI123"});
    }

    onRefreshClick=()=>{
        this.props.fetchAllEntrepreneurs(this.props.user.mfiId);
    }

    render() {
        //const currentPath = this.props.location.pathname
        const { classes } = this.props;
        const {
            microentrepreneurs,
            isLoading,
            error,
        } = this.props;
        console.log('microentrepreneurs ->' + JSON.stringify(microentrepreneurs));

        return (
            <React.Fragment>
                {/* <SideNavBar currentPath={currentPath} /> */}
                <div>
                    <Grid container justify="center">
                        <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
                            <Grid xs={12}>
                            <Typography component="div" variant="body1">    
                             <Box bgcolor="background.main">
                               
                                           {  <MUIDataTable
                                                title={"Microentrepreneurs List"}
                                                data={microentrepreneurs}
                                                columns={columns}
                                                options={options}
                                            /> 
                                            }
                                
                            </Box>   
                            </Typography>
                            </Grid>
                            <Grid xs={12}>
                                <div className={classes.extradiv}>
                                    <Grid container item xs={12} spacing={1} align="center" justify="center" direction="row">
                                    <Grid item xs={6}>
                                        <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        margin="dense"
                                        onClick={this.onRefreshClick}
                                        >
                                        Refresh
                                    </Button>
                                    </Grid>

                                    <Grid item xs={6}>

                                        <Button
                                        variant="contained"
                                        color="primary"
                                        margin="dense"
                                        >
                                        Reset
                                    </Button>
                                    </Grid>
                                    </Grid>
                                </div>

                            </Grid>    
                            
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>

        );
    }


}

const mapStateToProps = state => ({
    mfiId:state.me.mfiId,
    microentrepreneurs: state.me.microentrepreneurs,
    isLoading: state.me.isLoading,
    error: state.me.error,
    user:state.login.user,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        fetchAllEntrepreneurs
    }, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SearchEntrepreneurs));

