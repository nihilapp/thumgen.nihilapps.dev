'use client';

import React from 'react';
import styled from 'styled-components';
import { size } from '@/src/styles';

interface Props {
  children?: React.ReactNode;
}

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${size.normal['2']};
  margin-top: ${size.normal['5']};
`;

export function FormButtonBox({ children, }: Props) {
  return (
    <Buttons>
      {children}
    </Buttons>
  );
}
