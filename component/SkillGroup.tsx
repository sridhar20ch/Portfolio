import React from 'react';

interface SkillGroupProps {
  title: string;
  skills: string;
}

export const SkillGroup: React.FC<SkillGroupProps> = ({ title, skills }) => {
  // Split the string by commas to make badges, handling edge cases
  const skillList = skills.split(/,(?![^()]*\))/).map(s => s.trim()).filter(s => s);

  return (
    <div className="bg-slate-100 p-6 rounded-lg shadow-sm border border-slate-200">
      <h3 className="text-md font-bold text-slate-800 mb-4 uppercase tracking-wide text-xs">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skillList.map((skill, index) => (
          <span key={index} className="px-3 py-1 bg-white text-slate-700 text-sm rounded-md border border-slate-200 hover:border-indigo-200 transition-colors shadow-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};