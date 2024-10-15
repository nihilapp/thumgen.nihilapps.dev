'use client';

import { useRef, useEffect, useCallback } from 'react';
import {
  Button, Input, Label, Canvas, Card, Screen,
  ConfigBody, ConfigRow, TitleNumberItem, ConfigItem,
  ColorItem, ColorInput, ColorCodeText,
  SliderItem, SliderInput, SliderNumberInput,
  ColorSwatch, ColorSwatchContainer,
  AdPlaceholder,
  Select
} from '@/app/(common)/_components';
import { ConfigSection } from '@/app/(common)/_components/ConfigSection';
import { useThumbnailState } from '@/src/hooks/useThumbnailState';
import { bgColorSwatches, textColorSwatches } from '@/src/data';
import {
  createOnChangeTitle,
  createOnChangeSeriesNumber,
  createOnChangeSubtitle,
  createHandleTitleFontSizeChange,
  createHandleSubtitleFontSizeChange,
  createOnChangeTextColor,
  createOnChangeBgColor
} from '@/app/(common)/_functions';

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
      ctx.font = `bold ${titleFontSizePx}px 'Noto Sans CJK KR', sans-serif`;
      ctx.fillText(displayTitle, centerX, centerY - titleFontSizePx / 2);

      ctx.font = `${subtitleFontSizePx}px 'Noto Sans CJK KR', sans-serif`;
      ctx.fillText(state.subtitle, centerX, centerY + titleFontSizePx / 2 + 10);
    } else {
      ctx.font = `bold ${titleFontSizePx}px 'Noto Sans CJK KR', sans-serif`;
      ctx.fillText(displayTitle, centerX, centerY);
    }
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `${state.fileName}.${state.fileExtension}`;
    link.href = canvas.toDataURL(`image/${state.fileExtension}`);
    link.click();
  };

  const {
    setTitle,
    setSeriesNumber,
    setSubtitle,
    setTitleFontSize,
    setSubtitleFontSize,
    setTextColor,
    setBgColor,
    setFileName,
    setFileExtension,
  } = state;

  const onChangeTitle = useCallback(
    createOnChangeTitle(setTitle),
    [ setTitle, ]
  );

  const onChangeSeriesNumber = useCallback(
    createOnChangeSeriesNumber(setSeriesNumber),
    [ setSeriesNumber, ]
  );

  const onChangeSubtitle = useCallback(
    createOnChangeSubtitle(setSubtitle),
    [ setSubtitle, ]
  );

  const handleTitleFontSizeChange = useCallback(
    createHandleTitleFontSizeChange(setTitleFontSize),
    [ setTitleFontSize, ]
  );

  const handleSubtitleFontSizeChange = useCallback(
    createHandleSubtitleFontSizeChange(setSubtitleFontSize),
    [ setSubtitleFontSize, ]
  );

  const onChangeTextColor = useCallback(
    createOnChangeTextColor(setTextColor),
    [ setTextColor, ]
  );

  const onChangeBgColor = useCallback(
    createOnChangeBgColor(setBgColor),
    [ setBgColor, ]
  );

  return (
    <Card>
      <div>
        <Screen>
          <Canvas ref={canvasRef} />
        </Screen>
        <AdPlaceholder>
          광고 영역
        </AdPlaceholder>
        <ConfigBody>
          <ConfigSection>
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
            </ConfigRow>
            <ConfigRow>
              <ConfigItem>
                <Label htmlFor='subtitle'>부제목 (선택사항)</Label>
                <Input id='subtitle' value={state.subtitle} onChange={onChangeSubtitle} />
              </ConfigItem>
            </ConfigRow>
          </ConfigSection>

          <ConfigSection>
            <ConfigRow>
              <ConfigItem>
                <Label htmlFor='bgColor'>배경색</Label>
                <ColorItem>
                  <ColorInput
                    id='bgColor'
                    type='color'
                    value={state.bgColor}
                    onChange={(e) => onChangeBgColor(e.target.value)}
                  />
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
            </ConfigRow>
            <ConfigRow>
              <ConfigItem>
                <Label htmlFor='textColor'>글자색</Label>
                <ColorItem>
                  <ColorInput
                    id='textColor'
                    type='color'
                    value={state.textColor}
                    onChange={(e) => onChangeTextColor(e.target.value)}
                  />
                  <ColorCodeText>{state.textColor}</ColorCodeText>
                </ColorItem>
                <ColorSwatchContainer>
                  {textColorSwatches.map(({ color, name, }) => (
                    <ColorSwatch
                      key={color}
                      color={color}
                      onClick={() => onChangeTextColor(color)}
                      aria-label={`${name} 글자색 ${color}`}
                      title={name}
                    />
                  ))}
                </ColorSwatchContainer>
              </ConfigItem>
            </ConfigRow>
          </ConfigSection>

          <ConfigSection>
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
            </ConfigRow>
            <ConfigRow>
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
          </ConfigSection>

          <ConfigSection>
            <ConfigRow>
              <ConfigItem>
                <Label htmlFor='fileName'>파일 이름</Label>
                <Input
                  id='fileName'
                  value={state.fileName}
                  onChange={(e) => setFileName(e.target.value)}
                />
              </ConfigItem>
              <ConfigItem>
                <Label htmlFor='fileExtension'>파일 확장자</Label>
                <Select
                  id='fileExtension'
                  value={state.fileExtension}
                  onChange={(e) => setFileExtension(e.target.value)}
                >
                  <option value='png'>PNG</option>
                  <option value='jpg'>JPG</option>
                  <option value='webp'>WebP</option>
                </Select>
              </ConfigItem>
            </ConfigRow>
          </ConfigSection>
        </ConfigBody>
        <Button onClick={handleSave}>이미지 저장</Button>
      </div>
    </Card>
  );
}
