'use client';

import styled from 'styled-components';
import { size } from '@/src/styles';

export const ColorInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${size.normal[1]};
  width: 100%;
  margin-top: -${size.normal[5]};
`;

export const ColorInputWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-shrink: 0;
  flex-direction: column;
  height: 100%;
`;

export const ColorCodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EmptyLabel = styled.div`
  height: 22px; // RGBLabel의 높이와 동일하게 설정
`;
