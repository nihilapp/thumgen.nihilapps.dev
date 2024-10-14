'use client';

import styled from 'styled-components';
import { size } from '@/src/styles';

export const ColorSwatchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${size.normal[2]};
  gap: ${size.normal[2]};
  min-height: ${size.normal[10]};
`;
