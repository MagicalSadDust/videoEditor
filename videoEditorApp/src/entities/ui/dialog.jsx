import PropTypes from 'prop-types';
import { DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { RoundedDialog, Button } from './styled';

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
      <DialogTitle id="alert-dialog-title">{"Selected range is too long"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          The selected range is longer than 15 seconds. Please use the &#34;Cut&#34; button to reduce the range to 15 seconds or less.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} isPrimary autoFocus>
          OK
        </Button>
      </DialogActions>
  </RoundedDialog>
  );
};

DialogComponent.propTypes = {
  openDialog: PropTypes.bool,
  onOpenDialog: PropTypes.func
};

export default DialogComponent;