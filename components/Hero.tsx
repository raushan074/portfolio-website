import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import { SOCIAL_LINKS, PROFILE_IMAGE_URL } from "../constants";
import { RevealOnScroll } from './RevealOnScroll';

export const Hero: React.FC = () => {
  const fullText = "Raushan Srivastava";
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      if (text.length > 0) {
        // Deleting
        timeout = setTimeout(() => {
          setText(prev => prev.slice(0, -1));
        }, 75); // Deleting speed
      } else {
        // Finished deleting, wait before starting to type again
        timeout = setTimeout(() => {
          setIsDeleting(false);
        }, 500); 
      }
    } else {
      if (text.length < fullText.length) {
        // Typing
        timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 150); // Typing speed
      } else {
        // Finished typing, wait before starting to delete
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 3000); // Hold full text for 3 seconds
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        {/* Inject custom animation styles for cursor blink */}
        <style>{`
            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
            }
            .cursor-blink {
                animation: blink 1s step-end infinite;
            }
        `}</style>

      {/* Background Decor - ensuring z-index is -1 to prevent overlapping content */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl z-[-1] animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl z-[-1] animate-pulse-slow delay-700"></div>

      {/* Main Content - Added relative z-10 to ensure it sits above background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 rounded-full mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                Currently Software Engineer at <span className="font-bold">HCLTech</span>
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Hello, I'm <br />
                <span className="inline-block min-h-[1.2em]">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">
                    {text}
                    </span>
                    <span className="text-primary-600 cursor-blink ml-1">|</span>
                </span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Aspiring Software Engineer optimizing performance and developing innovative solutions. 
                Expert in <span className="font-semibold text-primary-600 dark:text-primary-400">Java, Spring Boot, React.js</span>.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href={SOCIAL_LINKS.email} className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition-transform transform hover:-translate-y-1">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-[#0077b5] transition-colors transform hover:scale-110">
                <Linkedin size={28} />
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-black dark:text-white transition-colors transform hover:scale-110">
                <Github size={28} />
              </a>
              <a href={SOCIAL_LINKS.leetcode} target="_blank" rel="noreferrer" className="text-[#ffa116] transition-colors transform hover:scale-110">
                <SiLeetcode size={28} />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative group">
            <RevealOnScroll delay={400}>
                <div className="relative z-10">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
                    <img 
                        src={PROFILE_IMAGE_URL} 
                        alt="Raushan Srivastava" 
                        className="object-cover w-full h-full transform transition duration-500 hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-white font-medium text-center">Software Engineer</p>
                    </div>
                    </div>
                </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};