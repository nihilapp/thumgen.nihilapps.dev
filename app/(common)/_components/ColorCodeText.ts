'use client';

import styled from 'styled-components';
import { size } from '@/src/styles';
import { commonBorderStyle } from './commonStyles';

export const ColorCodeText = styled.input`
  ${commonBorderStyle}
  display: none;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 50px;
  text-align: center;
  padding: 0 ${size.normal[2]};
  background-color: #ffffff;
  text-transform: uppercase;
  font-weight: 600;
  color: #333;
`;
