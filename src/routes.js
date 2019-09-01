import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Main from './components/Main'
import ScrollToTop from './components/ScrollTop'
import MEHome from './components/microentrepreneur/MEHome'
import MFIHome from './components/mfi/MFIHome';

export default props => (
    <HashRouter>
        <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ Main } />
          <Route exact path='/mfiHome' component={ MFIHome } />
          <Route exact path='/meHome' component={ MEHome } />
        </Switch>
        </ScrollToTop>
    </HashRouter>
  )