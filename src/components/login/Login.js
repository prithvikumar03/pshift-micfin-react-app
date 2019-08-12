import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

export default class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {};
      }
     

    componentDidMount(){
       
    }

    onSubmit = ()=>{
        this.props.handleSubmitParent();
    }

    render(){
       
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                              <Container maxWidth="lg">
                              <h1>Login</h1>
                              <div>
                              <TextField id="email" type="email" name="email" label="Email" />
                              </div>
                              <div>
                              <TextField id="password" type="password" name="password" label="Password" />
                              </div>
                              <div></div>
                              <div>
                              <Button
                                  type="submit"
                                  variant="outlined"
                                  color="primary"
                              >
                                  Submit
                              </Button>
                              </div>
                              </Container>
                          </form>
                
            </div>
          );
    }

    
}




