import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  href?: string;
  actionLabel?: string;
};

export default function ServiceCard({ icon: Icon, title, children, href, actionLabel }: ServiceCardProps) {
  const content = (
    <>
      <div className="mb-5 grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/[0.06] text-accent-cyan transition group-hover:border-accent-cyan/40 group-hover:bg-accent-cyan/10">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-4 leading-7 text-slate-300">{children}</p>
      {actionLabel && (
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-cyan">
          {actionLabel}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className="panel group block h-full focus:outline-none focus:ring-2 focus:ring-accent-cyan/60 focus:ring-offset-2 focus:ring-offset-ink-950">
        {content}
      </a>
    );
  }

  return (
    <article className="panel group h-full">
      {content}
    </article>
  );
}
