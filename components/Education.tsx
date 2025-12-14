import React from 'react';
import { EDUCATION_DATA, ADDITIONAL_INFO } from '../constants';
import { GraduationCap, Award, Languages, Trophy, BadgeCheck } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const Education: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Education Column */}
          <RevealOnScroll delay={100}>
            <div>
                <div className="flex items-center mb-8">
                    <GraduationCap className="text-primary-600 mr-3" size={32} />
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Education</h2>
                </div>
                
                <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-700 pl-8 ml-4">
                {EDUCATION_DATA.map((edu, idx) => (
                    <div key={idx} className="relative">
                    <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-slate-900 bg-primary-600"></span>
                    <div className="mb-1 text-sm text-primary-600 font-semibold">{edu.year}</div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.institution}</h3>
                    <div className="text-slate-700 dark:text-slate-300 font-medium">{edu.degree}</div>
                    <div className="text-slate-500 dark:text-slate-400 text-sm mt-1">{edu.score}</div>
                    </div>
                ))}
                </div>
            </div>
          </RevealOnScroll>

          {/* Additional Info Column */}
          <RevealOnScroll delay={300}>
            <div>
                <div className="flex items-center mb-8">
                    <Trophy className="text-yellow-500 mr-3" size={32} />
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Achievements & Info</h2>
                </div>

                <div className="grid gap-6">
                    {ADDITIONAL_INFO.map((info, idx) => {
                        let Icon = Award;
                        if (info.title.includes("Language")) Icon = Languages;
                        if (info.title.includes("Training")) Icon = BadgeCheck;

                        return (
                            <div key={idx} className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                                <div className="p-2 bg-white dark:bg-slate-700 rounded-lg text-primary-600 dark:text-primary-400 shadow-sm">
                                    <Icon size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">{info.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm">{info.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};