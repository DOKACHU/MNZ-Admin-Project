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

interface MainModalProps {
  title: string;
  open: boolean;
  children: React.ReactNode;
  handleCreate?: any;
  handleClose?: any;
  setUpdateInfo?: any;
  updateInfo?: any;
}

export default function MainUpdateModal({
  title,
  open,
  children,
  handleCreate,
  handleClose,
  setUpdateInfo,
  updateInfo,
}: MainModalProps) {
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
      open={open}
      onClose={handleClose}
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
          {title}
        </Typography>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={() => {
              handleCreate();
              handleClose();
            }}
          >
            수정
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              handleClose();
              setUpdateInfo(updateInfo);
            }}
          >
            취소
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
          {children}
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
