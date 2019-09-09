import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Route, Switch, Link, BrowserRouter, } from 'react-router-dom'
import MERegistrationInputForm from './MERegistrationInputForm'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import LoanRepaymentInputForm from './LoanRepaymentInputForm';
import LedgerInputForm from '../ledger/LedgerInputForm';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/styles/withStyles';


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



class MEMenuTab extends Component {
  //const {classes} = props;

  constructor(props) {
    super(props);
    this.state = {
    };
}
handleChange=(event, newValue)=> {
  this.setState({value: newValue});
}

 componentWillMount(){
  //alert('component mounted with value '+this.state.value);
  this.handleChange(()=>{},0);
}

render(){
  const { classes } = this.props;
    
    const {value} =this.state;
  return (
    <BrowserRouter>
      <div className={classes.adjustedRoot}> 
        <AppBar position="static" fullWidth>
          <Tabs value={value} onChange={this.handleChange} >
            <Tab label="Registration" component={Link} to="/microEntrepreneur" />
            <Tab label="Loan Repayment" component={Link} to="/loanRepayment" />
            <Tab label="Ledger" component={Link} to="/ledger" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
        
          <MERegistrationInputForm {...this.props} /> 
        </TabPanel>

        <TabPanel value={value} index={1}>
          <LoanRepaymentInputForm  {...this.props}/> 
        </TabPanel>


        <TabPanel value={value} index={2}>
              <LedgerInputForm {...this.props}/> 
        </TabPanel>

        {/* <Switch>
          <Route exact path='/microEntrepreneur' component={MERegistrationInputForm} />
          <Route exact path='/loanRepayment' component={PageShell(LoanRepaymentInputForm)} />
          <Route exact path='/meTransactions' component={PageShell(SearchTransactionsInputForm)} />
        </Switch> */}
      </div>
    </BrowserRouter>
  );
      }
}

export default withStyles(styles)(MEMenuTab);