import PropTypes from 'prop-types';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { RoundedDialog, Button } from './styled';
import content from 'Content';

const DialogComponent = ({ open, onOpen }) => {

  const handleCloseDialog = () => {
    onOpen(false);
  };

  return (
    <RoundedDialog
      open={open}
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
  open: PropTypes.bool,
  onOpen: PropTypes.func
};

export default DialogComponent;