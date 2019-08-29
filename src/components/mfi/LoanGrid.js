import React, { Component } from 'react';
import SideNavBar from '../SideNavBar';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/styles/withStyles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllEntrepreneurs } from '../../actions/MEActions';
import MUIDataTable from 'mui-datatables';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//import { useStyles } from './../../styles/index';


export default class LoanGrid extends Component{

   
    render(){
    const { classes } = this.props;    

        
    const options = {
        filterType: 'checkbox',
        selectableRows:'single',
        onRowClick:this.props.onRowClick,
        onRowsSelect:this.props.onRowsSelect
    };

    return (
        <React.Fragment>
            <div className={classes.div}>
              {/*   <Card className={classes.card}>
                    <CardContent> */}
                        <Typography component="div" variant="body1"> 

                            {<MUIDataTable
                                title={this.props.title}
                                data={this.props.data}
                                columns={this.props.columns}
                                options={options}
                            />
                            }

                        </Typography> 

                   {/*  </CardContent>
                </Card> */}
            </div>
        </React.Fragment>

    );
};


}
