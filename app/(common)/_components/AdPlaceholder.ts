'use client';

import styled from 'styled-components';
import { size } from '@/src/styles';

export const AdPlaceholder = styled.div`
  width: 100%;
  height: 90px; // 일반적인 광고 높이, 필요에 따라 조정 가능
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${size.normal[4]};
  margin-bottom: ${size.normal[4]};
  border: 1px dashed #ccc;
`;
