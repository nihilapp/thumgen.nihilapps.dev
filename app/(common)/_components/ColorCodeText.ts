'use client';

import styled from 'styled-components';
import { size } from '@/src/styles';
import { commonBorderStyle } from './commonStyles';

export const ColorCodeText = styled.span`
  ${commonBorderStyle}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px; // 40px에서 50px로 변경
  text-align: center;
  padding: 0 ${size.normal[2]};
  background-color: #ffffff;
  font-weight: 600;
  color: #333;
`;
