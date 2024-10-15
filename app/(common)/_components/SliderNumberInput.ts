'use client';

import styled from 'styled-components';
import { color, size } from '@/src/styles';

export const SliderNumberInput = styled.input`
  width: 100px;
  height: 50px; // 40px에서 50px로 변경
  border: 1px solid ${color.black[100]};
  padding: ${size.normal[1]};
  border-radius: ${size.normal[1]};

  &:focus {
    outline: none;
    border-color: ${color.blue[500]};
  }
`;
