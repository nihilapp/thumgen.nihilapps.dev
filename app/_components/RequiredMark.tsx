'use client';

import React from 'react';
import styled from 'styled-components';
import { color, size } from '@/src/styles';

interface Props {
  children?: React.ReactNode;
}

const RequiredIcon = styled.span`
  & > span.required-icon {
    color: ${color.red['500']};
    font-weight: 900;
    vertical-align: super;
    font-size: ${size.text.sm};
  }
`;

export function RequiredMark({ children, }: Props) {
  return (
    <>
      <RequiredIcon>
        <span className='required-icon'>*</span>
        <span className='a11yHidden'>필수입력</span>
      </RequiredIcon>
    </>
  );
}
