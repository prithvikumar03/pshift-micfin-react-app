import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
import withStyles from '@material-ui/styles/withStyles';
 
const styles = theme => ({
    dropzone:{
        position: 'relative',
        width: '75%',
        minHeight: '25px',
        backgroundColor: theme.palette.secondary,
        //border: 'dashed',
        //borderColor: '#C8C8C8',
        cursor: 'pointer',
        //boxSizing: 'border-box',
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
        minWidth: 300,
        padding: 3,
    },
    dropzoneTextStyle: {
        textAlign: 'center'
    },

  })

class Dropzone extends Component{
    

  constructor(props){
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files){
    this.setState({
      files: files
    });
  }
  render(){

    const { classes } = this.props;
    return (
      <DropzoneArea 
        onChange={this.handleChange.bind(this)}
        dropzoneClass={classes.dropzone}
        dropzoneText="Drag/Upload documents"
        />
    )  
  }
} 
 

export default withStyles(styles)(Dropzone);