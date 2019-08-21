import React, { Component } from 'react';
import { Formik } from 'formik';
import SideNavBar from '../SideNavBar';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/styles/withStyles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registerMFI } from '../../actions/MFIActions';


const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.grey['A500'],
      overflow: 'hidden',
      /* background: `url(${backgroundShape}) no-repeat`, */
      backgroundSize: 'cover',
      backgroundPosition: '0 400px',
      marginTop: 20,
      padding: 20,
      paddingBottom: 200
    },
    grid: {
      width: 1000
    }
  })

class SearchMEntrepreneurs extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const currentPath = this.props.location.pathname
        const { classes } = this.props;
        const {
            isLoading,
            error,
          } = this.props;
      
        return (
            <React.Fragment>
                <SideNavBar currentPath={currentPath} />
                <div>
                    <div className={classes.root}>
                        <Grid container justify="center">
                            <Grid spacing={10} alignItems="center" justify="center" container className={classes.grid}>
                                <Grid item xs={12}>
                                    {/* <Formik
                                        initialValues={initialState}
                                         validationSchema={validationSchema} 
                                      
                                        onSubmit={registerMFI}  

                                        render={
                                            props => <MFIRegistration handleSubmit={this.props.handleSubmit} {...props} />}
                                    >
                                    </Formik> */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </React.Fragment>
        );
    }


}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        registerMFI
    }, dispatch);
    


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SearchMEntrepreneurs));
