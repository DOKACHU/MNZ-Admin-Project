import React from 'react';
import {
  Grid,
  Typography,
  Stack,
  Divider,
  Checkbox,
  Chip,
} from '@mui/material';
import styled from 'styled-components';
// import { styleSubtitle, styleH4, styleBody } from '../../../constansts';

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

export const AddItemSection = styled.div`
  border-top: 0.5px solid rgba(0, 0, 0, 0.15);
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
  padding: 26px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 64px;
`;

export const AddItemBlock = styled.div`
  border-top: 0.5px solid rgba(0, 0, 0, 0.15);
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const YearInput = styled.input`
  border: none;
  width: 40px;
  &:focus {
    outline: none;
  }
`;

export const MonthInput = styled.input`
  border: none;
  width: 30px;
  &:focus {
    outline: none;
  }
`;

export const ItemInput = styled.input`
  border: none;
  /* width: 30px; */

  /* width: 300px; */
  /* width: 30px; */
  &:focus {
    outline: none;
  }
`;

export default function BasicInfo({ detail }: BasicInfoProps) {
  return (
    <Grid container spacing={2} display="row" alignItems="center">
      <Grid item xs={12}>
        {/* 커버 이미지 */}
        <Grid item xs={2}>
          <Label>프로필 이미지 *</Label>
        </Grid>
        {/*  */}
        <Grid
          item
          xs={12}
          style={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <Img className="image" src="" alt="" />
          <Img className="image" src="" alt="" />
          <Img className="image" src="" alt="" />
          <Img className="image" src="" alt="" />
          <Img className="image" src="" alt="" />

          {/* {multipleImages?.map((image: any) => {
            return <Img className="image" src={image} alt="" key={image} />;
          })} */}
        </Grid>

        {/* 1 */}
        <Grid container spacing={2} xs={12} display="row">
          {/* 병원 이름 */}
          <Grid item xs={6}>
            <Label>이름</Label>
            <Input disabled />
          </Grid>
          {/*  */}

          {/* 병원 이름 */}
          <Grid item xs={6}>
            <Label>성별</Label>
            <Input disabled />
          </Grid>
          {/*  */}
        </Grid>
        {/* 1 */}

        {/* 2 */}
        <Grid container spacing={2} xs={12} display="row">
          {/* 병원 이름 */}
          <Grid item xs={6}>
            <Label>지역</Label>
            <Input disabled />
          </Grid>
          {/*  */}

          {/* 병원 이름 */}
          <Grid item xs={6}>
            <Label>담당 항목</Label>
            <Input disabled />
          </Grid>
          {/*  */}
        </Grid>
        {/* 2 */}

        {/* 4 */}
        <Grid container spacing={2} xs={12} display="row">
          {/* 병원 이름 */}
          <Grid item xs={12}>
            <Label>간단 소개글</Label>
            <TextArea readOnly rows={8} />
          </Grid>
          {/*  */}
        </Grid>
        {/* 4 */}

        {/* 3 */}
        <Grid container spacing={2} xs={12} display="row">
          {/* 병원 이름 */}
          <Grid item xs={12}>
            <Label>자격증 이미지</Label>
            <Img className="image" src="" alt="" />
          </Grid>
          {/*  */}
        </Grid>
        {/* 3 */}

        {/* 3 */}
        <Grid container spacing={2} xs={12} display="row">
          {/* 병원 이름 */}
          <Grid item xs={6}>
            <Label>경력</Label>
            <AddItemSection>
              <div
                style={{
                  display: 'flex',
                  gap: '80px',
                }}
              >
                <Row>
                  <YearInput
                    placeholder="YYYY"
                    type="text"
                    maxLength={4}
                    name="startYear"
                  />
                  <span>.</span>
                  <MonthInput
                    placeholder="MM"
                    type="text"
                    maxLength={2}
                    name="startMonth"
                  />
                </Row>
                <Row>
                  <YearInput
                    placeholder="YYYY"
                    type="text"
                    maxLength={4}
                    name="endYear"
                  />
                  <span>.</span>
                  <MonthInput
                    placeholder="MM"
                    type="text"
                    maxLength={2}
                    name="endMonth"
                  />
                </Row>
                <Row>
                  <ItemInput type="text" name="content" placeholder="병원명" />
                </Row>
              </div>
            </AddItemSection>
          </Grid>
          {/*  */}

          {/* 병원 이름 */}
          <Grid item xs={6}>
            <Label>학력</Label>
            <AddItemSection>
              <div
                style={{
                  display: 'flex',
                  gap: '80px',
                }}
              >
                <Row>
                  <YearInput
                    placeholder="YYYY"
                    type="text"
                    maxLength={4}
                    name="startYear"
                  />
                  <span>.</span>
                  <MonthInput
                    placeholder="MM"
                    type="text"
                    maxLength={2}
                    name="startMonth"
                  />
                </Row>
                <Row>
                  <YearInput
                    placeholder="YYYY"
                    type="text"
                    maxLength={4}
                    name="endYear"
                  />
                  <span>.</span>
                  <MonthInput
                    placeholder="MM"
                    type="text"
                    maxLength={2}
                    name="endMonth"
                  />
                </Row>
                <Row>
                  <ItemInput type="text" name="content" placeholder="병원명" />
                </Row>
              </div>
            </AddItemSection>
          </Grid>
          {/*  */}
        </Grid>
        {/* 3 */}

        {/* 3 */}
        <Grid container spacing={2} xs={12} display="row">
          {/* 병원 이름 */}
          <Grid item xs={6}>
            <Label>경력</Label>
            <AddItemSection>
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                }}
              >
                <Row>
                  <ItemInput
                    type="text"
                    placeholder="자격증 이름"
                    name="licenseName"
                    maxLength={10}
                  />
                </Row>
                <Row>
                  <ItemInput
                    type="text"
                    placeholder="자격증 번호"
                    name="licenseNumber"
                    maxLength={10}
                  />
                </Row>
                <Row>
                  <YearInput
                    placeholder="YYYY"
                    type="text"
                    maxLength={4}
                    name="registerYear"
                  />
                  <span>.</span>
                  <MonthInput
                    placeholder="MM"
                    type="text"
                    maxLength={2}
                    name="registerMonth"
                  />
                </Row>
              </div>
            </AddItemSection>
          </Grid>
          {/*  */}

          {/* 병원 이름 */}
          <Grid item xs={6}>
            <Label>학력</Label>
            <AddItemSection>
              <Row>
                <ItemInput
                  style={{
                    width: '300px',
                  }}
                  type="text"
                  placeholder="ex) https://www.youtube.com/watch?v=test"
                  name="content"
                  maxLength={30}
                />
              </Row>
            </AddItemSection>
          </Grid>
          {/*  */}
        </Grid>
        {/* 3 */}
      </Grid>
    </Grid>
  );
}
