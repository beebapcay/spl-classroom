import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const AddClassDialog = ({ isOpen, onClose, onCancel, onConfirm, ...props }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Create Class</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="class-name"
          label="Class name"
          type="text"
          fullWidth
          variant="standard"
        />

        <TextField
          autoFocus
          margin="dense"
          id="class-part"
          label="Class part"
          type="text"
          fullWidth
          variant="standard"
        />

        <TextField
          autoFocus
          margin="dense"
          id="class-topic"
          label="Class topic"
          type="text"
          fullWidth
          variant="standard"
        />

        <TextField
          autoFocus
          margin="dense"
          id="class-room"
          label="Class room"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose}>Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddClassDialog;
