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

interface ListTemplateProps {
  title: string;
  isButton?: boolean;
  handleClick?: any;
  children: React.ReactNode;
}

export default function ListTemplate({
  title,
  children,
  handleClick,
  isButton,
}: ListTemplateProps) {
  return (
    <Box
      sx={{
        padding: 3,
      }}
    >
      <Suspense fallback={<CircularProgress />}>
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
                  {title || ''}
                </Typography>
              </Grid>
              {isButton && (
                <Grid item>
                  <Button onClick={handleClick}>생성</Button>
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
