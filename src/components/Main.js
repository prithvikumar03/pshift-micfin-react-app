import React, { Component } from 'react';
import { Route } from 'react-router';
import { Navbar, Nav, NavbarLink } from 'styled-bootstrap-components';
import {Switch, Link } from 'react-router-dom';
import MFIRegistration from './mfi/MFIRegistration';

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar expandSm light>
          <Nav start collapse expandSm>
            <Link to="/mfi">
              <NavbarLink light active href="#">MFI</NavbarLink>
            </Link>

          </Nav>
        </Navbar>
        
        <Switch>
              <Route path="/mfi" component={MFIRegistration} />
        </Switch>

      </div>);
  }
}

export default Main;
