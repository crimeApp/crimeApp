import { React, PropTypes } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';

import Grid from '@material-ui/core/Grid';

import "./Dialog.css";

export default function ConfirmationDialog(props) {
  const { title, text, buttonText, open, handleClose } = props;

  return (
    <div>
      <Dialog aria-labelledby="simple-dialog-title" open={open}>

        <DialogTitle classname="MuiDialogTitle-root" id="alert-dialog-title">{title}</DialogTitle>

        <Divider variant="middle" color="primary" />

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Grid 
            className="MuiDialog-paper"
            container 
            direction="row" 
            justify="center"
            alignItems="center">

            <Button onClick={handleClose}
              color="primary"
              variant="contained"
              size="medium"
              autoFocus
              className="MuiButton-root">
              {buttonText}
            </Button>
          </Grid>

        </DialogActions>
      </Dialog>
    </div>
  );
}
