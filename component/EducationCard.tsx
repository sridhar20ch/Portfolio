import React from 'react';
import { Education } from '../types';

interface EducationCardProps {
  data: Education;
}

export const EducationCard: React.FC<EducationCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow">
      <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {data.logo && (
          <div className="shrink-0 flex items-center justify-center bg-slate-50 p-2 rounded-lg border border-slate-100 w-20 h-20">
             <img src={data.logo} alt={`${data.institution} logo`} className="w-full h-full object-contain" />
          </div>
        )}
        <div className="flex-1 flex flex-col md:flex-row justify-between items-start gap-4 w-full">
          <div>
            <h3 className="text-xl font-bold text-slate-900 font-serif">{data.degree}</h3>
            <div className="text-slate-700 font-medium text-lg mt-1">{data.institution}</div>
            <div className="flex flex-wrap gap-2 mt-3">
               {data.details.map((detail, i) => (
                 <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-50 text-indigo-800 border border-indigo-100">
                   {detail}
                 </span>
               ))}
            </div>
          </div>
          <div className="text-sm font-mono font-medium text-slate-500 whitespace-nowrap bg-slate-50 px-3 py-1 rounded border border-slate-200">
            {data.year}
          </div>
        </div>
      </div>
    </div>
  );
};