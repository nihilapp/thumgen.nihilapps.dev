'use client';

import React, {
  useCallback, useEffect, useMemo, useRef, useState
} from 'react';
import styled from 'styled-components';
import { ThumbnailState } from '@/src/hooks/useThumbnailState';
import { commonBorderStyle } from '@/app/(common)/_components/commonStyles';
import { ColorCodeText } from '@/app/(common)/_components/ColorCodeText';
import { tools } from '@/src/utils/tools';
import { color } from '@/src/styles';

interface Props {
  children?: React.ReactNode;
  state: ThumbnailState;
  type: ('textColor' | 'bgColor');
  // eslint-disable-next-line no-unused-vars
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

interface HEXDivProps {
  $isFocused: boolean;
}

const HEXDiv = styled.div<HEXDivProps>`
  ${commonBorderStyle}
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 50px;
  font-weight: 600;
  color: ${color.black.base};
  border-color: ${({ $isFocused, }) => ($isFocused ? color.blue[500] : color.black[200])};

  & span {
    text-transform: uppercase;
  }
`;

interface CharSpanProps {
  $isSelected: boolean;
}

const CharSpan = styled.span<CharSpanProps>`
  cursor: pointer;
  background-color: ${({ $isSelected, }) => ($isSelected ? color.black[100] : 'transparent')};
  border-radius: 2px;
  padding: 1px;
`;

export function HEXCodeText({
  children, state, type, handler,
}: Props) {
  const [ isFocused, setIsFocused, ] = useState(false);
  const [ selectedIndex, setSelectedIndex, ] = useState<number | null>(null);
  const componentRef = useRef<HTMLDivElement>(null);

  const value = useMemo(() => {
    return state[type].replace('#', '').split('');
  }, [ state[type], ]);

  const handleCharClick = useCallback((event: React.MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    const index = Number(event.currentTarget.dataset.index);
    setSelectedIndex(index);
    setIsFocused(true);
  }, []);

  const handleComponentClick = useCallback(() => {
    setIsFocused(true);
    setSelectedIndex(null);
  }, []);

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (selectedIndex !== null) {
      if (/^[0-9A-Fa-f]$/.test(event.key)) {
        const newValue = [ ...value, ];
        newValue[selectedIndex] = event.key.toUpperCase();
        handler({ target: { value: `#${newValue.join('')}`, }, } as React.ChangeEvent<HTMLInputElement>);

        if (newValue.length === 6) {
          setSelectedIndex((prevIndex) => (prevIndex + 1) % 6);
        } else if (selectedIndex < newValue.length) {
          setSelectedIndex(selectedIndex + 1);
        }
      } else if (event.key === 'Backspace') {
        const newValue = [ ...value, ];
        if (selectedIndex > 0) {
          newValue.splice(selectedIndex - 1, 1);
          setSelectedIndex(selectedIndex - 1);
        } else if (selectedIndex === 0 && newValue.length > 0) {
          newValue.splice(0, 1);
        }
        if (newValue.length < 6) {
          newValue.push('0'); // 6자리를 유지하기 위해 '0'을 추가
        }
        handler({ target: { value: `#${newValue.join('')}`, }, } as React.ChangeEvent<HTMLInputElement>);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 5));
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        setSelectedIndex((prevIndex) => (prevIndex < 5 ? prevIndex + 1 : 0));
      }
    }
  }, [ selectedIndex, value, handler, ]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
        setIsFocused(false);
        setSelectedIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={componentRef}
      onClick={handleComponentClick}
      onKeyDown={handleKeyDown}
      role='textbox'
      tabIndex={0}
    >
      <ColorCodeText
        id='colorCode'
        value={state[type]}
        onChange={handler}
      />

      <HEXDiv $isFocused={isFocused}>
        <span>#</span>
        {value.map((char, index) => (
          <CharSpan
            key={tools.common.uuid()}
            data-index={index}
            onClick={handleCharClick}
            $isSelected={selectedIndex === index}
          >
            {char}
          </CharSpan>
        ))}
      </HEXDiv>
    </div>
  );
}
