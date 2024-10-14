'use client';

import styled from 'styled-components';
import { color, size } from '@/src/styles';

export const Input = styled.input`
  border: 1px solid ${color.black[100]};
  padding: ${size.normal[1]};
  border-radius: ${size.normal[1]};
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${color.blue[500]};
  }
`;
