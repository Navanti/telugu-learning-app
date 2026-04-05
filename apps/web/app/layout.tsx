import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Telugu Learning App',
  description: 'Monorepo starter for Telugu immersion learning'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="te">
      <body style={{ fontFamily: 'Noto Sans Telugu, system-ui, sans-serif', margin: 24 }}>{children}</body>
    </html>
  );
}
