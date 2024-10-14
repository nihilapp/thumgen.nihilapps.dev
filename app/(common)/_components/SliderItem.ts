'use client';

import styled from 'styled-components';
import { size } from '@/src/styles';

export const SliderItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${size.normal[1]};
  width: 100%;
`;
