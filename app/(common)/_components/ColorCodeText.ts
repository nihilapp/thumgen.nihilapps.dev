'use client';

import styled from 'styled-components';
import { size } from '@/src/styles';

export const ColorCodeText = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px; // 색상 선택기의 높이와 맞춤. 필요에 따라 조정하세요.
  text-align: center;
  padding: 0 ${size.normal[2]};
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 2px 5px rgba(0,0,0,0.15);
  }
`;
