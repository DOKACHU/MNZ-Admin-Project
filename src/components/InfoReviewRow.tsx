/* eslint-disable no-unsafe-optional-chaining */
import React from 'react';
import { Grid, Typography, Stack, Rating } from '@mui/material';

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

interface InfoReviewRowProps {
  title: string;
  detail: any;
}

export default function InfoReviewRow({ title, detail }: InfoReviewRowProps) {
  const average =
    Math.ceil(
      detail?.rating1 +
        detail?.rating2 +
        detail?.rating3 +
        detail?.rating4 +
        detail?.rating5
    ) / 5;
  return (
    <>
      <Grid item xs={4}>
        <Stack spacing={2}>
          <Typography variant="h4" sx={styleH4}>
            {title}
          </Typography>

          <Stack spacing={0}>
            {/*  */}
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="subtitle1" sx={styleSubtitle}>
                질문 1 :
              </Typography>
              <Rating
                name="read-only"
                value={detail?.rating1 || 0}
                precision={0.5}
                readOnly
              />
              <Typography variant="subtitle1" sx={styleSubtitle}>
                ({detail?.rating1})
              </Typography>
            </Stack>
            {/*  */}
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="subtitle1" sx={styleSubtitle}>
                질문 2 :
              </Typography>
              <Rating
                name="read-only"
                value={detail?.rating2 || 0}
                precision={0.5}
                readOnly
              />
              <Typography variant="subtitle1" sx={styleSubtitle}>
                ({detail?.rating2})
              </Typography>
            </Stack>
            {/*  */}
            {/*  */}
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="subtitle1" sx={styleSubtitle}>
                질문 3 :
              </Typography>
              <Rating
                name="read-only"
                value={detail?.rating3 || 0}
                precision={0.5}
                readOnly
              />
              <Typography variant="subtitle1" sx={styleSubtitle}>
                ({detail?.rating3})
              </Typography>
            </Stack>
            {/*  */}
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="subtitle1" sx={styleSubtitle}>
                질문 4 :
              </Typography>
              <Rating
                name="read-only"
                value={detail?.rating4 || 0}
                precision={0.5}
                readOnly
              />
              <Typography variant="subtitle1" sx={styleSubtitle}>
                ({detail?.rating4})
              </Typography>
            </Stack>
            {/*  */}
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="subtitle1" sx={styleSubtitle}>
                질문 5 :
              </Typography>
              <Rating
                name="read-only"
                value={detail?.rating5 || 0}
                precision={0.5}
                readOnly
              />
              <Typography variant="subtitle1" sx={styleSubtitle}>
                ({detail?.rating5})
              </Typography>
            </Stack>
            {/*  */}
          </Stack>
        </Stack>
      </Grid>

      {/* avrage */}
      <Grid item xs={4}>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{
            mt: 4,
          }}
        >
          <Typography variant="subtitle1" sx={styleSubtitle}>
            평점 :
          </Typography>
          <Rating
            name="read-only"
            value={average || 0}
            precision={0.5}
            readOnly
          />
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="subtitle1" sx={styleSubtitle}>
            만족 여부 :
          </Typography>
          <Typography variant="body2">만족</Typography>
        </Stack>

        <Stack direction="column" spacing={1} alignItems="flex-start">
          <Typography variant="subtitle1" sx={styleSubtitle}>
            리뷰내용 :
          </Typography>
          <Typography variant="body2">{detail?.comment}</Typography>
        </Stack>
      </Grid>
    </>
  );
}
