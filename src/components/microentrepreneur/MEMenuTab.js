import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Route, Switch, Link,BrowserRouter,  } from 'react-router-dom'
import MERegistrationInputForm from './MERegistrationInputForm'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import LoanRepaymentInputForm from './LoanRepaymentInputForm';
import SearchTransactionsInputForm from './../mfi/SearchTransactionsInputForm';


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
                <Tabs value={value} onChange={handleChange} >
                    <Tab label="Registration" component={Link} to="/microEntrepreneur" />
                    <Tab label="Loan Repayment" component={Link}  to="/loanRepayment" />
                    <Tab label="Transactions" component={Link} to="/meTransactions" />
                </Tabs>
            </AppBar>
          
            <Switch>
                <Route exact path='/microEntrepreneur' component={ MERegistrationInputForm } />
                <Route exact path='/loanRepayment' component={ PageShell(LoanRepaymentInputForm) } />
                <Route exact path='/meTransactions' component={ PageShell(SearchTransactionsInputForm)} />
            </Switch>
        </div>
        </BrowserRouter>
    );

}