/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import { Grid, Button, TextField, Box } from '@mui/material';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { Drawer, UploadImage } from '../../../components';
import { useCreateCenters, CreateCentersDTO } from '../api';

type CreateCouponProps = {
  open: boolean;
  handleClose: () => void;
};

export default function CreateCenters({
  open,
  handleClose,
}: CreateCouponProps) {
  const { mutateAsync } = useCreateCenters();
  const { control, handleSubmit, reset } = useForm<CreateCentersDTO['data']>({
    defaultValues: {
      businessHours: [
        {
          dayOfWeek: 1,
          dayOflabel: '월',
          startTime: '10:00',
          closeTime: '20:00',
        },
        {
          dayOfWeek: 2,
          dayOflabel: '화',
          startTime: '',
          closeTime: '',
        },
        {
          dayOfWeek: 3,
          dayOflabel: '수',
          startTime: '',
          closeTime: '',
        },
        {
          dayOfWeek: 4,
          dayOflabel: '목',
          startTime: '',
          closeTime: '',
        },
        {
          dayOfWeek: 5,
          dayOflabel: '금',
          startTime: '',
          closeTime: '',
        },
        {
          dayOfWeek: 6,
          dayOflabel: '토',
          startTime: '',
          closeTime: '',
        },
        {
          dayOfWeek: 7,
          dayOflabel: '일',
          startTime: '',
          closeTime: '',
        },
      ],
    },
  });

  const { fields } = useFieldArray({
    control,
    name: 'businessHours',
  });

  const onSubmit = async (data: CreateCentersDTO['data']) => {
    const result = await mutateAsync({ data });
    reset(result as any);
    handleClose();
  };

  return (
    <Drawer
      title="센터 생성 모달"
      open={open}
      onClose={handleClose}
      onSubmit={handleSubmit(onSubmit)}
      renderHeader={
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button type="submit" variant="contained" sx={{ mr: 2 }}>
            생성
          </Button>
          <Button type="button" variant="outlined" onClick={handleClose}>
            취소
          </Button>
        </Box>
      }
    >
      <Grid item xs={12}>
        <Controller
          name="center.name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              helperText="센터 이름"
              fullWidth
              size="small"
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="center.description"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              helperText="센터 설명"
              fullWidth
              size="small"
            />
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <Controller
          name="center.address"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              helperText="센터 주소"
              fullWidth
              size="small"
            />
          )}
        />
      </Grid>
      {/*  */}
      <Grid item xs={12}>
        {fields.map((item, i: number) => {
          return (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Grid item md={2} xs={12}>
                <Controller
                  name={`businessHours.${i}.dayOflabel`}
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} fullWidth size="small" disabled />
                  )}
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <Controller
                  name={`businessHours.${i}.startTime`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="time"
                      label="Alarm clock"
                      type="time"
                      size="small"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        step: 300, // 5 min
                      }}
                      fullWidth
                      helperText="마감 시간 "
                    />
                  )}
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <Controller
                  name={`businessHours.${i}.closeTime`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="time"
                      label="Alarm clock"
                      type="time"
                      size="small"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        step: 300, // 5 min
                      }}
                      fullWidth
                      helperText="마감 시간 "
                    />
                  )}
                />
              </Grid>
            </Box>
          );
        })}
      </Grid>

      <Grid item xs={12}>
        <UploadImage />
      </Grid>
    </Drawer>
  );
}
