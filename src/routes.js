import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Main from './components/Main'
import MFIRegistrationInputForm from './components/mfi/MFIRegistrationInputForm'
import ScrollToTop from './components/ScrollTop'
import Home from './components/mfi/Home';
import SearchEntrepreneurs from './components/microentrepreneur/SearchEntrepreneurs';
import MERegistrationInputForm from './components/microentrepreneur/MERegistrationInputForm';
import LoanRepaymentInputForm from './components/microentrepreneur/LoanRepaymentInputForm';
import SearchTransactionsInputForm from './components/mfi/SearchTransactionsInputForm';

export default props => (
    <HashRouter>
        <ScrollToTop>
        <Switch>
          
          <Route exact path='/' component={ Main } />
          <Route exact path='/home' component={ Home } />
          <Route exact path='/mfi' component={ MFIRegistrationInputForm } />
          <Route exact path='/searchEntrepreneurs' component={ SearchEntrepreneurs } />
          <Route exact path='/microEntrepreneur' component={ MERegistrationInputForm } />
          <Route exact path='/loanRepayment' component={ LoanRepaymentInputForm } />
          <Route exact path='/mfiTransactions' component={ SearchTransactionsInputForm } />
          
        </Switch>
        </ScrollToTop>
    </HashRouter>
  )