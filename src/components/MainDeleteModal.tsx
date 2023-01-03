/* eslint-disable @typescript-eslint/return-await */
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  DialogActions,
  Typography,
  Grid,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface MainModalProps {
  couponId: string;
  deleteTitle: string;
  deleteOpen: boolean;
  handleDeleteClose: () => void;
  mutateAsync: any;
}

export default function MainDeleteModal({
  couponId,
  deleteTitle,
  deleteOpen,
  handleDeleteClose,
  mutateAsync,
}: MainModalProps) {
  const navigate = useNavigate();

  const onDelete = async () => {
    await mutateAsync({ couponId });
    handleDeleteClose();
    navigate(-1);
  };

  return (
    <Dialog
      sx={{
        '&>div:nth-of-type(3)': {
          '&>div': {
            // background: '#e3f2fd',
            m: 0,
            borderRadius: '4px',
            // width: '450px',
            width: '1200px',
            minHeight: `calc(100vh - 700px)`,
            boxShadow: 24,
            p: 2,
          },
        },
      }}
      open={deleteOpen}
      onClose={handleDeleteClose}
      keepMounted
    >
      <DialogTitle
        sx={{
          borderRadius: '4px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" component="div">
          {deleteTitle}
        </Typography>
        <DialogActions>
          <Button variant="outlined" onClick={handleDeleteClose}>
            취소
          </Button>
          <Button variant="outlined" color="error" onClick={onDelete}>
            삭제
          </Button>
        </DialogActions>
      </DialogTitle>
      <Divider />
      <DialogContent
        sx={{
          mt: 2,
          borderRadius: '4px',
        }}
      >
        <Grid container spacing={3}>
          <Grid
            item
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography>삭제하시겠습니까?</Typography>
            {/* {children} */}
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
