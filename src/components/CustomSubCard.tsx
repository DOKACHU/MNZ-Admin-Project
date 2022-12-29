import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  IconButton,
  Grid,
} from '@mui/material';
import { ArrowDropDownTwoTone } from '@mui/icons-material';

interface CustomSubCardProps {
  title?: string;
  children?: React.ReactNode;
  onToggle?: () => void;
}

export default function CustomSubCard({
  title,
  children,
  onToggle,
}: CustomSubCardProps) {
  return (
    <Card sx={{ border: '1px solid #eceff1', mt: 2 }} elevation={0}>
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
        action={
          <IconButton onClick={onToggle}>
            <ArrowDropDownTwoTone />
          </IconButton>
        }
      />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          {children}
        </Grid>
      </CardContent>
    </Card>
  );
}
