import React,{ Component }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Route, Switch, Link, BrowserRouter, } from 'react-router-dom'
import MFIRegistrationInputForm from './MFIRegistrationInputForm'
import SearchEntrepreneurs from './../microentrepreneur/SearchEntrepreneurs';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import LoanRepaymentInputForm from './../microentrepreneur/LoanRepaymentInputForm';
import LedgerInputForm from '../ledger/LedgerInputForm';
import MERegistrationInputForm from './../microentrepreneur/MERegistrationInputForm'

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/styles/withStyles';
import LoanInputForm from '../microentrepreneur/LoanInputForm';



const styles = theme => ({
 
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


class MFIMenuTab extends Component {
  
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
  };
 
  render (){
    const { classes } = this.props;
    
    const {value} =this.state;
    //alert('rendered value '+value);
  return (
    <BrowserRouter>
      <div className={classes.adjustedRoot}>
        <AppBar position="static" fullWidth>
          <Tabs value={value} onChange={this.handleChange} >
            
            <Tab label="Registration" component={Link} to="/microEntrepreneur" />
            <Tab label="Search Entrepreneurs" component={Link} to="/searchEntrepreneurs" />
            <Tab label="Loans" component={Link} to="/loan" />
            <Tab label="Payments" component={Link} to="/loanRepayment" />
            <Tab label="Ledger" component={Link} to="/ledger" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <MERegistrationInputForm {...this.props} /> 
        </TabPanel>

        <TabPanel value={value} index={1}>
          <SearchEntrepreneurs {...this.props}/> 
        </TabPanel>

        <TabPanel value={value} index={2}>
          <LoanInputForm {...this.props}/> 
        </TabPanel>

        <TabPanel value={value} index={3}>
          <LoanRepaymentInputForm {...this.props}/> 
        </TabPanel>

        <TabPanel value={value} index={4}>
          <LedgerInputForm {...this.props}/> 
        </TabPanel>
      </div>

      
    {/*   <Switch>
          <Route exact path='/mfi' component={PageShell(MFIRegistrationInputForm,value, 1)} />
          <Route exact path='/searchEntrepreneurs' component={PageShell(SearchEntrepreneurs,value,2)} />
          <Route exact path='/loanRepayment' component={PageShell(LoanRepaymentInputForm,value,3)} />
          <Route exact path='/mfiTransactions' component={PageShell(SearchTransactionsInputForm,value,4)} />
        </Switch> */}
    </BrowserRouter>
  )
  }

}
export default withStyles(styles)(MFIMenuTab);