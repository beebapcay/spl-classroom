import React from 'react';
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

const AddClassDialog = ({ isOpen, onClose, onCancel, onConfirm, ...props }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const defaultValues = {
    name: '',
    section: '',
    subject: '',
    room: '',
  };

  const onSubmit = async (data) => {
    reset(defaultValues);
    onClose();
    data.background = backgrounds[_.random(0, backgrounds.length - 1)];
    await classApi.createClass(data).then((status) => {
      console.log(status);
      if (status === 201) {
        onConfirm();
      }
    });
  };

  const handleCancel = () => {
    reset(defaultValues);
    onClose();
  };

  const handleConfirm = handleSubmit(onSubmit);

  return (
    <Dialog open={isOpen} onClose={handleCancel}>
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
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleConfirm}>Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddClassDialog;
