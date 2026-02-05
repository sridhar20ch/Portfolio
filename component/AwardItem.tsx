import React from 'react';
import { Award } from '../types';

interface AwardItemProps {
  data: Award;
  icon: string;
  colorClass: string;
}

export const AwardItem: React.FC<AwardItemProps> = ({ data, icon, colorClass }) => {
  return (
    <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
      <div className="flex gap-4 items-start">
        <span className={`mt-1 text-lg ${colorClass} bg-slate-50 p-2 rounded-full w-10 h-10 flex items-center justify-center shrink-0`}>
          <i className={`fas ${icon}`}></i>
        </span>
        <div className="flex-grow pt-1.5">
           <h3 className="font-bold text-slate-900 font-serif text-lg leading-tight mb-2">{data.title}</h3>
           
           {data.description && (
              <p className="text-slate-700 text-sm">{data.description}</p>
           )}

           {data.items && data.items.length > 0 && (
            <ul className="space-y-2 mt-2">
              {data.items.map((item, idx) => (
                <li key={idx} className="text-slate-700 text-sm flex gap-2.5 items-start">
                  <i className={`fas fa-circle text-[6px] mt-2 opacity-60 ${colorClass}`}></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
           )}
        </div>
      </div>
    </div>
  );
};
