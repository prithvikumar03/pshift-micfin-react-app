import React,{Component} from 'react';
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
      <Box p={0}>{children}</Box>
    </Typography>
  );
}



class DBSMenuTab extends Component {
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
          <LedgerInputForm {...this.props}/>
        </TabPanel>

      </div>
    </BrowserRouter>
  );
  }
}
export default withStyles(styles)(DBSMenuTab);