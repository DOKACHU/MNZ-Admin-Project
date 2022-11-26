import {
  CalendarTodayTwoTone,
  PhoneAndroidTwoTone,
  EmailTwoTone,
} from '@mui/icons-material';

import { Grid, Divider, Typography } from '@mui/material';

const detailsIconSX = {
  width: 15,
  height: 15,
  verticalAlign: 'text-top',
  mr: 0.5,
  mt: 0.25,
};

const styleH4 = {
  color: '#212121',
  fontSize: 14,
  fontWeight: 600,
};

interface UserBasicRowProps {
  title: string;
  detail?: any;
}

export default function UserBasicRow({ title, detail }: UserBasicRowProps) {
  return (
    <Grid item xs={12}>
      <Typography variant="h4" sx={styleH4}>
        {title || '제목 없음'}
      </Typography>
      <br />
      <Grid container spacing={3} display="row" alignItems="center">
        <Grid item>
          <Typography variant="body2">
            <CalendarTodayTwoTone sx={detailsIconSX} />
            {detail || '작성자 없음'}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">
            <PhoneAndroidTwoTone sx={detailsIconSX} />
            {detail || '핸드폰 없음'}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">
            <EmailTwoTone sx={detailsIconSX} />
            {detail || '이메일 없음'}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
