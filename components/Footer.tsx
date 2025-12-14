import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white py-12 border-t border-slate-200 dark:border-slate-800 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
        <div className="flex justify-center space-x-8 mb-8">
          <a 
            href={SOCIAL_LINKS.linkedin} 
            target="_blank" 
            rel="noreferrer" 
            className="text-[#0077b5] transition-transform transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href={SOCIAL_LINKS.github} 
            target="_blank" 
            rel="noreferrer" 
            className="text-black dark:text-white transition-colors transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a 
            href={SOCIAL_LINKS.email} 
            className="text-[#EA4335] dark:text-white transition-colors transform hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        <p className="text-slate-600 dark:text-slate-400 flex items-center justify-center gap-1 text-sm">
          Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Raushan Srivastava
        </p>
        <p className="text-slate-500 dark:text-slate-500 text-xs mt-2">© {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
};