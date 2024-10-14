'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { color, size } from '@/src/styles';

interface Props {
  children?: React.ReactNode;
}

const LoadingIcon = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & > svg {
    color: ${color.black[300]};
    font-size: ${size.normal.per(130)};

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
    
    animation: spin 1s linear infinite;
  }
`;

export function LoadingCircle({ children, }: Props) {
  return (
    <LoadingIcon>
      <Icon icon='mingcute:loading-fill' />
    </LoadingIcon>
  );
}
