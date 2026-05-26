import React from 'react';
import { motion } from 'framer-motion';
import { GitHubRepo } from '../types.ts';
import { Star, GitFork, ExternalLink, ArrowUpRight, Code } from 'lucide-react';

interface ProjectCardProps {
  repo: GitHubRepo;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ repo, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative h-full"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-orange to-red-600 rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-500"></div>
      
      <div className="relative h-full glass-panel rounded-2xl p-8 flex flex-col justify-between bg-black">
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-brand-orange/10 rounded-lg text-brand-orange group-hover:bg-brand-orange group-hover:text-black transition-colors duration-300">
              <Code className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded">
              FREE TO USE
            </span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">
            {repo.name}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {repo.description || "Another masterpiece generously provided to the public domain."}
          </p>
        </div>

        <div>
          <div className="h-px w-full bg-white/10 mb-6 group-hover:bg-brand-orange/50 transition-colors"></div>
          
          <div className="flex justify-between items-center">
            <div className="flex gap-4 text-sm font-mono text-gray-500">
              <span className="flex items-center gap-1 group-hover:text-white transition-colors">
                 <Star className="w-4 h-4 text-brand-gold" /> {repo.stargazers_count}
              </span>
              <span className="flex items-center gap-1 group-hover:text-white transition-colors">
                 <GitFork className="w-4 h-4" /> {repo.forks_count}
              </span>
            </div>
            
            <a 
              href={repo.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-white hover:text-brand-orange transition-colors"
            >
              CLAIM <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};