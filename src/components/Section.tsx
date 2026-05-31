import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mb-8 animate-fadeUp">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent-cyan">
          {eyebrow}
        </p>
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
          {title}
        </h2>
      </div>
      <div className="animate-fadeUp" style={{ animationDelay: '90ms' }}>
        {children}
      </div>
    </section>
  );
}
