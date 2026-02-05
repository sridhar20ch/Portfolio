import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-slate-200 py-8 mt-12 no-print">
      <div className="container mx-auto px-4 text-center">
        <p className="text-emerald-700 font-serif italic text-lg mb-2">
          "The Nature wrote the reactions; chemistry learns to read them."
        </p>
        <p className="text-slate-400 text-xs">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};