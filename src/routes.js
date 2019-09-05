import React from 'react'
import { Route, HashRouter, Switch} from 'react-router-dom'
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

export default props => (
    <HashRouter>
        <ScrollToTop>
        <Switch>
          {/* <Route exact path='/' component={ Main } /> */}
          <Route exact path='/' component={ LoginInputForm} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/main' component={Main} />
          <Route exact path='/dbsHome' component={DBSHome} />
          <Route exact path='/mfiHome' component={ MFIHome } />
          <Route exact path='/meHome' component={ MEHome } />
          <Route exact path='/training' component={ Training } />
          <Route exact path='/support' component={ Support } />
        </Switch>
        </ScrollToTop>
    </HashRouter>
  )