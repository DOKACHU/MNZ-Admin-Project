/* eslint-disable react/require-default-props */
import React from 'react';
import { Box, Card, Grid, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface ListTemplateProps {
  title: string;
  isButton?: boolean;
  handleUpdate?: any;
  children: React.ReactNode;
}

export default function DetailTemplate({
  title,
  children,
  handleUpdate,
  isButton,
}: ListTemplateProps) {
  const navigate = useNavigate();
  return (
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
                <Button variant="contained" onClick={handleUpdate}>
                  수정
                </Button>
                <Button onClick={() => navigate(-1)}>취소</Button>
              </Grid>
            )}
          </Grid>
        </Box>
      </Card>
      {children}
    </Box>
  );
}