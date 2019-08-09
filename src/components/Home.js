import React ,{Component} from 'react';
import styled from 'styled-components';


const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: ${props => (props.primary ? 'violet' : 'palevioletred')};
  border: ${props =>
    props.primary ? '2px solid violet' : '2px solid palevioletred'};
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover {
    color: white;
    background-color: ${props =>
      props.primary ? 'violet' : 'palevioletred'};
  }
`;

class Home extends Component{

render(){
  return (
    <div>
  <h1>we are at home  </h1>
  <h1><Button>Click</Button></h1>
  </div>
  );

}
}
export default Home;
