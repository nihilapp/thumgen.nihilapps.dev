import { Metadata } from 'next';
import { configData } from '@/src/data';
import { ISiteMeta } from '@/src/entities';

export const setMeta = (meta: ISiteMeta): Metadata => {
  const siteDescription = meta.description || configData.description;
  const siteKeywords = meta.keywords
    ? `${configData.keywords}, ${meta.keywords}`
    : configData.keywords;
  const siteUrl = `${configData.url}${meta.url}`;
  const siteImageLink = meta.image
    ? `${configData.url}${meta.image.link}`
    : `${configData.url}${configData.image.link}`;
  const siteImageAlt = meta.image?.alt || configData.image.alt;

  return {
    metadataBase: new URL(configData.url),
    title: meta.title,
    description: siteDescription,
    keywords: siteKeywords,
    authors: {
      name: configData.author.name,
      url: configData.author.url,
    },
    openGraph: {
      title: meta.title,
      description: siteDescription,
      locale: 'ko_KR',
      type: 'website',
      siteName: configData.title,
      url: siteUrl,
      images: [
        {
          url: siteImageLink,
          width: 1920,
          height: 1080,
          alt: siteImageAlt,
        },
      ],
    },
    alternates: {
      canonical: siteUrl,
    },
    other: {
      version: configData.version,
    },
  };
};
