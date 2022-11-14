import { Grid, TextField, Button, Autocomplete } from '@mui/material';
import MainSubCard from './MainSubCard';

interface MainProfileProps {
  children?: React.ReactNode;
}

export default function MainProfile({ children }: MainProfileProps) {
  return (
    <Grid container spacing={3}>
      {children}
    </Grid>
  );
}
