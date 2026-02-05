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
          <h3 className="text-xl font-bold text-slate-800">{data.role}</h3>
          <div className="text-indigo-600 font-medium mt-1">{data.title}</div>
        </div>
        <span className="inline-block bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
          {data.duration}
        </span>
      </div>
      
      <div className="text-sm text-slate-500 mb-4 italic">
        Advisor: {data.advisor} | {data.institution}
      </div>

      <ul className="space-y-2">
        {data.description.map((item, index) => (
          <li key={index} className="flex gap-2.5 text-slate-600 leading-relaxed">
            <span className="text-indigo-400 mt-1.5 text-xs"><i className="fas fa-circle"></i></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};