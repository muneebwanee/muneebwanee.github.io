import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wallet, Github, Linkedin, Twitter, Cpu, CheckCircle2, Globe, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24 pb-20">
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center text-left"
        >
          <div className="flex items-center gap-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
            </span>
            <span className="text-brand-orange font-mono text-xs tracking-[0.2em] uppercase font-bold">System Online</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.9] text-white">
            I Build. <br />
            <span className="text-gray-700">You Prosper.</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-600">
              You Owe Me.
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-lg leading-relaxed font-light border-l border-white/10 pl-6">
            I am <strong className="text-white">Muneeb Wani</strong>. I create the digital infrastructure you take for granted. Generosity is my passion. Accepting my charity is yours.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => scrollToSection('pay')}
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Settle Your Debt <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-transparent border border-white/10 text-white font-bold rounded-full hover:bg-white/5 hover:border-white/20 transition-all"
            >
               View Assets
            </button>
          </div>

          <div className="flex gap-6 mt-16 opacity-50 hover:opacity-100 transition-opacity">
             <a href="https://github.com/muneebwanee" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
             <a href="#" className="hover:text-blue-400 transition-colors"><Twitter className="w-5 h-5" /></a>
             <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </motion.div>

        {/* Right Column: Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-[450px] mx-auto lg:ml-auto"
        >
            {/* Card Outer Shell */}
            <div className="relative bg-[#0A0A0A] rounded-[40px] border border-white/5 p-2 shadow-2xl shadow-black">
                <div className="relative z-10 bg-[#0c0c0c] rounded-[32px] p-8 md:p-10 overflow-hidden min-h-[580px] flex flex-col">
                    
                    {/* Header */}
                    <div className="flex justify-between items-start mb-12">
                        <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center border border-white/5 shadow-inner">
                           <Wallet className="w-6 h-6 text-brand-orange" />
                        </div>
                        <div className="text-right">
                           <div className="text-[10px] text-gray-500 font-mono uppercase tracking-[0.2em] mb-2">Classification</div>
                           <div className="text-2xl font-black text-white tracking-tighter">ELITE DEV</div>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="flex justify-between items-center mb-12 pb-12 border-b border-white/5">
                        <div>
                           <div className="text-[10px] text-gray-500 font-mono uppercase tracking-[0.2em] mb-2">Expertise</div>
                           <div className="text-white font-bold text-lg">Full Stack</div>
                        </div>
                        <div className="text-right">
                           <div className="text-[10px] text-gray-500 font-mono uppercase tracking-[0.2em] mb-2">Availability</div>
                           <div className="text-green-400 font-bold text-lg flex items-center justify-end gap-2">
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                              </span>
                              Selective
                           </div>
                        </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="mb-auto">
                        <div className="flex items-center gap-2 mb-6 text-gray-400 text-[10px] font-mono uppercase tracking-[0.2em]">
                           <Cpu className="w-3 h-3" /> Architecture
                        </div>
                        <div className="flex flex-wrap gap-2.5">
                           {['React', 'Next.js', 'Node.js', 'Docker', 'JavaScript', 'TypeScript', 'Kotlin', 'Python', 'C++', 'PHP', 'HTML', 'CSS', 'Shell', 'Batchfile'].map((tech) => (
                               <span key={tech} className="px-3 py-1.5 bg-[#151515] border border-white/5 rounded-lg text-xs text-gray-400 hover:text-white hover:border-brand-orange/30 transition-all cursor-default font-medium">
                                   {tech}
                               </span>
                           ))}
                        </div>
                    </div>

                    {/* Simplified Footer Profile */}
                    <div className="mt-12 bg-[#121212] rounded-2xl p-4 flex items-center gap-4 border border-white/5">
                        {/* Logo removed */}
                        <div className="flex-1">
                           <div className="text-white font-bold text-sm flex items-center gap-1.5">
                              Muneeb Wani <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-500/10" />
                           </div>
                           <div className="text-gray-600 text-[10px] font-mono uppercase tracking-wider">muneebwanee</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Aesthetic Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-orange/5 blur-[120px] -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};