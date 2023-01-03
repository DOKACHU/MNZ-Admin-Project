import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';

const styleH4 = {
  color: '#212121',
  fontSize: 14,
  fontWeight: 600,
};

const styleSubtitle = {
  color: '#212121',
  fontSize: 14,
  fontWeight: 500,
};

interface InfoBasicRowProps {
  title: string;
  detail: any;
  menus: any;
}

export default function InfoBasicRow({
  title,
  menus,
  detail,
}: InfoBasicRowProps) {
  return (
    <Grid item sm={6} md={4}>
      <Stack spacing={2}>
        <Typography variant="h4" sx={styleH4}>
          {title || '제목 없음'}
        </Typography>

        <Stack>
          {detail && (
            <>
              {menus.map((menu: any) => {
                console.log({ menu });
                return (
                  <Stack
                    key={menu.id}
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <Typography variant="subtitle1" sx={styleSubtitle}>
                      {menu.label}:
                    </Typography>
                    <Typography variant="body2">
                      {detail[menu.value] || ''}
                    </Typography>
                  </Stack>
                );
              })}
            </>
          )}
        </Stack>
      </Stack>
    </Grid>
  );
}
