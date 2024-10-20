import PropTypes from 'prop-types';
import { DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { RoundedDialog, Button } from './styled';
import content from 'Content';

const DialogComponent = ({ openDialog, onOpenDialog }) => {

  const handleCloseDialog = () => {
    onOpenDialog(false);
  };

  return (
    <RoundedDialog
      open={openDialog}
      onClose={handleCloseDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{content.dialog.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{content.dialog.message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} isPrimary autoFocus>{content.dialog.buttonText}</Button>
      </DialogActions>
  </RoundedDialog>
  );
};

DialogComponent.propTypes = {
  openDialog: PropTypes.bool,
  onOpenDialog: PropTypes.func
};

export default DialogComponent;