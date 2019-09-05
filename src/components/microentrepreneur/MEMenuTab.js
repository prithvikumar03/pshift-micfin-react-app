import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Route, Switch, Link, BrowserRouter, } from 'react-router-dom'
import MERegistrationInputForm from './MERegistrationInputForm'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import LoanRepaymentInputForm from './LoanRepaymentInputForm';
import SearchTransactionsInputForm from './../mfi/SearchTransactionsInputForm';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.main,
  },
}));
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

const PageShell = (Page, previous) => {
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

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} >
            <Tab label="Registration" component={Link} to="/microEntrepreneur" />
            <Tab label="Loan Repayment" component={Link} to="/loanRepayment" />
            <Tab label="Transactions" component={Link} to="/meTransactions" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <MERegistrationInputForm />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <LoanRepaymentInputForm />
        </TabPanel>


        <TabPanel value={value} index={2}>
          <SearchTransactionsInputForm />
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