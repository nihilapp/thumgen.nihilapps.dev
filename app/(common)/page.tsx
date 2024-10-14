import React from 'react';
import { setMeta } from '@/src/utils';
import { Home } from '@/app/(common)/_components';

interface Props {
  //
}

export const metadata = setMeta({
  title: '홈',
  url: '/',
});

export default function HomePage() {
  return (
    <Home />
  );
}
