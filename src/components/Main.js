import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/styles/withStyles';
import { withRouter } from 'react-router-dom';
import SideNavBar from './SideNavBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import { withAuthenticator } from 'aws-amplify-react'

const styles = theme => ({
});
/* const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['100'],
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    paddingBottom: 200
  },
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)'
    }
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  rangeLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(2)
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32
  },
  outlinedButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing(1)
  },
  actionButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing(1),
    width: 152
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: 'center'
  },
  block: {
    padding: theme.spacing(2),
  },
  box: {
    marginBottom: 40,
    height: 65
  },
  inlining: {
    display: 'inline-block',
    marginRight: 10
  },
  buttonBar: {
    display: 'flex'
  },
  alignRight: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  noBorder: {
    borderBottomStyle: 'hidden'
  },
  loadingState: {
    opacity: 0.05
  },
  loadingMessage: {
    position: 'absolute',
    top: '40%',
    left: '40%'
  }
});
 */

class Main extends Component {
  render() {
    let {user}=this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <SideNavBar {...user}></SideNavBar>
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



//export default withRouter(withStyles(styles)(Main));
export default connect(mapStateToProps, null)(withRouter(withStyles(styles)(Main)));