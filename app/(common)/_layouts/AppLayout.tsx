'use client';

import React from 'react';
import styled from 'styled-components';
import { size } from '@/src/styles';

interface Props {
  children?: React.ReactNode;
}

const Main = styled.main`
  padding: ${size.normal[5]};
`;

export function AppLayout({ children, }: Props) {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
}
