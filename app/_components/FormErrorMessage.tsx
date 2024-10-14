'use client';

import React from 'react';
import styled from 'styled-components';
import { FieldError } from 'react-hook-form';
import { color, size } from '@/src/styles';

interface Props {
  children?: React.ReactNode;
  error: FieldError;
}

const ErrorMessage = styled.span`
  color: ${color.red['500']};
  font-style: italic;
  font-size: ${size.text.sm};
  margin-top: ${size.normal['1']};
`;

export function FormErrorMessage({ children, error, }: Props) {
  console.log(error);

  return (
    !!error === true && (
      <ErrorMessage>
        {error?.message}
      </ErrorMessage>
    )
  );
}
