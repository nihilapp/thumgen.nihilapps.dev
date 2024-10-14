import { IConfigData } from '@/src/entities';

export const configData: IConfigData = {
  title: '썸네일 생성기',
  description: '블로그 포스트를 위한 맞춤형 썸네일 이미지를 쉽고 빠르게 생성할 수 있는 온라인 도구입니다. 제목, 부제목, 시리즈 번호, 배경색, 글자색 등을 사용자가 직접 설정하여 개성 있는 썸네일을 만들 수 있습니다.',
  keywords: '썸네일 생성, 블로그 썸네일, thumbnail generation, blog thumbnail',
  author: {
    name: 'NIHILncunia',
    url: 'https://github.com/NIHILncunia',
  },
  type: 'website',
  url: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://thumgen.nihilapps.dev',
  image: {
    link: '/opengraph-image.png',
    alt: 'site image',
  },
  version: 'v1.0.0',
  googleVerfi: '',
  googleAdSrc: '',
  googleAnalyticsId: '',
  get isBaseUrl() {
    return `${this.url}/api`;
  },
};
