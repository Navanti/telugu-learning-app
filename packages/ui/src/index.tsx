import type { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <section style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '12px' }}>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}
