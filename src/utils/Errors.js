import React, {Component} from 'react';

import { amber, green } from '@material-ui/core/colors';

import WarningIcon from '@material-ui/icons/Warning';

import withStyles from '@material-ui/styles/withStyles';



const styles = theme => ({

})


class Errors extends Component {
  render(){

    const { classes } = this.props;
    return (
        <div className={classes.error}>
        
           {this.props.error}         
         
        </div>
      );
  }
 
}

export default withStyles(styles)(Errors);