'use client';

import styled from 'styled-components';
import { commonBorderStyle } from '@/app/(common)/_components/commonStyles';

interface Props {
  id: string;
  value: string;
  onChange: () => void;
}

const HiddenColorInput = styled.input`
  flex: 1;
  flex-shrink: 0;
  flex-basis: 50px;
  background-color: transparent;
  display: none;
`;

interface ColorBoxProps {
  color: string;
}

const ColorBox = styled.div<ColorBoxProps>`
  ${commonBorderStyle}
  flex: 1;
  flex-shrink: 0;
  flex-basis: 50px;
  background-color: ${({ color, }) => color};
  border-radius: 5px;
`;

export function ColorInput({ id, value, onChange, }: Props) {
  return (
    <>
      <HiddenColorInput
        id={id}
        type='color'
        value={value}
        onChange={onChange}
      />

      <ColorBox color={value} />
    </>
  );
}
