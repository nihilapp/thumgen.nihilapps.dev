/* eslint-disable no-unused-vars */
import { useState } from 'react';

export type ThumbnailState = {
  title: string;
  setTitle: (title: string) => void;
  seriesNumber: string;
  setSeriesNumber: (seriesNumber: string) => void;
  subtitle: string;
  setSubtitle: (subtitle: string) => void;
  titleFontSize: number;
  setTitleFontSize: (size: number) => void;
  subtitleFontSize: number;
  setSubtitleFontSize: (size: number) => void;
  textColor: string;
  setTextColor: (color: string) => void;
  bgColor: string;
  setBgColor: (color: string) => void;
  fileName: string;
  setFileName: (fileName: string) => void;
  fileExtension: string;
  setFileExtension: (extension: string) => void;
  isDisabled: boolean;
  setIsDisabled: (isDisabled: boolean) => void;
};

export const useThumbnailState = (): ThumbnailState => {
  const [ title, setTitle, ] = useState('블로그 제목');
  const [ seriesNumber, setSeriesNumber, ] = useState('');
  const [ subtitle, setSubtitle, ] = useState('');
  const [ bgColor, setBgColor, ] = useState('#ffffff');
  const [ textColor, setTextColor, ] = useState('#000000');
  const [ fileName, setFileName, ] = useState('썸네일');
  const [ fileExtension, setFileExtension, ] = useState('png');
  const [ titleFontSize, setTitleFontSize, ] = useState(4.75);
  const [ subtitleFontSize, setSubtitleFontSize, ] = useState(3);
  const [ isDisabled, setIsDisabled, ] = useState(false);

  return {
    title,
    setTitle,
    seriesNumber,
    setSeriesNumber,
    subtitle,
    setSubtitle,
    bgColor,
    setBgColor,
    textColor,
    setTextColor,
    fileName,
    setFileName,
    fileExtension,
    setFileExtension,
    titleFontSize,
    setTitleFontSize,
    subtitleFontSize,
    setSubtitleFontSize,
    isDisabled,
    setIsDisabled,
  };
};
