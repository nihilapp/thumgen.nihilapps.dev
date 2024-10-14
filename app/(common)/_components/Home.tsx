'use client';

import { useRef, useEffect, useCallback } from 'react';
import {
  Button, Input, Label, Canvas, Card, Screen,
  ConfigBody, ConfigRow, TitleNumberItem, ConfigItem,
  ColorItem, ColorInput, ColorCodeText,
  SliderItem, SliderInput, SliderNumberInput,
  ColorSwatch, ColorSwatchContainer
} from '@/app/(common)/_components';
import { useThumbnailState } from '@/src/hooks/useThumbnailState';

const bgColorSwatches = [
  { color: '#E34F26', name: 'HTML', },
  { color: '#1572B6', name: 'CSS', },
  { color: '#F7DF1E', name: 'JavaScript', },
  { color: '#3178C6', name: 'TypeScript', },
  { color: '#FFFFFF', name: '흰색', },
  { color: '#000000', name: '검정', },
];

export function Home() {
  const state = useThumbnailState();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    drawCanvas();
  }, [ state.title, state.seriesNumber, state.subtitle, state.bgColor, state.textColor, state.titleFontSize, state.subtitleFontSize, ]);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1280;
    canvas.height = 720;

    ctx.fillStyle = state.bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = state.textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Convert rem to px (assuming 1rem = 16px)
    const titleFontSizePx = state.titleFontSize * 16;
    const subtitleFontSizePx = state.subtitleFontSize * 16;

    let displayTitle = state.title;
    if (state.seriesNumber) {
      displayTitle += ` #${state.seriesNumber}`;
    }

    if (state.subtitle) {
      ctx.font = `bold ${titleFontSizePx}px Arial`;
      ctx.fillText(displayTitle, centerX, centerY - titleFontSizePx / 2);

      ctx.font = `${subtitleFontSizePx}px Arial`;
      ctx.fillText(state.subtitle, centerX, centerY + titleFontSizePx / 2 + 10);
    } else {
      ctx.font = `bold ${titleFontSizePx}px Arial`;
      ctx.fillText(displayTitle, centerX, centerY);
    }
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `${state.fileName}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const onChangeTitle = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    state.setTitle(event.target.value);
  }, []);

  const onChangeSeriesNumber = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    state.setSeriesNumber(event.target.value);
  }, []);

  const onChangeSubtitle = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    state.setSubtitle(event.target.value);
  }, []);

  const handleTitleFontSizeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!Number.isNaN(value) && value >= 1 && value <= 8) {
      state.setTitleFontSize(parseFloat(value.toFixed(3)));
    }
  }, []);

  const handleSubtitleFontSizeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!Number.isNaN(value) && value >= 0.5 && value <= 4) {
      state.setSubtitleFontSize(parseFloat(value.toFixed(3)));
    }
  }, []);

  const onChangeTextColor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    state.setTextColor(e.target.value);
  }, []);

  const onChangeBgColor = useCallback((color: string) => {
    state.setBgColor(color);
  }, []);

  return (
    <Card>
      <div>
        <Screen>
          <Canvas ref={canvasRef} />
        </Screen>
        <ConfigBody>
          <ConfigRow>
            <ConfigItem>
              <Label htmlFor='title'>제목</Label>
              <Input id='title' value={state.title} onChange={onChangeTitle} />
            </ConfigItem>
            <TitleNumberItem>
              <Label htmlFor='seriesNumber'>시리즈 번호</Label>
              <Input
                id='seriesNumber'
                value={state.seriesNumber}
                onChange={onChangeSeriesNumber}
                type='number'
                min='1'
              />
            </TitleNumberItem>
            <ConfigItem>
              <Label htmlFor='subtitle'>부제목 (선택사항)</Label>
              <Input id='subtitle' value={state.subtitle} onChange={onChangeSubtitle} />
            </ConfigItem>
          </ConfigRow>
          <ConfigRow>
            <ConfigItem>
              <Label htmlFor='bgColor'>배경색</Label>
              <ColorItem>
                <ColorInput id='bgColor' type='color' value={state.bgColor} onChange={(e) => onChangeBgColor(e.target.value)} />
                <ColorCodeText>{state.bgColor}</ColorCodeText>
              </ColorItem>
              <ColorSwatchContainer>
                {bgColorSwatches.map(({ color, name, }) => (
                  <ColorSwatch
                    key={color}
                    color={color}
                    onClick={() => onChangeBgColor(color)}
                    aria-label={`${name} 배경색 ${color}`}
                    title={name}
                  />
                ))}
              </ColorSwatchContainer>
            </ConfigItem>
            <ConfigItem>
              <Label htmlFor='textColor'>글자색</Label>
              <ColorItem>
                <ColorInput id='textColor' type='color' value={state.textColor} onChange={onChangeTextColor} />
                <ColorCodeText>{state.textColor}</ColorCodeText>
              </ColorItem>
              <ColorSwatchContainer>
                {/* 여기에 추후 글자색 견본을 추가할 수 있습니다 */}
              </ColorSwatchContainer>
            </ConfigItem>
          </ConfigRow>
          <ConfigRow>
            <ConfigItem>
              <Label htmlFor='titleFontSize'>제목 폰트 크기 (rem)</Label>
              <SliderItem>
                <SliderInput
                  type='range'
                  id='titleFontSize'
                  min='1'
                  max='8'
                  step='0.125'
                  value={state.titleFontSize}
                  onChange={handleTitleFontSizeChange}
                />
                <SliderNumberInput
                  type='number'
                  value={state.titleFontSize}
                  onChange={handleTitleFontSizeChange}
                  step='0.125'
                  min='1'
                  max='8'
                />
              </SliderItem>
            </ConfigItem>
            <ConfigItem>
              <Label htmlFor='subtitleFontSize'>부제목 폰트 크기 (rem)</Label>
              <SliderItem>
                <SliderInput
                  type='range'
                  id='subtitleFontSize'
                  min='0.5'
                  max='4'
                  step='0.125'
                  value={state.subtitleFontSize}
                  onChange={handleSubtitleFontSizeChange}
                />
                <SliderNumberInput
                  type='number'
                  value={state.subtitleFontSize}
                  onChange={handleSubtitleFontSizeChange}
                  step='0.125'
                  min='0.5'
                  max='4'
                />
              </SliderItem>
            </ConfigItem>
          </ConfigRow>
          <ConfigRow>
            <ConfigItem>
              <Label htmlFor='fileName'>파일 이름</Label>
              <Input id='fileName' value={state.fileName} onChange={(e) => state.setFileName(e.target.value)} />
            </ConfigItem>
          </ConfigRow>
        </ConfigBody>
        <Button onClick={handleSave}>이미지 저장</Button>
      </div>
    </Card>
  );
}
