import React, { Component } from 'react';
import SideNavBar from '../SideNavBar';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextField } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';
import {registerME} from './../../actions/MEActions';

class MERegistration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            microentrepreneur : null
        };
    }

    componentWillMount(){
        /* this.props.registerME(null); */
    }

    onSubmit = () =>
    {
        alert ('Button clicked');
        this.props.registerME(null);

    }

    render() {
        const currentPath = this.props.location.pathname
        const { classes } = this.props;
        const {
            microentrepreneur,
            isLoading,
            error,
        } = this.props;
        alert ('ME '+JSON.stringify(microentrepreneur));
        return (
            <React.Fragment>
                <SideNavBar currentPath={currentPath} />
                <div>
                <Grid container justify="center">
                                <div>
                                        <TextField id="meId" type="text" name="meId" label="ME Id"  value="hello"  margin="dense"
                                            variant="outlined"
                                        />
                                    </div>

                                    <tr></tr>

                               
                                    <div>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        margin="dense"
                                        onClick={this.onSubmit} 
                                    >
                                        Submit
                                    </Button>
                                    </div>
                          </Grid>      
                </div>
            </React.Fragment>
        );
    }


}

 /* const mapStateToProps = state => ({ 
    microentrepreneur : state.microentrepreneur,
    isLoading: state.isLoading
 }); 
 */

  const mapStateToProps = state => ({ 
   ...state
 });
 
const mapDispatchToProps = dispatch =>
    bindActionCreators({
        registerME
    }, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(MERegistration);

