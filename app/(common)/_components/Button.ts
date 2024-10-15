'use client';

import styled from 'styled-components';
import { color, size } from '@/src/styles';
import { commonBorderStyle } from './commonStyles';

export const Button = styled.button`
  ${commonBorderStyle}
  margin-top: ${size.normal[5]};
  width: 100%;
  padding: ${size.normal[3]} ${size.normal[2]};
  background-color: ${color.black.base};
  color: ${color.white};
`;
