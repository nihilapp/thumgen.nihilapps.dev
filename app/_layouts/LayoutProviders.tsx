'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';
import StyledJsxRegistry from '@/app/registry';

interface Props {
  children?: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 60 * 10 * 1000,
      gcTime: 60 * 12 * 1000,
    },
    mutations: {
      retry: false,
      gcTime: 60 * 12 * 1000,
    },
  },
});

export function LayoutProviders({ children, }: Props) {
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <StyledJsxRegistry>
            {children}
          </StyledJsxRegistry>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}
