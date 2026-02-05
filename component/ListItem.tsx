import React from 'react';

interface ListItemProps {
  text: string;
  icon: string;
  colorClass: string;
}

export const ListItem: React.FC<ListItemProps> = ({ text, icon, colorClass }) => {
  // Check if text has bold parts (e.g. titles before colons)
  const parts = text.split(':');
  const hasTitle = parts.length > 1;

  return (
    <li className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-slate-100">
      <span className={`mt-0.5 ${colorClass}`}>
        <i className={`fas ${icon}`}></i>
      </span>
      <span className="text-slate-700 text-sm leading-relaxed">
        {hasTitle ? (
          <>
            <strong className="font-semibold text-slate-900">{parts[0]}:</strong>
            {parts.slice(1).join(':')}
          </>
        ) : (
          text
        )}
      </span>
    </li>
  );
};