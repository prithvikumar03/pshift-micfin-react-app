import React,{ Component }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Route, Switch, Link, BrowserRouter, } from 'react-router-dom'
import MFIRegistrationInputForm from './MFIRegistrationInputForm'
import SearchEntrepreneurs from './../microentrepreneur/SearchEntrepreneurs';
import Home from './Home.js';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import LoanRepaymentInputForm from './../microentrepreneur/LoanRepaymentInputForm';
import SearchTransactionsInputForm from './SearchTransactionsInputForm';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/styles/withStyles';

/* 
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.main,
  },
})); */


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.main,
  },
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
      <Box p={0}>{children}</Box>
    </Typography>
  );
}


const PageShell = (Page, value, index) => {
  
  return props => (
    <div className="page">
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={600}
        transitionName={props.match.path === "/mfi" ? "SlideIn" : "SlideOut"}
      >
        {console.log(props)}
      <Page {...props} />  
 
      </ReactCSSTransitionGroup>
    </div>
  );
};

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
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange} fullWidth>
            
            <Tab label="Registration" component={Link} to="/mfi" />
            <Tab label="Search Entrepreneurs" component={Link} to="/searchEntrepreneurs" />
            <Tab label="Loan Repayment" component={Link} to="/loanRepayment" />
            <Tab label="Transactions" component={Link} to="/mfiTransactions" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <MFIRegistrationInputForm/> 
        </TabPanel>

        <TabPanel value={value} index={1}>
          <SearchEntrepreneurs/> 
        </TabPanel>


        <TabPanel value={value} index={2}>
          <LoanRepaymentInputForm/> 
        </TabPanel>

        <TabPanel value={value} index={3}>
          <SearchTransactionsInputForm/> 
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