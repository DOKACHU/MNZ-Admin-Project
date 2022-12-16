/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/require-default-props */
import React from 'react';
import {
  Box,
  Card,
  Grid,
  Typography,
  Button,
  CircularProgress,
} from '@mui/material';
import { MainModal } from '../components';
import { useModal } from '../hooks';

interface ListTemplateProps {
  loading?: boolean;
  title: string;
  isButton?: boolean;
  onSubmit?: any;
  children: React.ReactNode;
  createModalForm?: any;
}

export default function ListTemplate({
  loading,
  title,
  children,
  isButton,
  onSubmit,
  createModalForm,
}: ListTemplateProps) {
  const { open, handleOpen } = useModal();
  const modalTitle = `${title} 생성 모달`;

  return (
    <>
      <MainModal
        open={open}
        handleClose={handleOpen}
        handleCreate={onSubmit}
        title={modalTitle}
      >
        {createModalForm}
      </MainModal>
      <Box
        sx={{
          padding: 3,
        }}
      >
        <Card
          sx={{
            marginTop: 3,
            marginBottom: 3,
          }}
          elevation={0}
        >
          <Box
            sx={{
              p: 2,
              pl: 2,
            }}
          >
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              spacing={1}
            >
              <Grid item>
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  {`${title} 관리`}
                </Typography>
              </Grid>
              {isButton && (
                <Grid item>
                  <Button variant="outlined" onClick={handleOpen}>
                    {modalTitle}
                  </Button>
                </Grid>
              )}
            </Grid>
          </Box>
        </Card>
        {children}
      </Box>
    </>
  );
}
