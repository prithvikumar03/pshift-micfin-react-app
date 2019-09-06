import React, { Component, PureComponent } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
export default class Login extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

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

                        
                            <Grid spacing={24} alignItems="right" justify="center" container>


                                <Grid item xs={6}>

                                    <Typography variant="h5">
                                        Login
                                    </Typography>
                                    <div>
                                        <TextField id="userId" type="text" name="userId" label="User name" variant="outlined" margin="dense" value={values.userID} onChange={handleChange} onBlur={handleBlur} className={errors.name && touched.name ? 'error' : ''} />
                                    </div>
                                    <div>
                                        <TextField id="email" type="email" name="email" label="Email" variant="outlined" margin="dense" value={values.email} onChange={handleChange} onBlur={handleBlur} className={errors.name && touched.name ? 'error' : ''} />
                                    </div>
                                    <div>
                                        <TextField id="password" type="password" name="password" label="Password" variant="outlined" margin="dense" value={values.password} onChange={handleChange} onBlur={handleBlur} className={errors.name && touched.name ? 'error' : ''} />
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

                                </Grid>
                            </Grid>
                        
                    </form>
                </React.Fragment>
            </div>
        );
    }


}




