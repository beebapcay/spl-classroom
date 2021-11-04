import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { classApi } from '../../api';
import { useForm } from 'react-hook-form';
import { backgrounds } from '../../configs/default';
import _ from 'lodash';

const CreateClassDialog = ({ open, onClose, onCancel, onConfirm, onClassCreated, ...props }) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    reset();
  }, [open]);

  const onSubmit = async (data) => {
    onClose();
    data.background = backgrounds[_.random(0, backgrounds.length - 1)];
    await classApi.createClass(data).then((status) => {
      console.log(status);
      if (status === 201) {
        onClassCreated();
      }
    });
  };

  const handleConfirm = handleSubmit(onSubmit);

  return (
    <Dialog open={open} onClose={onClose} {...props}>
      <DialogTitle>Create Class</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="class-name"
          label="Class name (require)"
          type="text"
          fullWidth
          variant="standard"
          {...register('name', { required: true })}
        />

        <TextField
          margin="dense"
          id="class-section"
          label="Section"
          type="text"
          fullWidth
          variant="standard"
          {...register('section')}
        />

        <TextField
          margin="dense"
          id="class-topic"
          label="Topic"
          type="text"
          fullWidth
          variant="standard"
          {...register('topic')}
        />

        <TextField
          margin="dense"
          id="class-room"
          label="Room"
          type="text"
          fullWidth
          variant="standard"
          {...register('room')}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleConfirm}>Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateClassDialog;
