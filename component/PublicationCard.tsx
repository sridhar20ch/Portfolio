import React from 'react';
import { Publication } from '../types';

interface PublicationCardProps {
  data: Publication;
}

export const PublicationCard: React.FC<PublicationCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100">
      <div className="mb-3">
        <h3 className="text-lg font-bold text-slate-800 italic font-serif">"{data.title}"</h3>
        <div className="flex items-center gap-2 mt-2 text-sm text-slate-500">
          <span>Advisor: {data.advisor}</span>
          <span>•</span>
          <span className="text-amber-600 font-semibold">{data.status}</span>
        </div>
      </div>
      <ul className="space-y-2 mt-4 border-t border-slate-100 pt-4">
        {data.description.map((item, index) => (
          <li key={index} className="flex gap-2 text-sm text-slate-600">
             <i className="fas fa-chevron-right text-indigo-400 text-xs mt-1"></i>
             <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};