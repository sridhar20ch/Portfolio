import React from 'react';
import { Education } from '../types';

interface EducationCardProps {
  data: Education;
}

export const EducationCard: React.FC<EducationCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{data.degree}</h3>
          <div className="text-slate-600 font-medium">{data.institution}</div>
          <div className="flex flex-wrap gap-2 mt-3">
             {data.details.map((detail, i) => (
               <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-indigo-50 text-indigo-800">
                 {detail}
               </span>
             ))}
          </div>
        </div>
        <div className="text-sm font-semibold text-slate-400">
          {data.year}
        </div>
      </div>
    </div>
  );
};