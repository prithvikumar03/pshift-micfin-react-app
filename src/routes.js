import React,{ Component } from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Main from './components/Main'
import App from './App'
import ScrollToTop from './components/ScrollTop'
import MEHome from './components/microentrepreneur/MEHome'
import MFIHome from './components/mfi/MFIHome';
import DBSHome from './components/dbs/DBSHome';
import LoginInputForm from './components/login/LoginInputForm';
import Training from './components/common/Training';
import Support from './components/common/Support';
import Home from './components/common/Home';
import withStyles from '@material-ui/styles/withStyles';

const styles = theme => ({

})


class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {};
}

  render() {
    
    return (
      <HashRouter>
        <ScrollToTop>
          <Switch>
            {/* <Route exact path='/' component={ Main } /> */}
  {/*           <Route exact path='/' component={LoginInputForm} {...this.props}/> */}
            {/* this is mainly to pass the props (in this case 'styles' from the root component) */}
            <Route exact path='/' render={(routeProps) => <LoginInputForm {...routeProps} {...this.props}/>}/>
            <Route exact path='/logout' render={(routeProps) => <LoginInputForm {...routeProps} {...this.props}/>}/>
            <Route exact path='/home' render={(routeProps) => <Home {...routeProps} {...this.props}/>} />
            <Route exact path='/main' render={(routeProps) => <Main {...routeProps} {...this.props}/>}/>
            <Route exact path='/dbsHome' render={(routeProps) => <DBSHome {...routeProps} {...this.props}/>}/>
            <Route exact path='/mfiHome' render={(routeProps) => <MFIHome {...routeProps} {...this.props}/>} />
            <Route exact path='/meHome' render={(routeProps) => <MEHome {...routeProps} {...this.props}/>} />
            <Route exact path='/training' render={(routeProps) => <Training {...routeProps} {...this.props}/>}/>
            <Route exact path='/support' render={(routeProps) => <Support {...routeProps} {...this.props}/>}/>
           {/*  <Route exact path='/home' component={Home} />
            <Route exact path='/main' component={Main} />
            <Route exact path='/dbsHome' component={DBSHome} />
            <Route exact path='/mfiHome' component={MFIHome} />
            <Route exact path='/meHome' component={MEHome} />
            <Route exact path='/training' component={Training} />
            <Route exact path='/support' component={Support} /> */}
          </Switch>
        </ScrollToTop>
      </HashRouter>
    );
  }

}
export default withStyles(styles)(Router)