import React from 'react';
import { PersonalInfo } from '../types';

interface HeaderProps {
  info: PersonalInfo;
}

export const Header: React.FC<HeaderProps> = ({ info }) => {
  return (
    <div className="py-8 md:py-12 border-b border-slate-200">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start justify-between">
        
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start flex-1 text-center md:text-left">
           {/* Profile Photo */}
           <div className="shrink-0">
             <div className="relative">
                <div className="absolute inset-0 bg-academic-blue/5 rounded-full transform rotate-6 scale-105 pointer-events-none"></div>
                <img 
                  src={info.photo} 
                  alt={info.name} 
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-xl border-4 border-white bg-slate-100"
                />
             </div>
           </div>

           <div className="space-y-4">
            <div>
              <h1 className="text-7xl md:text-8xl font-bold text-slate-900 tracking-tight font-serif mb-3">
                {info.name}
              </h1>
              <div className="text-academic-blue text-xl font-medium tracking-wide">
                Chemistry Researcher
              </div>
            </div>
            
            <div className="flex flex-col gap-2 text-slate-600 text-sm items-center md:items-start">
              <div className="flex items-center gap-3">
                <span className="w-5 text-center text-slate-400"><i className="fas fa-map-marker-alt"></i></span>
                {info.location}
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 text-center text-slate-400"><i className="fas fa-phone"></i></span>
                {info.phone}
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 text-center text-slate-400"><i className="fas fa-envelope"></i></span>
                <a href={`mailto:${info.email}`} className="hover:text-academic-blue hover:underline transition-colors">
                  {info.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row md:flex-col gap-2 w-full md:w-auto mt-4 md:mt-0">
          <a 
            href={info.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 md:flex-none flex items-center justify-center gap-3 bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 px-5 py-2 rounded transition-all font-medium text-xs uppercase tracking-wider"
          >
            <i className="fab fa-linkedin text-lg text-[#0077b5]"></i> LinkedIn
          </a>
          <a 
            href={info.orcid} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 md:flex-none flex items-center justify-center gap-3 bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 px-5 py-2 rounded transition-all font-medium text-xs uppercase tracking-wider"
          >
            <i className="fab fa-orcid text-lg text-[#A6CE39]"></i> ORCID
          </a>
          <a 
            href={info.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 md:flex-none flex items-center justify-center gap-3 bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 px-5 py-2 rounded transition-all font-medium text-xs uppercase tracking-wider"
          >
            <i className="fa-brands fa-x-twitter text-lg text-slate-900"></i> Twitter
          </a>
          <a
              href="https://github.com/sridhar20ch/Portfolio/blob/main/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors shadow-sm whitespace-nowrap"
            >
              <DownloadIcon />
              Download CV
            </a>
        </div>
      </div>

      {info.about && (
        <div className="mt-8 pt-6">
          <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-200">
            <span className="flex items-center justify-center w-8 h-8 rounded bg-indigo-100 text-academic-blue">
                <i className="fas fa-user text-sm"></i>
            </span>
            <h2 className="text-2xl font-bold text-academic-blue font-serif tracking-tight">About</h2>
          </div>
          <p className="text-slate-700 leading-relaxed text-justify font-serif text-lg">
            {info.about}
          </p>
        </div>
      )}
    </div>
  );
};
