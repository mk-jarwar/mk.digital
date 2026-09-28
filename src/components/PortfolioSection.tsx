import React, { useState } from 'react';
import { 
  FolderKanban, 
  ExternalLink, 
  TrendingUp, 
  Sparkles, 
  ArrowUpRight, 
  Filter,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { PortfolioItem, ServiceCategory } from '../types';
import { PortfolioModal } from './PortfolioModal';

interface PortfolioSectionProps {
  onSelectService: (serviceCategory: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ 
  onSelectService 
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'meta_ads', label: 'Meta Ads & Scaling' },
    { id: 'logo_design', label: 'Logo & Brand Identity' },
    { id: 'graphic_design', label: 'Graphic & Ad Creatives' },
    { id: 'web_design', label: 'Front-End Web' },
    { id: 'digital_marketing', label: 'Marketing Strategy' },
  ];

  const filteredItems = selectedFilter === 'all'
    ? portfolioData
    : portfolioData.filter(item => item.category === selectedFilter);

  return (
    <section id="portfolio" className="py-24 bg-[#0A0A0A] relative border-t border-white/10">
      
      {/* Background Decor */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#3b82f6]/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/20 text-[#3b82f6] text-[10px] font-black uppercase tracking-[0.2em]">
            02 / RECENT WORK & CONCEPTS
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase italic text-white">
            Recent Projects & <br />
            <span className="text-[#3b82f6]">Design Showcase</span>
          </h2>
          <p className="text-white/60 text-base font-medium">
            A selection of recent projects, starter ad setups, custom vector marks, and responsive web pages crafted for clients and concept studies.
          </p>
        </div>

        {/* Filter Tab Buttons */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 text-xs font-black uppercase tracking-widest transition-all duration-200 cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-[#3b82f6] text-black shadow-lg shadow-[#3b82f6]/20'
                  : 'bg-black border border-white/20 text-white/60 hover:text-white hover:border-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const primaryMetric = item.metrics[0];
            const secondaryMetric = item.metrics[1];

            return (
              <div
                key={item.id}
                id={`portfolio-card-${item.id}`}
                onClick={() => setActiveModalItem(item)}
                className="group bg-[#111111] border border-white/10 hover:border-[#3b82f6] transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between hover:shadow-2xl hover:shadow-[#3b82f6]/10"
              >
                <div>
                  {/* Card Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img 
                      src={item.heroImage} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 text-[10px] font-black uppercase tracking-widest bg-black/90 border border-white/20 text-white">
                        {item.categoryLabel}
                      </span>
                    </div>

                    {/* View Details Action Indicator */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="w-8 h-8 bg-[#3b82f6] text-black flex items-center justify-center font-bold">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>

                    {/* Overlay Key Metric Banner */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-black/90 px-3.5 py-2 border border-white/10">
                      <div>
                        <span className="text-[9px] text-white/50 block font-bold uppercase tracking-wider">{primaryMetric.label}</span>
                        <span className="text-sm font-black text-[#3b82f6] tracking-tight">
                          {primaryMetric.value}
                        </span>
                      </div>
                      {secondaryMetric && (
                        <div className="text-right">
                          <span className="text-[9px] text-white/50 block font-bold uppercase tracking-wider">{secondaryMetric.label}</span>
                          <span className="text-xs font-bold text-white">
                            {secondaryMetric.value}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <div className="text-[10px] text-white/40 font-mono uppercase tracking-wider">
                      Client: {item.client} — {item.industry}
                    </div>

                    <h3 className="text-lg font-black uppercase tracking-tight text-white group-hover:text-[#3b82f6] transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-white/60 text-xs line-clamp-2 leading-relaxed">
                      {item.brief}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.tags.slice(0, 3).map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-0.5 bg-black border border-white/10 text-[9px] text-white/60 font-mono"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="px-6 py-3 border-t border-white/10 bg-black/40 flex items-center justify-between text-xs font-black uppercase tracking-wider text-[#3b82f6] group-hover:text-white">
                  <span>View Case Study Breakdown</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal View */}
        <PortfolioModal 
          item={activeModalItem} 
          onClose={() => setActiveModalItem(null)} 
          onSelectService={(cat) => {
            setActiveModalItem(null);
            onSelectService(cat);
          }}
        />

      </div>
    </section>
  );
};
