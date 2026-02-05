import React from 'react';

interface NavigationProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activePage, setActivePage }) => {
  const links = [
    { id: 'profile', label: 'Profile' },
    { id: 'research', label: 'Research' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'conferences', label: 'Conferences' },
    { id: 'awards', label: 'Awards' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50 no-print">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center py-3 md:h-16 md:py-0 gap-3 md:gap-0">
          <div 
            className="text-xl font-bold text-slate-800 tracking-tight cursor-pointer" 
            onClick={() => setActivePage('profile')}
          >
            <span className="text-indigo-600">R.</span> Sridhar
          </div>

          {/* Menu - Always visible, wraps on mobile */}
          <div className="flex flex-wrap justify-center gap-2">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => setActivePage(link.id)}
                className={`text-sm font-medium px-3 py-1.5 rounded-full transition-all ${
                  activePage === link.id 
                    ? 'text-white bg-academic-blue shadow-sm' 
                    : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};