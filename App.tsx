import React, { useEffect, useState } from 'react';
import { Hero } from './Hero.tsx';
import { ProjectCard } from './ProjectCard.tsx';
import { PaymentSection } from './PaymentSection.tsx';
import { fetchProjects } from './githubService.ts';
import { GitHubRepo } from './types.ts';
import { Loader2, Wallet, ExternalLink, Crown, Github } from 'lucide-react';

const App: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [data] = await Promise.all([
        fetchProjects(),
        new Promise(resolve => setTimeout(resolve, 800))
      ]);
      setRepos(data);
      setLoading(false);
    };
    loadData();
  }, []);

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
    } else if (id === 'intro') {
       window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-orange selection:text-white bg-[#050505]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-6 cursor-pointer group"
            onClick={() => scrollToSection('intro')}
          >
            <div className="text-xl font-black tracking-tighter flex items-center gap-2 text-white group-hover:text-gray-200 transition-colors">
               <Wallet className="text-brand-orange w-6 h-6" /> <span className="text-gray-500">muneebwanee</span>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
              <button onClick={() => scrollToSection('intro')} className="hover:text-white transition-colors">Intro</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors">Assets</button>
              <button onClick={() => scrollToSection('pay')} className="hover:text-brand-orange transition-colors">Tribute</button>
            </div>

            <a 
              href="https://github.com/muneebwanee" 
              target="_blank" 
              rel="noreferrer"
              className="bg-white text-black px-4 md:px-6 py-2.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider hover:bg-gray-200 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
      </nav>

      <main id="intro">
        <Hero />

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-32 px-6 max-w-7xl mx-auto relative">
           <div className="absolute left-0 top-20 w-px h-full bg-gradient-to-b from-transparent via-brand-orange/20 to-transparent"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 md:gap-4 pl-4 md:pl-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></span>
                <span className="text-xs font-mono text-brand-orange uppercase tracking-widest">Public Domain Charity</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white">My <span className="text-gray-700">Code.</span><br/>Your <span className="text-brand-orange">Fortune.</span></h2>
            </div>
            <a 
              href="https://github.com/muneebwanee?tab=repositories" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-white border-b border-brand-orange pb-1 hover:text-brand-orange transition-colors font-mono text-sm"
            >
              Verify on GitHub <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="w-10 h-10 text-brand-orange animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pl-4 md:pl-8">
              {repos.length > 0 ? (
                repos.map((repo, index) => (
                  <ProjectCard key={repo.id} repo={repo} index={index} />
                ))
              ) : (
                <div className="col-span-full text-center py-20 bg-white/5 rounded-2xl border border-dashed border-white/10">
                  <p className="text-gray-500">API Limit Reached. Even my charity has limits.</p>
                </div>
              )}
            </div>
          )}
        </section>

        {/* Payment Section */}
        <PaymentSection />
      </main>

      {/* Footer */}
      <footer className="py-12 bg-black text-center border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-left">
              <h4 className="font-black text-white text-lg"><span className="text-brand-orange">MUNEEBWANEE</span></h4>
              <p className="text-gray-600 text-xs mt-1">THE DIGITAL ARMY HQ</p>
           </div>
           
           <div className="text-gray-500 text-xs font-mono">
              &copy; {new Date().getFullYear()} Muneeb Wani. <br/>
              <span className="opacity-50">You're welcome for the free labor.</span>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;