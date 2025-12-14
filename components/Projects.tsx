import React from 'react';
import { PROJECTS_DATA } from '../constants';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
            <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                A selection of projects demonstrating full-stack capabilities, secure authentication, and real-time features.
            </p>
            </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, idx) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="group relative bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:border-primary-500/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
                
                <div className="h-2 bg-gradient-to-r from-primary-500 to-purple-500"></div>
                
                <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 transition-transform duration-300 group-hover:scale-110">
                        <FolderGit2 size={24} />
                    </div>
                    <div className="flex space-x-2">
                        <a href="https://github.com/raushan074" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors hover:scale-110 transform">
                            <Github size={20} />
                        </a>
                        {project.link && (
                            <a href={project.link} className="text-slate-400 hover:text-primary-600 transition-colors hover:scale-110 transform">
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs font-semibold bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 rounded transition-all duration-300 group-hover:border-primary-300 dark:group-hover:border-primary-700 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 group-hover:text-primary-700 dark:group-hover:text-primary-300">
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
    </section>
  );
};