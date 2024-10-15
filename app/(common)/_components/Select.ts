'use client';

import styled from 'styled-components';
import { size } from '@/src/styles';

export const Select = styled.select`
  width: 100%;
  padding: ${size.normal[2]} ${size.normal[3]};
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  &:disabled {
    background-color: #e9ecef;
    opacity: 1;
  }

  option {
    padding: ${size.normal[2]} ${size.normal[3]};
    background-color: #fff;
    color: #495057;

    &:hover,
    &:focus,
    &:active {
      background-color: #f8f9fa;
    }

    &:checked {
      background-color: #007bff;
      color: #fff;
    }
  }
`;
