/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-key */
import React, { useState, useRef } from 'react';

import { Grid, Typography, Button } from '@mui/material';
import MainSubCard from './MainSubCard';

export default function CenterUploadImage() {
  const fileInput = useRef<any>(null);
  const [showImages, setShowImages] = useState([]);

  // 이미지 상대경로 저장
  const handleAddImages = (e: any) => {
    const imageLists = e.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]) as any;
      imageUrlLists.push(currentImageUrl as never);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
    fileInput.current.value = '';
  };

  const handleDeleteImage = (id: number) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  const handleFileClick = (e: any) => {
    fileInput.current.click();
  };
  return (
    <MainSubCard title="사진 업로드 ">
      {showImages.map((image: string, id: number) => (
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
  );
}
