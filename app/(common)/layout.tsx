import React from 'react';
import { AppLayout } from '@/app/(common)/_layouts';

interface Props {
  children: React.ReactNode;
}

export default function layout({ children, }: Props) {
  return (
    <AppLayout>
      {children}
    </AppLayout>
  );
}
