import React from 'react';
import { ThumbnailState } from '@/src/hooks/useThumbnailState';

export const createOnChangeTitle = (setState: ThumbnailState['setTitle']) => (event: React.ChangeEvent<HTMLInputElement>) => {
  setState(event.target.value);
};

export const createOnChangeSeriesNumber = (setState: ThumbnailState['setSeriesNumber']) => (event: React.ChangeEvent<HTMLInputElement>) => {
  setState(event.target.value);
};

export const createOnChangeSubtitle = (setState: ThumbnailState['setSubtitle']) => (event: React.ChangeEvent<HTMLInputElement>) => {
  setState(event.target.value);
};

export const createHandleTitleFontSizeChange = (setState: ThumbnailState['setTitleFontSize']) => (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = parseFloat(e.target.value);
  if (!Number.isNaN(value) && value >= 1 && value <= 8) {
    setState(parseFloat(value.toFixed(3)));
  }
};

export const createHandleSubtitleFontSizeChange = (setState: ThumbnailState['setSubtitleFontSize']) => (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = parseFloat(e.target.value);
  if (!Number.isNaN(value) && value >= 0.5 && value <= 4) {
    setState(parseFloat(value.toFixed(3)));
  }
};

export const createOnChangeTextColor = (setState: ThumbnailState['setTextColor']) => (color: string) => {
  setState(color);
};

export const createOnChangeBgColor = (setState: ThumbnailState['setBgColor']) => (color: string) => {
  setState(color);
};
