import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { Briefcase, Calendar } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
            <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
            </div>
        </RevealOnScroll>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-10 top-4 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800"></div>

          <div className="space-y-12">
            {EXPERIENCE_DATA.map((exp, idx) => (
              <RevealOnScroll key={idx} delay={idx * 200}>
                <div className="relative pl-12 md:pl-28">
                    {/* Timeline Node */}
                    <div className="absolute left-0 md:left-6 top-0 flex items-center justify-center w-8 h-8 md:w-8 md:h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-primary-100 dark:border-primary-900 z-10 mt-1">
                        <div className="w-3 h-3 rounded-full bg-primary-600"></div>
                    </div>

                    {/* Content Card */}
                    <div className="glass-card p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-primary-500 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                        
                        <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                             <div className="flex items-center gap-4">
                                {exp.logo ? (
                                    <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 h-16 w-16 flex items-center justify-center flex-shrink-0">
                                        <img src={exp.logo} alt={exp.company} className="max-h-full max-w-full object-contain" />
                                    </div>
                                ) : (
                                    <div className="h-14 w-14 bg-primary-600 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-primary-500/30">
                                        {exp.company.charAt(0)}
                                    </div>
                                )}
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{exp.role}</h3>
                                    <p className="text-lg text-slate-600 dark:text-slate-300 font-medium">{exp.company}</p>
                                </div>
                             </div>
                             
                             <div className="flex items-center text-slate-500 dark:text-slate-400 font-medium bg-slate-100 dark:bg-slate-800/50 px-4 py-2 rounded-full text-sm w-fit self-start md:self-auto border border-slate-200 dark:border-slate-700">
                                <Calendar size={14} className="mr-2" />
                                {exp.period}
                            </div>
                        </div>

                        <div className="border-l-2 border-slate-100 dark:border-slate-800 pl-4 mb-6">
                            <ul className="space-y-3">
                                {exp.description.map((point, i) => (
                                    <li key={i} className="flex items-start text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                                        <span className="mr-3 mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0"></span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {exp.techStack?.map((tech) => (
                                <span key={tech} className="px-3 py-1.5 bg-primary-50 dark:bg-primary-900/10 text-primary-700 dark:text-primary-300 text-sm rounded-lg font-medium border border-primary-100 dark:border-primary-900/30">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};