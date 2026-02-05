import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  icon: string;
  children: ReactNode;
  id: string;
}

export const Section: React.FC<SectionProps> = ({ title, icon, children, id }) => {
  return (
    <div id={id} className="animate-fade-in min-h-[60vh]">
      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-200">
        <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-50 text-academic-blue text-xl">
            <i className={`fas ${icon}`}></i>
        </span>
        <h2 className="text-3xl font-bold text-slate-900 font-serif tracking-tight">{title}</h2>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};