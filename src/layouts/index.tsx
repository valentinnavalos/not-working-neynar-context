'use client';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#1a1f33] via-[#1a1f33] to-[#11142a]">
      <div className="relative z-10 flex flex-col items-center p-4 pb-0">
        {children}
      </div>
    </main>
  );
}
