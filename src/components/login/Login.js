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

            <React.Fragment>
                <form onSubmit={handleSubmit}>
                              <Container maxWidth="lg">
                              <h1>MICFIN Login</h1>
                              <div>
                              <TextField id="userId" type="text" name="userId" label="User name" variant="outlined" value={values.userID} onChange={handleChange} onBlur={handleBlur} className={errors.name && touched.name ? 'error' : ''} />
                              </div>
                              <div>
                              <TextField id="email" type="email" name="email" label="Email" variant="outlined" value={values.email} onChange={handleChange} onBlur={handleBlur} className={errors.name && touched.name ? 'error' : ''} />
                              </div>
                              <div>
                              <TextField id="password" type="password" name="password" label="Password" variant="outlined" value={values.password} onChange={handleChange} onBlur={handleBlur} className={errors.name && touched.name ? 'error' : ''}/>
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
                          </React.Fragment>
            </div>
          );
    }

    
}




