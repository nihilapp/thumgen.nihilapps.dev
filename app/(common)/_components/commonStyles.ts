'use client';

import { css } from 'styled-components';
import { color, size } from '@/src/styles';

export const commonBorderStyle = css`
  border: 1px solid ${color.black[200]};
  border-radius: ${size.normal[1]};
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${color.blue[500]};
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;
