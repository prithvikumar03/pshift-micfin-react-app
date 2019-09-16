import React ,{Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends Component {
  
  handleClose=()=>{
      this.props.onCloseDialog();
  }

  render(){
    let {classes}=this.props
  return (
    <div>
        <Dialog open={this.props.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">SignUp</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To login to this website, please use the following user accounts.Password is the same as userId
            <li>DBS User: DBSXXX   Ex:DBS123</li>
            <li>MFI User: MFIXXX   Ex:MFIPKP</li>
            <li>MicroEntrepreneur User: MEXXX   Ex:ME123</li>
          </DialogContentText>
         
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary" variant="contained" margin="dense">
            Close
          </Button>
         
        </DialogActions>
      </Dialog>
    </div>
  )
  }
}
