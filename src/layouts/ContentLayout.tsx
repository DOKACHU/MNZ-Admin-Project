import React from 'react';

import { Box, Card, Grid, Typography, Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
  isButton?: boolean;
  isBackButton?: boolean;
  handleOpen?: () => void;
  handleDeleteOpen?: () => void;
  isUpdateButton?: boolean;
  isDeleteButton?: boolean;
};

export default function ContentLayout({
  children,
  title,
  isButton,
  handleOpen,
  handleDeleteOpen,
  isBackButton,
  isUpdateButton,
  isDeleteButton,
}: ContentLayoutProps) {
  const modalTitle = `${title} 생성 모달`;
  const updateModalTitle = `${title} 수정 모달`;
  const deleteModalTitle = `${title} 삭제 모달`;
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <Card elevation={0}>
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
              <Box
                sx={{
                  display: 'flex',
                }}
              >
                {isBackButton && (
                  <Button size="small" onClick={() => navigate(-1)}>
                    <ArrowBack />
                  </Button>
                )}
                <Typography variant="h5" sx={{ fontWeight: 500 }}>
                  {`${title}`}
                </Typography>
              </Box>
            </Grid>

            <Grid item>
              {isButton && (
                <Button variant="outlined" onClick={handleOpen}>
                  {modalTitle}
                </Button>
              )}
              {isUpdateButton && (
                <Button variant="outlined" onClick={handleOpen}>
                  {updateModalTitle}
                </Button>
              )}
              {isDeleteButton && (
                <Button
                  variant="outlined"
                  color="error"
                  sx={{
                    ml: 2,
                  }}
                  onClick={handleDeleteOpen}
                >
                  {deleteModalTitle}
                </Button>
              )}
            </Grid>
          </Grid>
        </Box>
      </Card>
      {children}
    </Box>
  );
}
