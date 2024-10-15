'use client';

import styled from 'styled-components';
import { size } from '@/src/styles';
import { commonBorderStyle } from './commonStyles';

export const Select = styled.select`
  ${commonBorderStyle}
  width: 100%;
  height: 50px; // 40px에서 50px로 변경
  padding: ${size.normal[1]};
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;

  &:disabled {
    background-color: #e9ecef;
    opacity: 1;
  }

  option {
    padding: ${size.normal[2]} ${size.normal[3]};
    background-color: #fff;
    color: #495057;

    &:hover,
    &:focus,
    &:active {
      background-color: #f8f9fa;
    }

    &:checked {
      background-color: #007bff;
      color: #fff;
    }
  }
`;
