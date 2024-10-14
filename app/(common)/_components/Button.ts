'use client';

import styled from 'styled-components';
import { color, size } from '@/src/styles';

export const Button = styled.button`
  margin-top: ${size.normal[5]};
  width: 100%;
  padding: ${size.normal[3]} ${size.normal[2]};
  border-radius: ${size.normal[1]};
  background-color: ${color.black.base};
  color: ${color.white};
`;
