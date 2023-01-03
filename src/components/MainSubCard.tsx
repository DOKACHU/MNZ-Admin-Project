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
    <Card elevation={0}>
      <CardContent sx={{ p: 2.5 }}>
        <Grid container spacing={3}>
          {children}
        </Grid>
      </CardContent>
    </Card>
  );
}
