'use client';

import styled from 'styled-components';
import { size } from '@/src/styles';
import { commonBorderStyle } from './commonStyles';

export const Input = styled.input`
  ${commonBorderStyle}
  padding: ${size.normal[1]};
  width: 100%;
  height: 50px; // 40px에서 50px로 변경
`;
