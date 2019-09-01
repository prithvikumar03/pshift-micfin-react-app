import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Route, Switch, Link,BrowserRouter,  } from 'react-router-dom'
import MFIRegistrationInputForm from './MFIRegistrationInputForm'
import SearchEntrepreneurs from '../microentrepreneur/SearchEntrepreneurs';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import LoanRepaymentInputForm from '../microentrepreneur/LoanRepaymentInputForm';
import SearchTransactionsInputForm from './SearchTransactionsInputForm';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.main,
    },
}));

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
                <Tabs value={value} onChange={handleChange}  fullWidth>
                    <Tab label="Registration" component={Link} to="/mfi" />
                    <Tab label="Search Entrepreneurs" component={Link}  to="/searchEntrepreneurs" />
                    <Tab label="Loan Repayment (ME)" component={Link}  to="/loanRepayment" />
                    <Tab label="Transactions" component={Link} to="/mfiTransactions" />
                </Tabs>
            </AppBar>
          
            <Switch>
                <Route exact path='/mfi' component={PageShell(MFIRegistrationInputForm)} /> 
                <Route exact path='/searchEntrepreneurs' component={PageShell(SearchEntrepreneurs)} /> 
                <Route exact path='/loanRepayment' component={ PageShell(LoanRepaymentInputForm) } />
                <Route exact path='/mfiTransactions' component={ PageShell(SearchTransactionsInputForm)} />
            </Switch>
        </div>
        </BrowserRouter>
    );

}