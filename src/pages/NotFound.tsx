import { useNavigate } from 'react-router-dom';
import { Grid, Button, Typography } from '@mui/material';

function NotFound() {
  const navigate = useNavigate();
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      // alignItems="center"
      spacing={1}
      sx={{
        padding: 3,

        width: '100%',
        height: '80vh',
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          페이지를 찾을 수 없습니다.
        </Typography>
        <Button variant="outlined" onClick={() => navigate('/')}>
          홈으로 가기
        </Button>
      </Grid>
    </Grid>
  );
}

export default NotFound;
