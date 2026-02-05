import React from 'react';
import { Course } from '../types';

interface CourseListProps {
  title: string;
  courses: Course[];
}

export const CourseList: React.FC<CourseListProps> = ({ title, courses }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 h-full">
      <h3 className="text-lg font-bold text-indigo-900 mb-4 pb-2 border-b border-indigo-100 font-serif">{title}</h3>
      <div className="space-y-6">
        {courses.map((group, idx) => (
          <div key={idx}>
            <h4 className="font-bold text-slate-800 mb-2 text-sm">{group.institution}</h4>
            <ul className="space-y-2">
              {group.courses.map((c, cIdx) => (
                <li key={cIdx} className="text-sm text-slate-600 flex justify-between items-center bg-slate-50 px-3 py-2 rounded border border-transparent hover:border-slate-200 transition-colors">
                  <span className="font-medium">{c.name}</span>
                  <span className="text-xs text-slate-500 font-mono font-medium">{c.year}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};