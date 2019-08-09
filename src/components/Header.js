import React, { Component } from 'react';
import theme from 'styled-theming';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components'
// define background colours for `mode` theme
const backgroundColor = theme('mode', {
  light: '#fafafa',
  dark: '#222'
});
// define text color for `mode` theme
const textColor = theme('mode', {
  light: '#000',
  dark: '#fff'
});
// apply theming to a styled component
const Wrapper = styled.div`
  background-color: ${backgroundColor};
  color: ${textColor}
`;

class Header extends Component {
  render() {
    return (
         <ThemeProvider theme={{ mode: 'dark' }}>
            <Wrapper>
                 Hello World
            </Wrapper>
        </ThemeProvider>

    );
  }

}

export default Header;
