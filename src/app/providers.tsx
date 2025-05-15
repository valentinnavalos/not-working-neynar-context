'use client';

import dynamic from 'next/dynamic';
import { NeynarContextProvider, Theme } from '@neynar/react';

const WagmiProvider = dynamic(() => import('@/contexts/wagmi'), {
  ssr: false,
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider>
      <NeynarContextProvider
        settings={{
          clientId: process.env.NEXT_PUBLIC_NEYNAR_CLIENT_ID || '',
          defaultTheme: Theme.Light,
        }}
      >
        {children}
      </NeynarContextProvider>
    </WagmiProvider>
  );
}
