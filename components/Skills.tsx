import React from 'react';
import { SKILLS_DATA } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden scroll-mt-20">
        {/* Background blobs */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                    Technical Arsenal
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full mb-6"></div>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    The tools and technologies I use to bring ideas to life.
                </p>
            </div>
        </RevealOnScroll>

        <div className="space-y-16">
          {SKILLS_DATA.map((category, idx) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-200 mb-10 relative">
                        <span className="relative z-10 bg-slate-50 dark:bg-slate-950 px-4">{category.category}</span>
                        <span className="absolute left-1/2 top-1/2 w-48 h-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2 -translate-y-1/2 -z-0"></span>
                    </h3>
                    
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                        {category.skills.map((skill, sIdx) => {
                            const hasColor = !!skill.color;
                            
                            return (
                                <div key={sIdx} className="group flex flex-col items-center gap-3">
                                    <div className="relative flex items-center justify-center w-24 h-24 md:w-28 md:h-28 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer overflow-hidden">
                                        
                                        {/* Background Glow on Hover */}
                                        <div 
                                            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                            style={{ backgroundColor: skill.color || '#64748b' }}
                                        ></div>

                                        {/* Icon */}
                                        {skill.icon && (
                                            <div 
                                                className={`relative z-10 transition-transform duration-300 group-hover:scale-110 ${!hasColor ? 'text-slate-700 dark:text-slate-200' : ''}`}
                                                style={hasColor ? { color: skill.color, filter: `drop-shadow(0 0 2px ${skill.color})` } : {}}
                                            >
                                                <skill.icon size={48} />
                                            </div>
                                        )}
                                    </div>
                                    <span className="font-semibold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                        {skill.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};