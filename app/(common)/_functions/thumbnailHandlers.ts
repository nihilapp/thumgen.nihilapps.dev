import React from 'react';
import { ThumbnailState } from '@/src/hooks/useThumbnailState';

export const createOnChangeTitle = (setter: ThumbnailState['setTitle']) => (
  (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
  }
);

export const createOnChangeSeriesNumber = (setter: ThumbnailState['setSeriesNumber']) => (
  (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
  }
);

export const createOnChangeSubtitle = (setter: ThumbnailState['setSubtitle']) => (
  (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
  }
);

export const createHandleTitleFontSizeChange = (setter: ThumbnailState['setTitleFontSize']) => (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = parseFloat(e.target.value);
  if (!Number.isNaN(value) && value >= 1 && value <= 8) {
    setter(parseFloat(value.toFixed(3)));
  }
};

export const createHandleSubtitleFontSizeChange = (setter: ThumbnailState['setSubtitleFontSize']) => (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = parseFloat(e.target.value);
  if (!Number.isNaN(value) && value >= 0.5 && value <= 4) {
    setter(parseFloat(value.toFixed(3)));
  }
};

export const createOnChangeTextColor = (setter: ThumbnailState['setTextColor']) => (
  (color: string) => {
    setter(color);
  }
);

export const createOnChangeBgColor = (setter: ThumbnailState['setBgColor']) => (
  (color: string) => {
    setter(color);
  }
);
