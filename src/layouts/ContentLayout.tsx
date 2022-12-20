import React from 'react';

import {
  Box,
  Card,
  Grid,
  Typography,
  Button,
  CircularProgress,
} from '@mui/material';

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
  isButton?: boolean;
  onOpen: () => void;
};

export default function ContentLayout({
  children,
  title,
  isButton,
  onOpen,
}: ContentLayoutProps) {
  const modalTitle = `${title} 생성 모달`;

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
              <Typography variant="h5" sx={{ fontWeight: 500 }}>
                {`${title} 관리`}
              </Typography>
            </Grid>
            {isButton && (
              <Grid item>
                <Button variant="outlined" onClick={onOpen}>
                  {modalTitle}
                </Button>
              </Grid>
            )}
          </Grid>
        </Box>
      </Card>
      {children}
    </Box>
  );
}
