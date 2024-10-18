import { ThumbnailState } from '@/src/hooks/useThumbnailState';

/* eslint-disable no-unused-vars */
export const createHandleColorCodeChange = (
  setter: ThumbnailState['setBgColor'],
  setIsDisabled: ThumbnailState['setIsDisabled']
) => (e: React.ChangeEvent<HTMLInputElement>) => {
  const input = e.target;
  let { value, } = input;
  const selectionStart = input.selectionStart ?? 0;
  const selectionEnd = input.selectionEnd ?? 0;

  if (value.length < 7) {
    setIsDisabled(true);
  } else {
    setIsDisabled(false);
  }

  requestAnimationFrame(() => {
    setter(value.slice(0, 7));
    // input이 HTMLInputElement인지 확인 후 setSelectionRange 호출
    if (input instanceof HTMLInputElement) {
      setTimeout(() => {
        input.setSelectionRange(selectionStart, selectionEnd);
      }, 0);
    }
  });
};

export const createHandleRGBChange = (setter: ThumbnailState['setBgColor'], currentColor: string, colorType: 'r' | 'g' | 'b') => (e: React.ChangeEvent<HTMLInputElement>) => {
  const { value, } = e.target;
  const numValue = parseInt(value, 10);

  if (value === '' || (numValue >= 0 && numValue <= 255)) {
    const [ r, g, b, ] = currentColor.slice(1).match(/.{2}/g)!.map((hex) => parseInt(hex, 16));

    const newRGBValues = {
      r: colorType === 'r' ? numValue : r,
      g: colorType === 'g' ? numValue : g,
      b: colorType === 'b' ? numValue : b,
    };

    const newColorHex = Object.values(newRGBValues)
      .map((c) => c.toString(16).padStart(2, '0'))
      .join('');

    setter(`#${newColorHex}`);
  }
};
