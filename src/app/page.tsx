'use client';

import {
  NeynarAuthButton,
  SIWN_variant,
  useNeynarContext,
} from '@neynar/react';

export default function Home() {
  const { user } = useNeynarContext();

  console.log('neynar user', user);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <NeynarAuthButton variant={SIWN_variant.FARCASTER} />
      </div>
    </main>
  );
}
