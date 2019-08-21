import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Main from './components/Main'
import MFIRegistrationInputForm from './components/mfi/MFIRegistrationInputForm'
import ScrollToTop from './components/ScrollTop'
import Home from './components/mfi/Home';
import SearchMEntrepreneurs from './components/microentrepreneur/SearchMEntrepreneurs';
import MERegistration from './components/microentrepreneur/MERegistration';

export default props => (
    <HashRouter>
        <ScrollToTop>
        <Switch>
          
          <Route exact path='/' component={ Main } />
          <Route exact path='/home' component={ Home } />
          <Route exact path='/mfi' component={ MFIRegistrationInputForm } />
          <Route exact path='/searchMEs' component={ SearchMEntrepreneurs } />
          <Route exact path='/microEntrepreneur' component={ MERegistration } />
          
        </Switch>
        </ScrollToTop>
    </HashRouter>
  )