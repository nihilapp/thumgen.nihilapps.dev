'use client';

import styled from 'styled-components';
import { color, size } from '@/src/styles';

interface Props {
  $color: 'black' | 'red';
}

const bgColorMap = {
  black: color.black.base,
  red: color.red['500'],
};

const hoverBgColorMap = {
  black: color.blue['500'],
  red: color.red['700'],
};

export const Button = styled.button<Props>`
  background-color: ${(props) => (
    bgColorMap[props.$color]
  )};
  color: white;
  padding: ${size.normal['5']};
  width: 100%;
  transition: color, background-color 150ms ease-in-out;
  display: flex;
  flex-direction: row;
  gap: ${size.normal['1']};
  align-items: center;
  justify-content: center;

  & span {
    line-height: 0;
  }

  &:hover {
    background-color: ${(props) => (hoverBgColorMap[props.$color])};
  }
`;
