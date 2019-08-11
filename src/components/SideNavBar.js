import React, { Component } from 'react';
//import { Button } from 'styled-button-component';
import { Navbar, Nav, NavbarLink } from 'styled-bootstrap-components';
import {Switch,Link} from 'react-router-dom';
import {Route} from 'react-router';
import MFIRegistration from './mfi/MFIRegistration';

class SideNavBar extends Component {
  render() {
    return (
      <div>
      <Navbar expandSm light>
            <Nav start collapse expandSm>
              <Link to="/mfi">
              <NavbarLink light active>MFI</NavbarLink>
              </Link>
            </Nav>
          </Navbar>

          <div>
          <Switch>
          <Route path="/mfi" component={MFIRegistration} />
          </Switch>
          </div>
          </div>
    );
  }

}

export default SideNavBar;
