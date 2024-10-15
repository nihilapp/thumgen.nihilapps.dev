'use client';

import styled from 'styled-components';
import { size } from '@/src/styles';

export const ConfigRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${size.normal[2]};
  margin-bottom: ${size.normal[3]};

  &:last-child {
    margin-bottom: 0;
  }
`;
