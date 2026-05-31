import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
};

export default function ServiceCard({ icon: Icon, title, children }: ServiceCardProps) {
  return (
    <article className="panel group h-full">
      <div className="mb-5 grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/[0.06] text-accent-cyan transition group-hover:border-accent-cyan/40 group-hover:bg-accent-cyan/10">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-4 leading-7 text-slate-300">{children}</p>
    </article>
  );
}
