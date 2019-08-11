import React, { Component } from 'react';
import { Navbar, Nav, NavbarLink,Button } from 'styled-bootstrap-components';
  

class Header extends Component {
  render() {
    return (
      
        <Navbar expandSm dark>
          <Nav start>
            {/* <LogoRenderer>hello</LogoRenderer> */}
            <NavbarLink dark brand active href="#">MICFIN</NavbarLink>
            <NavbarLink dark active href="#">MicroFinancing Dealer Platform</NavbarLink>
            <Nav end>
              <Button
                dark
                outline
                toggleCollapse
                expandSm
                onClick={() => this.handleOpenCloseNav()}
              >
                <span>&#9776;</span>
              </Button>
            </Nav>
          </Nav>
          <Nav end collapse expandSm>
            <NavbarLink dark active href="#">Search</NavbarLink>
            <NavbarLink dark href="#">Contact</NavbarLink>
            <NavbarLink dark href="#">About Us</NavbarLink>
            <Button info active sm>Login</Button>
          </Nav>
        </Navbar>


      
    );
  }

}

export default Header;
