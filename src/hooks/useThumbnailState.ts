import { useState } from 'react';

export const useThumbnailState = () => {
  const [ title, setTitle, ] = useState('블로그 제목');
  const [ seriesNumber, setSeriesNumber, ] = useState('');
  const [ subtitle, setSubtitle, ] = useState('');
  const [ bgColor, setBgColor, ] = useState('#ffffff');
  const [ textColor, setTextColor, ] = useState('#000000');
  const [ fileName, setFileName, ] = useState('blog-thumbnail');
  const [ titleFontSize, setTitleFontSize, ] = useState(4.75);
  const [ subtitleFontSize, setSubtitleFontSize, ] = useState(3);

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
    titleFontSize,
    setTitleFontSize,
    subtitleFontSize,
    setSubtitleFontSize,
  };
};
