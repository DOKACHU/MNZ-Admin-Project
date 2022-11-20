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

interface ListTemplateProps {
  loading?: boolean;
  title: string;
  isButton?: boolean;
  handleUpdate?: any;
  updateText?: string;
  cancelText?: string;
  extra?: any;
  children: React.ReactNode;
}

export default function DetailTemplate({
  loading,
  title,
  children,
  handleUpdate,
  isButton,
  updateText,
  cancelText,
  extra,
}: ListTemplateProps) {
  const navigate = useNavigate();

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
                  <Button variant="outlined" onClick={handleUpdate}>
                    {updateText}
                  </Button>
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
  );
}
