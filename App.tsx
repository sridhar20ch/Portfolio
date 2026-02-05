import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { ExperienceCard } from './components/ExperienceCard';
import { EducationCard } from './components/EducationCard';
import { PublicationCard } from './components/PublicationCard';
import { SkillGroup } from './components/SkillGroup';
import { CourseList } from './components/CourseList';
import { ListItem } from './components/ListItem';
import { AwardItem } from './components/AwardItem';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { 
  personalInfo, 
  researchExperience, 
  education, 
  publications, 
  skills, 
  offlineCourses, 
  onlineCourses, 
  honorsAndAwards, 
  conferences, 
  additionalInfo
} from './constants';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('profile');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const renderContent = () => {
    switch (activePage) {
      case 'profile':
        return (
          <div className="animate-fade-in space-y-12">
            <Header info={personalInfo} />
            
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Education Section */}
                <section>
                    <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-200">
                        <span className="flex items-center justify-center w-8 h-8 rounded bg-indigo-100 text-academic-blue">
                            <i className="fas fa-graduation-cap text-sm"></i>
                        </span>
                        <h2 className="text-2xl font-bold text-slate-800">Education</h2>
                    </div>
                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <EducationCard key={index} data={edu} />
                        ))}
                    </div>
                </section>

                {/* Additional Info Section */}
                <section>
                    <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-200">
                        <span className="flex items-center justify-center w-8 h-8 rounded bg-emerald-100 text-emerald-600">
                            <i className="fas fa-info-circle text-sm"></i>
                        </span>
                        <h2 className="text-2xl font-bold text-slate-800">Additional Information</h2>
                    </div>
                    <ul className="space-y-3">
                        {additionalInfo.map((item, index) => (
                        <ListItem key={index} text={item} icon="fa-check" colorClass="text-emerald-600" />
                        ))}
                    </ul>
                </section>
            </div>
          </div>
        );
      case 'research':
        return (
          <div className="animate-fade-in space-y-16">
            <section>
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-200">
                    <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-50 text-academic-blue text-xl">
                        <i className="fas fa-flask"></i>
                    </span>
                    <h2 className="text-3xl font-bold text-slate-900 font-serif tracking-tight">Research Experience</h2>
                </div>
                <div className="space-y-8">
                {researchExperience.map((exp, index) => (
                    <ExperienceCard key={index} data={exp} />
                ))}
                </div>
            </section>

            <section>
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-200">
                    <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-50 text-academic-blue text-xl">
                        <i className="fas fa-book-open"></i>
                    </span>
                    <h2 className="text-3xl font-bold text-slate-900 font-serif tracking-tight">Publications</h2>
                </div>
                <div className="space-y-6">
                {publications.map((pub, index) => (
                    <PublicationCard key={index} data={pub} />
                ))}
                </div>
            </section>
          </div>
        );
      case 'skills':
        return (
          <Section title="Technical Skills" icon="fa-laptop-code" id="skills">
            <div className="bg-white p-8 border border-slate-200 rounded-sm">
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
                <SkillGroup title="Experimental (Hands-on)" skills={skills.experimental} />
                <SkillGroup title="Instrumentation (Theoretical)" skills={skills.theoretical} />
                <div className="md:col-span-2 pt-4 border-t border-slate-100">
                  <SkillGroup title="Computational Expertise" skills={skills.computational} />
                </div>
              </div>
            </div>
          </Section>
        );
      case 'certifications':
        return (
          <Section title="Certifications" icon="fa-certificate" id="certifications">
            <div className="grid md:grid-cols-2 gap-8 bg-white p-8 border border-slate-200 rounded-sm">
              <CourseList title="Offline Courses" courses={offlineCourses} />
              <CourseList title="Online Courses" courses={onlineCourses} />
            </div>
          </Section>
        );
      case 'conferences':
        return (
          <Section title="Conferences & Workshops" icon="fa-users" id="conferences">
            <ul className="space-y-3">
              {conferences.map((item, index) => (
                <ListItem key={index} text={item} icon="fa-microphone" colorClass="text-academic-blue" />
              ))}
            </ul>
          </Section>
        );
      case 'awards':
        return (
          <Section title="Honors & Awards" icon="fa-trophy" id="awards">
            <div className="space-y-4">
              {honorsAndAwards.map((item, index) => (
                <AwardItem key={index} data={item} icon="fa-medal" colorClass="text-yellow-600" />
              ))}
            </div>
          </Section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl mt-36 md:mt-20 print:mt-0">
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
};

export default App;