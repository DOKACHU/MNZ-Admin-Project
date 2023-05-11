import React from 'react';
import { Grid, Typography, Stack, Checkbox, Chip } from '@mui/material';
import styled from 'styled-components';
import {
  styleSubtitle,
  styleH4,
  styleBody,
  convertDate,
  dayOfWeeks,
} from '../../../constansts';
import { MainSubCard, UploadImage } from '../../../components';

interface BasicInfoProps {
  detail?: any;
}

export const Label = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const Img = styled.img`
  width: 140px;
  height: 140px;
  object-fit: contain;
  background: lightgray;
  border-radius: 8px;
`;

export const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid #000;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  width: 100%;

  &:hover {
    border: 1px solid #e4e4e4;
  }

  &:focus {
    background-color: #f4f4f4;
  }
`;

export const TextArea = styled.textarea`
  padding: 12px 16px;
  border: 1px solid #000;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  resize: none;
  width: 100%;

  &:hover {
    border: 1px solid #e4e4e4;
  }

  &:focus {
    background-color: #f4f4f4;
  }
`;

const multipleImages: any[] = [];

export default function BasicInfo({ detail }: BasicInfoProps) {
  return (
    <Grid container spacing={2} display="row" alignItems="center">
      {/*  */}
      <Grid item xs={12}>
        {/* 커버 이미지 */}
        <Grid item xs={2}>
          <Label>커버 이미지 *</Label>
        </Grid>
        {/*  */}
        <Grid item xs={12}>
          {multipleImages?.map((image: any) => {
            return <Img className="image" src={image} alt="" key={image} />;
          })}
        </Grid>

        {/* 1 */}
        <Grid container spacing={2} xs={12} display="row">
          {/* 병원 이름 */}
          <Grid item xs={6}>
            <Label>병원 이름</Label>
            <Input disabled />
          </Grid>
          {/*  */}

          {/* 병원 이름 */}
          <Grid item xs={6}>
            <Label>지역</Label>
            <Input disabled />
          </Grid>
          {/*  */}
        </Grid>
        {/* 1 */}

        {/* 2 */}
        <Grid container spacing={2} xs={12} display="row">
          {/* 병원 이름 */}
          <Grid item xs={6}>
            <Label>대표 주소</Label>
            <Input disabled />
          </Grid>
          {/*  */}

          {/* 병원 이름 */}
          <Grid item xs={6}>
            <Label>상세 주소</Label>
            <Input disabled />
          </Grid>
          {/*  */}
        </Grid>
        {/* 2 */}

        {/* 3 */}
        <Grid container spacing={2} xs={12} display="row">
          {/* 병원 이름 */}
          <Grid item xs={6}>
            <Label>사업자 등록 번호</Label>
            <Input disabled />
          </Grid>
          {/*  */}

          {/* 병원 이름 */}
          <Grid item xs={6}>
            <Label>진료 항목</Label>
            <Input disabled />
          </Grid>
          {/*  */}
        </Grid>
        {/* 3 */}

        {/* 3 */}
        <Grid container spacing={2} xs={12} display="row">
          {/* 병원 이름 */}
          <Grid item xs={6}>
            <Label>치료사 수</Label>
            <Input disabled />
          </Grid>
          {/*  */}

          {/* 병원 이름 */}
          <Grid item xs={6}>
            <Label>사업자 이미지</Label>
            <Img className="image" src="" alt="" />
          </Grid>
          {/*  */}
        </Grid>
        {/* 3 */}

        {/* 4 */}
        <Grid container spacing={2} xs={12} display="row">
          {/* 병원 이름 */}
          <Grid item xs={12}>
            <Label>병원 소개</Label>
            <TextArea readOnly rows={8} />
          </Grid>
          {/*  */}
        </Grid>
        {/* 4 */}

        {/* 5 */}
        <Grid container spacing={2} xs={12} display="row">
          {/* 병원 이름 */}
          <Grid item xs={6}>
            <Label>담당자 연락처</Label>
            <Input disabled />
          </Grid>
          {/*  */}

          {/* 병원 이름 */}
          <Grid item xs={6}>
            <Label>정보 수신 이메일</Label>
            <Input disabled />
          </Grid>
          {/*  */}
        </Grid>
        {/* 5 */}

        {/* 5 */}
        <Grid container spacing={2} xs={12} display="row">
          {/* 병원 이름 */}
          <Grid item xs={6}>
            <Label>태그</Label>
            <Chip label="tagLabel" />
            <Chip label="tagLabel" />
            <Chip label="tagLabel" />
          </Grid>
          {/*  */}

          {/* 병원 이름 */}
          <Grid item xs={6}>
            <Label>이용약관 동의</Label>
            <Checkbox
              color="primary"
              // onChange={(e) => onChange(e.target.checked)}
            />
          </Grid>
          {/*  */}
        </Grid>
        {/* 5 */}
      </Grid>
    </Grid>
  );
}
