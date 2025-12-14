import React from 'react';
import { SUMMARY } from '../constants';
import { Target, Lightbulb, Zap } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const About: React.FC = () => {
  const cards = [
    { icon: Target, title: "Foundation", desc: "Strong base in OOP & DSA with C++ and Java" },
    { icon: Lightbulb, title: "Problem Solver", desc: "Passionate about solving complex algorithmic challenges" },
    { icon: Zap, title: "Impact", desc: "Eager to contribute to impactful projects in dynamic environments" },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
            <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
            </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <RevealOnScroll delay={200}>
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
                Driven by Innovation & Performance
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {SUMMARY}
                </p>
                <div className="p-4 bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-500 rounded-r-lg">
                <p className="italic text-slate-700 dark:text-slate-300">
                    "Developing solutions that matter, optimizing code that performs."
                </p>
                </div>
            </div>
          </RevealOnScroll>

          <div className="grid gap-6">
            {cards.map((item, idx) => (
              <RevealOnScroll key={idx} delay={300 + idx * 100}>
                <div className="glass-card p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/50 rounded-lg text-primary-600 dark:text-primary-400">
                    <item.icon size={24} />
                    </div>
                    <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
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