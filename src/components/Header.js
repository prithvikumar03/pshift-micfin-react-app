import React, { Component } from 'react';
import { Container,Navbar, Nav, NavLink,NavbarLink,Button } from 'styled-bootstrap-components';


class Header extends Component {
  render() {
    return (
      <Container fluid>
        <Navbar expandSm dark>
          <Nav start>
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


      </Container>
    );
  }

}

export default Header;
