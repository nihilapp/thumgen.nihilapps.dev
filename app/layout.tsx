import React from 'react';
import { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import '@/src/styles/tailwind.css';
import Script from 'next/script';
import { configData } from '@/src/data';
import { LayoutProviders } from '@/app/_layouts';

export const metadata: Metadata = {
  metadataBase: new URL(configData.url),
  title: {
    template: `%s - ${configData.title}`,
    default: configData.title,
  },
  description: configData.description,
  keywords: configData.keywords,
  authors: {
    name: configData.author.name,
    url: configData.author.url,
  },
  generator: 'Jetbrains Webstorm',
  openGraph: {
    title: 'home',
    description: configData.description,
    locale: 'ko_KR',
    type: 'website',
    siteName: configData.title,
    url: configData.url,
    images: [
      {
        url: `${configData.url}/opengraph-image.png`,
        width: 1920,
        height: 1080,
        alt: 'site image',
      },
      {
        url: `${configData.url}/twitter-image.png`,
        width: 1920,
        height: 1080,
        alt: 'twitter site image',
      },
    ],
  },
  alternates: {
    canonical: configData.url,
  },
  other: {
    'google-site-verification': configData.googleVerfi,
    version: configData.version,
  },
};

interface Props {
  children: React.ReactNode;
}

export default function AppLayout({ children, }: Props) {
  return (
    <html lang='ko'>
      <head>
        <Script
          async
          src={configData.googleAdSrc}
          crossOrigin='anonymous'
        />
        <GoogleAnalytics gaId={configData.googleAnalyticsId} />
      </head>
      <body suppressHydrationWarning>
        <LayoutProviders>
          {children}
        </LayoutProviders>
      </body>
    </html>
  );
}
