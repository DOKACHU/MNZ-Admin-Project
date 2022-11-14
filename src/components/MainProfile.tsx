/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef } from 'react';
import {
  Grid,
  TextField,
  Typography,
  Button,
  Autocomplete,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import MainSubCard from './MainSubCard';

const init = [
  {
    day: 'init',
    startTime: 'init',
    endTime: 'init',
  },
];

const top100Films = [
  { label: '월', id: 1 },
  { label: '화', id: 2 },
  { label: '수', id: 3 },
  { label: '목', id: 4 },
  { label: '금', id: 5 },
  { label: '토', id: 6 },
  { label: '일', id: 7 },
];
export default function MainProfile() {
  const fileInput = useRef<any>(null);
  const [addItem, setAddItem] = useState(init);
  const [value, setValue] = useState(dayjs('2022-04-07'));
  const [showImages, setShowImages] = useState([]);

  const handleAddChange = () => {
    setAddItem([
      ...addItem,
      {
        day: 'test',
        startTime: 'test',
        endTime: 'test',
      },
    ]);
  };

  // 이미지 상대경로 저장
  const handleAddImages = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]) as string;
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
    fileInput.current.value = '';
  };

  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  const handleFileClick = (e) => {
    fileInput.current.click();
  };
  return (
    <Grid container spacing={3}>
      <Grid item sm={6} md={6}>
        <MainSubCard title="기본정보">
          {/* <Grid container spacing={3}> */}
          <Grid item xs={12}>
            <TextField
              helperText="병원 번호"
              size="small"
              id="outlined-basic1"
              fullWidth
              // label="Name"
              // value={fetchPostDetail.center_id}
              disabled
              // defaultValue={user?.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              helperText="병원 이름"
              size="small"
              id="outlined-basic1"
              fullWidth
              // label="Name"
              // value={fetchPostDetail.center_id}
              //   disabled
              // defaultValue={user?.name}
            />
          </Grid>

          <Grid item md={12} xs={12}>
            <TextField
              size="small"
              id="outlined-basic6"
              fullWidth
              name="address"
              //   value={fetchPostDetail.address}
              //   onChange={handleChange}
              helperText="주소"
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <DatePicker
              views={['day']}
              label="Just date"
              inputFormat="YYYY-MM-DD"
              //   value={value}
              onChange={(newValue) => {
                // setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  size="small"
                  helperText="임시 휴무일"
                />
              )}
            />
          </Grid>
          {/* </Grid> */}
        </MainSubCard>
        <br />
        <MainSubCard title="사진 업로드 ">
          {showImages.map((image, id) => (
            <Grid item xs={12}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                key={id}
              >
                <Typography
                  noWrap
                  variant="subtitle2"
                  align="center"
                  sx={{
                    width: '200px',
                  }}
                >
                  {image}
                </Typography>
                {/* <img  style={{}} src={image} alt={`${image}-${id}`} /> */}

                <Button onClick={() => handleDeleteImage(id)}>X</Button>
              </div>
            </Grid>
          ))}
          <Grid item xs={12}>
            <input
              hidden
              ref={fileInput}
              type="file"
              name="imageFile"
              accept="image/*"
              onChange={handleAddImages}
            />
            <Typography variant="subtitle2" align="center">
              Upload/Change Your Profile Image
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button variant="contained" size="small" onClick={handleFileClick}>
              Upload Avatar
            </Button>
          </Grid>
        </MainSubCard>
      </Grid>

      <Grid item sm={6} md={6}>
        <MainSubCard title="영업 시간">
          <Grid item xs={12}>
            <Button variant="contained" size="small" onClick={handleAddChange}>
              영업 시간 추가
            </Button>
          </Grid>

          {addItem.map((item: any) => {
            return (
              <>
                <Grid item md={2} xs={12}>
                  <Autocomplete
                    disableClearable
                    options={top100Films}
                    defaultValue={top100Films[0]}
                    renderInput={(params) => (
                      <TextField {...params} label="" fullWidth size="small" />
                    )}
                  />
                </Grid>

                <Grid item md={5} xs={12}>
                  <TextField
                    id="time"
                    label="Alarm clock"
                    type="time"
                    size="small"
                    defaultValue="09:00"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                    fullWidth
                    helperText="시작 시간 "
                  />
                </Grid>
                <Grid item md={5} xs={12}>
                  <TextField
                    id="time"
                    label="Alarm clock"
                    type="time"
                    size="small"
                    defaultValue="18:00"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                    fullWidth
                    helperText="마감 시간 "
                  />
                </Grid>
              </>
            );
          })}
        </MainSubCard>
      </Grid>
    </Grid>
  );
}
