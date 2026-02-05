import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-slate-200 py-8 mt-12 no-print">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-500 text-sm">
          © {currentYear} R. Sridhar. All rights reserved.
        </p>
        <div className="mt-2 text-xs text-slate-400">
          Designed with <i className="fas fa-heart text-red-400 mx-1"></i> for Science
        </div>
      </div>
    </footer>
  );
};