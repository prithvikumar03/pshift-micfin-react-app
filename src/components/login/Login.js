import React, { Component, PureComponent } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
export default class Login extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
    }

    onReset=()=>{
        document.forms[0].reset(); 
    }

    render() {

        const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            classes,
        } = this.props;

        
        return (
            <div>

                <React.Fragment>
                    <form name="LoginForm" onSubmit={handleSubmit}>
                        <Grid alignItems="center" justify="flex-end" container>
                            <Grid item>
                                <Card className={classes.card}>
                                    <Typography variant="h6">
                                        <Grid container alignItems="center" justify="left" direction="row">
                                            <Grid item xs={6}>
                                               
                                       {/*  </Grid>
                                            <Grid item xs={6}> */}
                                                <img src={require('./../../images/LoginIcon.png')} alt="Login" />
                                                &nbsp;&nbsp;Login
                                            </Grid>
                                        </Grid>
                                        <Divider variant="fullWidth" className={classes.divider} />
                                    </Typography>
                                    <CardContent>
                                        <div>
                                            <TextField id="userId" required type="text" name="userId" label="User name" variant="outlined" margin="dense" value={values.userID} onChange={handleChange} onBlur={handleBlur} className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <TextField id="password" required type="password" name="password" label="Password" variant="outlined" margin="dense" value={values.password} onChange={handleChange} onBlur={handleBlur} className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true
                                                }} />
                                        </div>
                                        {/*   <div>
                                        <TextField id="email" type="email" name="email" label="Email" variant="outlined" margin="dense" value={values.email} onChange={handleChange} onBlur={handleBlur} className = { classes.textField }
                                        InputLabelProps={{
                                            shrink: true
                                          }} />
                                    </div>  */}
                                        <div></div>
                                        <div>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                margin="dense"
                                            >
                                                Submit
                                            </Button>
                                            &nbsp;&nbsp;
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                margin="dense"
                                                onClick={this.onReset}
                                            >
                                                Reset
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                    </form>
                </React.Fragment>
            </div>
        );
    }


}




