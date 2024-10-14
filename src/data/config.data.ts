import { IConfigData } from '@/src/entities';

export const configData: IConfigData = {
  title: '사이트 이름',
  description: '사이트 설명',
  keywords: '',
  author: {
    name: 'NIHILncunia',
    url: 'https://github.com/NIHILncunia',
  },
  type: 'website',
  url: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : '',
  image: {
    link: '/opengraph-image.png',
    alt: 'site image',
  },
  version: 'v0.0.0',
  googleVerfi: '',
  googleAdSrc: '',
  googleAnalyticsId: '',
  get isBaseUrl() {
    return `${this.url}/api`;
  },
};
