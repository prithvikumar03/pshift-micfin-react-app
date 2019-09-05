import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Route, Switch, Link, BrowserRouter, } from 'react-router-dom'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import SearchTransactionsInputForm from '../mfi/SearchTransactionsInputForm';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(theme => ({
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
            <Tab label="MFI Approval" component={Link} to="/mfiApproval" />
            <Tab label="Loan Disbursement" component={Link} to="/loanDisbursement" />
            <Tab label="Transactions" component={Link} to="/meTransactions" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <div className={classes.div}>
          To be Added
          </div>
        </TabPanel>

        <TabPanel value={value} index={1}>
        <div className={classes.div}>
          To be Added
          </div>
        </TabPanel>


        <TabPanel value={value} index={2}>
          <SearchTransactionsInputForm />
        </TabPanel>

      </div>
    </BrowserRouter>
  );

}