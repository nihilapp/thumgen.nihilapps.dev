'use client';

import styled from 'styled-components';
import { color, size } from '@/src/styles';
import { commonBorderStyle } from './commonStyles';

export const RGBInputContainer = styled.div`
  display: flex;
  gap: ${size.normal[1]};
`;

export const RGBInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RGBLabel = styled.label`
  font-size: 12px;
  margin-bottom: 4px;
`;

interface RGBInputProps {
  $isDisabled: boolean;
}

export const RGBInput = styled.input<RGBInputProps>`
  ${commonBorderStyle}
  width: 60px;
  height: 50px;
  text-align: center;
  padding: 0 ${size.normal[1]};
  background-color: ${({ $isDisabled: isDisabled, }) => (isDisabled ? color.black[200] : color.white)};
`;
