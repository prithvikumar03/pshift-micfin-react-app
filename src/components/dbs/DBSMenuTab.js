import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Route, Switch, Link, BrowserRouter, } from 'react-router-dom'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import LedgerInputForm from '../ledger/LedgerInputForm';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/styles/withStyles';
import MFIRegistrationInputForm from './../mfi/MFIRegistrationInputForm'
import SearchMFIs from './../mfi/SearchMFIs';
import LoanRepaymentInputForm from './../microentrepreneur/LoanRepaymentInputForm';



/* const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.main,
  },
  div:{
    padding: theme.spacing(2),
},
extradiv:{
    padding: theme.spacing(4),
},
})); */

const styles = theme => ({
  /*  adjustedRoot: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.main,
    marginTop: '15%'
  },  */

})
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (

    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={0} boxShadow={2}>{children}</Box>
    </Typography>
  );
}



class DBSMenuTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  }

  componentWillMount() {
    //alert('component mounted with value '+this.state.value);
    this.handleChange(() => { }, 0);
  }

  render() {
    const { classes } = this.props;

    const { value } = this.state;
    return (
      <BrowserRouter>
        <div className={classes.adjustedRoot}>
          <AppBar position="static" fullWidth>
            <Tabs value={value} onChange={this.handleChange} >
              <Tab label="MFI Registration" component={Link} to="/mfi" />
              <Tab label="Loans" component={Link} to="/loanDisbursement" />
              <Tab label="Search" component={Link} to="/searchMFIs" />
              <Tab label="Payments" component={Link} to="/loanRepayment" />
              <Tab label="Ledger" component={Link} to="/ledger" />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
           {/*  <div className={classes.div}> */}
              <MFIRegistrationInputForm {...this.props} />
          {/*   </div> */}
          </TabPanel>

          <TabPanel value={value} index={1}>
           {/*  <div className={classes.div}> */}
              To be Added
         {/*  </div> */}
          </TabPanel>

          <TabPanel value={value} index={2}>
           {/*  <div className={classes.div}> */}
              <SearchMFIs {...this.props} />
           {/*  </div> */}
          </TabPanel>

          <TabPanel value={value} index={3}>
           {/*  <div className={classes.div}> */}
              <LoanRepaymentInputForm {...this.props} />
           {/*  </div> */}
          </TabPanel>

          <TabPanel value={value} index={4}>
           {/*  <div className={classes.div}> */}
              <LedgerInputForm {...this.props} />
          {/*   </div> */}
          </TabPanel>

        </div>
      </BrowserRouter>
    );
  }
}
export default withStyles(styles)(DBSMenuTab);