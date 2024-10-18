'use client';

import React, { useMemo } from 'react';
import styled from 'styled-components';
import { ThumbnailState } from '@/src/hooks/useThumbnailState';
import {
  RGBInputContainer, RGBInputWrapper, RGBLabel, RGBInput
} from './RGBInput';

interface Props {
  children?: React.ReactNode;
  state: ThumbnailState;
  type: 'textColor' | 'bgColor';
  // eslint-disable-next-line no-unused-vars
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DisabledRGBDiv = styled.div`
  width: 60px;
  height: 50px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export function RGBInputControl({
  children, state, type, handler,
}: Props) {
  const isValidHex = useMemo(() => /^#[0-9A-Fa-f]{6}$/.test(state[type]), [ state[type], ]);

  const [ r, g, b, ] = useMemo(() => {
    if (isValidHex) {
      return state[type].slice(1).match(/.{2}/g)?.map((hex) => parseInt(hex, 16)) || [ 0, 0, 0, ];
    }
    return [ NaN, NaN, NaN, ];
  }, [ state[type], isValidHex, ]);

  const handleInputChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(255, Math.max(0, Number(e.target.value)));
    const newValues = [ r, g, b, ];
    newValues[index] = value;
    const newHex = `#${newValues.map((v) => v.toString(16).padStart(2, '0')).join('')}`;
    handler({ target: { value: newHex, }, } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <RGBInputContainer>
      <RGBInputWrapper>
        <RGBLabel>R</RGBLabel>
        {isValidHex ? (
          <RGBInput
            type='number'
            min='0'
            max='255'
            value={Number.isNaN(r) ? '' : r}
            onChange={handleInputChange(0)}
            $isDisabled={false}
          />
        ) : (
          <DisabledRGBDiv />
        )}
      </RGBInputWrapper>
      <RGBInputWrapper>
        <RGBLabel>G</RGBLabel>
        {isValidHex ? (
          <RGBInput
            type='number'
            min='0'
            max='255'
            value={Number.isNaN(g) ? '' : g}
            onChange={handleInputChange(1)}
            $isDisabled={false}
          />
        ) : (
          <DisabledRGBDiv />
        )}
      </RGBInputWrapper>
      <RGBInputWrapper>
        <RGBLabel>B</RGBLabel>
        {isValidHex ? (
          <RGBInput
            type='number'
            min='0'
            max='255'
            value={Number.isNaN(b) ? '' : b}
            onChange={handleInputChange(2)}
            $isDisabled={false}
          />
        ) : (
          <DisabledRGBDiv />
        )}
      </RGBInputWrapper>
    </RGBInputContainer>
  );
}
