'use client';

import styled from 'styled-components';
import { color, size } from '@/src/styles';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${size.text.md};
  color: ${color.black.base};
`;
