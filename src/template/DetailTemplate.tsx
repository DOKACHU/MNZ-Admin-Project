/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/require-default-props */
import React, { Suspense } from 'react';
import {
  Box,
  Card,
  Grid,
  Typography,
  Button,
  CircularProgress,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { MainUpdateModal } from '../components';
import { useModal } from '../hooks';

interface ListTemplateProps {
  loading?: boolean;
  title: string;
  isButton?: boolean;
  onUpadate?: any;
  onDelete?: any;
  updateText?: string;
  cancelText?: string;
  deleteText?: string;
  extra?: any;
  children: React.ReactNode;
  onSubmit?: any;
  updateInfo?: any;
  setUpdateInfo?: any;
  updateModalForm?: any;
}

export default function DetailTemplate({
  loading,
  title,
  children,
  onUpadate,
  isButton,
  updateText,
  deleteText,
  cancelText,
  onSubmit,
  onDelete,
  extra,
  updateInfo,
  setUpdateInfo,
  updateModalForm,
}: ListTemplateProps) {
  const navigate = useNavigate();
  const { open, handleOpen, handleModalClose } = useModal();
  const modalTitle = `${title} 수정 모달`;

  if (loading) {
    return (
      <Box
        sx={{
          height: '100%',
          padding: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  return (
    <>
      <MainUpdateModal
        open={open}
        handleClose={handleModalClose}
        handleUpdate={onSubmit}
        title={modalTitle}
        setUpdateInfo={setUpdateInfo}
        updateInfo={updateInfo}
      >
        {updateModalForm}
      </MainUpdateModal>

      <Box
        sx={{
          padding: 3,
        }}
      >
        <Suspense fallback={<CircularProgress />}>
          {/* <Card elevation={0}>asdf</Card> */}
          <Card
            elevation={0}
            sx={{
              marginTop: 3,
              marginBottom: 3,
            }}
          >
            <Box
              sx={{
                p: 2,
                pl: 2,
              }}
            >
              <Grid
                container
                xs={12}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={1}
              >
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Button size="small" onClick={() => navigate(-1)}>
                    <ArrowBack />
                  </Button>
                  <Typography variant="h6" sx={{ fontWeight: 500 }}>
                    {title || ''}
                  </Typography>
                  {extra}
                </Grid>
                {isButton && (
                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Button variant="outlined" onClick={handleOpen}>
                      {updateText}
                    </Button>
                    {deleteText && (
                      <Button
                        sx={{
                          marginLeft: '10px',
                        }}
                        variant="outlined"
                        color="error"
                        onClick={onDelete}
                      >
                        {deleteText}
                      </Button>
                    )}

                    {/* <Button
                    color="secondary"
                    sx={{
                      marginLeft: '10px',
                    }}
                    onClick={() => navigate(-1)}
                  >
                    {cancelText}
                  </Button> */}
                  </Grid>
                )}
              </Grid>
            </Box>
          </Card>
          {children}
        </Suspense>
      </Box>
    </>
  );
}
