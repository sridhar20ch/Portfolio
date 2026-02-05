import React from 'react';
import { ResearchExperience } from '../types';

interface ExperienceCardProps {
  data: ResearchExperience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100 hover:border-indigo-100 transition-colors">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
        <div>
          <h3 className="text-xl font-bold text-slate-800 font-serif">{data.role}</h3>
          <div className="text-indigo-600 font-medium mt-1 text-lg">{data.title}</div>
        </div>
        <span className="inline-block text-slate-500 text-sm font-mono font-medium bg-slate-50 px-3 py-1 rounded border border-slate-200 whitespace-nowrap">
          {data.duration}
        </span>
      </div>
      
      <div className="text-sm text-slate-600 mb-4 flex flex-wrap gap-x-2 items-center">
        <span className="font-semibold">Advisor:</span> {data.advisor} 
        <span className="text-slate-300">|</span> 
        <span className="italic">{data.institution}</span>
      </div>

      <ul className="space-y-2">
        {data.description.map((item, index) => (
          <li key={index} className="flex gap-2.5 text-slate-600 leading-relaxed text-justify">
            <span className="text-indigo-400 mt-1.5 text-xs"><i className="fas fa-circle"></i></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};