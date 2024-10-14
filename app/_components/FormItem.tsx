'use client';

import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import styled from 'styled-components';
import { RequiredMark } from '@/app/_components/RequiredMark';
import { color, size } from '@/src/styles';

interface Props {
  children?: React.ReactNode;
  field: ControllerRenderProps;
  label: string;
  name: string;
  type?: ('password' | 'email' | 'text');
  required?: boolean;
}

const FormLabel = styled.p`
  display: flex;
  flex-direction: row;
  align-items: start;
`;

const FormInput = styled.input`
  border: 2px solid ${color.black['400']};
  padding: ${size.normal['2']};
  outline: none;
`;

const FormItemBlock = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${size.normal['1']};
  width: 100%;
`;

export function FormItem({
  children, field, label, name, type = 'text', required = false,
}: Props) {
  return (
    <FormItemBlock htmlFor={name}>
      <FormLabel>
        <span>{label}</span>
        {required && <RequiredMark />}
      </FormLabel>
      <FormInput
        type={type}
        id={name}
        autoComplete={type === 'password' ? 'off' : ''}
        {...field}
      />
    </FormItemBlock>
  );
}
