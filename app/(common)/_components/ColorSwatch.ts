'use client';

import styled from 'styled-components';

export const ColorSwatch = styled.button<{ color: string }>`
  width: 32px;
  height: 32px;
  border: 1px solid #ccc;
  background-color: ${(props) => props.color};
  cursor: pointer;
  margin: 0;
  padding: 0;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
  }

  &:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }
`;
