import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

export default class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {};
      }
   
    render(){

        const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          } = this.props;
       
        return (
            <div>
                <form onSubmit={handleSubmit}>
                              <Container maxWidth="lg">
                              <h1>Login</h1>
                              <div>
                              <TextField id="email" type="email" name="email" label="Email" variant="outlined" value={values.name} onChange={handleChange} onBlur={handleBlur} className={errors.name && touched.name ? 'error' : ''} />
                              </div>
                              <div>
                              <TextField id="password" type="password" name="password" label="Password" variant="outlined" value={values.name} onChange={handleChange} onBlur={handleBlur} className={errors.name && touched.name ? 'error' : ''}/>
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




