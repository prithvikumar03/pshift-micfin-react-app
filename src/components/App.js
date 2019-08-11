import React, { Component } from 'react';
import Header from './Header';
//import SideNavBar from './SideNavBar';
import Main from './Main';
import { Container } from 'styled-container-component';
//import {Table ,TableRow,TableBody,TableCell,TableHead }from '@kiwicom/orbit-components';



class App extends Component {

  componentWillMount() {
  }

  render() {

    return (
      <Container fluid>
            <div><Header></Header></div>
          <div>
            {/* <div><SideNavBar></SideNavBar></div> */}
            <div><Main></Main></div>
          </div>

      </Container>

    );
  }
}

export default App;
