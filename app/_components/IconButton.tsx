'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import { Button } from '@/app/_components/Button';

interface Props {
  children?: React.ReactNode;
  color?: ('black' | 'red');
  icon?: string;
  iconSize?: number | string;
  type?: 'button' | 'submit';
  onClick?: any;
}

export function IconButton({
  children, color = 'black', icon, onClick, iconSize = '100%', type = 'button',
}: Props) {
  return (
    <Button type={type} $color={color} onClick={onClick}>
      {icon && (
        <Icon icon={icon} fontSize={iconSize} />
      )}
      <span>{children}</span>
    </Button>
  );
}
