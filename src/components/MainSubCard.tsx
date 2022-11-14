import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Grid,
} from '@mui/material';

interface MainSubCardProps {
  title?: string;
  children?: React.ReactNode;
}

export default function MainSubCard({ title, children }: MainSubCardProps) {
  return (
    <Card sx={{ border: '1px solid #eceff1' }} elevation={0}>
      <CardHeader
        sx={{ p: 2.5 }}
        title={
          <Typography
            variant="h6"
            sx={
              {
                //   color: '#000',
              }
            }
          >
            {title}
          </Typography>
        }
      />
      <Divider />
      <CardContent sx={{ p: 2.5 }}>
        <Grid container spacing={3}>
          {children}
        </Grid>
      </CardContent>
    </Card>
  );
}
