import type { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-px bg-primary" />
      <span className="text-[10px] md:text-xs font-medium tracking-[0.15em] md:tracking-[0.2em] uppercase text-primary">
        {children}
      </span>
    </div>
  );
}
