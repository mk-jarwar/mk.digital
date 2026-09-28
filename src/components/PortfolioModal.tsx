import React from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  TrendingUp, 
  Layers, 
  Quote, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { PortfolioItem } from '../types';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onSelectService: (category: string) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({ 
  item, 
  onClose, 
  onSelectService 
}) => {
  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#0D0D0D] border border-white/15 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-black shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-[10px] font-black uppercase tracking-widest bg-white/5 border border-white/20 text-[#3b82f6]">
              {item.categoryLabel}
            </span>
            <span className="text-xs text-white/50 font-mono">
              {item.client} — {item.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 bg-black border border-white/20 text-white/70 hover:text-white hover:border-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 custom-scrollbar">
          
          {/* Main Title & Hero Image */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-4">
              {item.title}
            </h3>

            <div className="overflow-hidden border border-white/10 relative group aspect-video bg-black">
              <img 
                src={item.heroImage} 
                alt={item.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {item.metrics.map((m, i) => (
              <div key={i} className="bg-black p-4 border border-white/10 text-center">
                <div className="text-[10px] text-white/40 font-bold uppercase tracking-wider">{m.label}</div>
                <div className="text-xl font-black text-[#3b82f6] tracking-tight my-1">
                  {m.value}
                </div>
                {m.change && (
                  <span className="text-[10px] font-bold text-white bg-white/10 px-2 py-0.5 font-mono">
                    {m.change}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* The Brief & The Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-black border border-white/10 space-y-2">
              <div className="text-[10px] font-black text-rose-400 uppercase tracking-widest">
                The Challenge & Objective
              </div>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                {item.brief}
              </p>
            </div>

            <div className="p-5 bg-black border border-white/10 space-y-2">
              <div className="text-[10px] font-black text-[#3b82f6] uppercase tracking-widest">
                The Executed Architecture
              </div>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                {item.solution}
              </p>
            </div>
          </div>

          {/* Deliverables List */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-widest flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#3b82f6]" />
              Shipped Assets & Scope
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {item.deliverables.map((d, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 bg-black border border-white/10 text-xs text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-[#3b82f6] shrink-0" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Quote */}
          {item.testimonial && (
            <div className="p-5 bg-black border border-[#3b82f6]/30 space-y-3">
              <div className="flex items-center gap-2 text-[#3b82f6]">
                <Quote className="w-4 h-4 opacity-80" />
                <span className="text-[10px] font-black uppercase tracking-widest">Client Verification</span>
              </div>
              <p className="text-sm text-white/90 italic leading-relaxed">
                "{item.testimonial.quote}"
              </p>
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                {item.testimonial.author} <span className="text-white/40 font-normal">— {item.testimonial.role}</span>
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
            {item.tags.map((tag, i) => (
              <span key={i} className="px-2.5 py-1 bg-black border border-white/10 text-white/60 text-xs font-mono">
                #{tag}
              </span>
            ))}
          </div>

        </div>

        {/* Modal Footer Action */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-black flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-white/50 text-center sm:text-left font-medium">
            Ready to achieve verified growth for your brand?
          </div>
          <button
            onClick={() => {
              onClose();
              onSelectService(item.category);
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-xs font-black uppercase tracking-[0.2em] bg-[#3b82f6] text-black hover:bg-white transition-all shadow-xl cursor-pointer"
          >
            <span>Start Similar Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
