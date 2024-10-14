'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { color, size } from '@/src/styles';

interface Props {
  children?: React.ReactNode;
  link: string;
  color?: 'black' | 'red';
  icon?: string;
  iconSize?: number | string;
}

interface LinkProps {
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

const StyledLink = styled(Link)<LinkProps>`
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

export function LinkButton({
  children, link, color = 'black', icon, iconSize = '100%',
}: Props) {
  return (
    <StyledLink href={link} $color={color}>
      {icon && (
        <Icon icon={icon} fontSize={iconSize} />
      )}
      <span>{children}</span>
    </StyledLink>
  );
}
