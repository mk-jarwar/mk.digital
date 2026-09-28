import React from 'react';
import { 
  Search, 
  Sparkles, 
  Rocket, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

interface ProcessSectionProps {
  onOpenContact: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenContact }) => {
  const steps = [
    {
      num: '01',
      title: 'Free Discovery Chat',
      desc: 'We discuss your project requirements, target audience, budget, and design preferences over chat or WhatsApp.',
      icon: Search,
      deliverables: ['Clear Project Scope', 'Transparent Pricing Quote', 'Agreed Delivery Timeline']
    },
    {
      num: '02',
      title: 'Drafting & Concepts',
      desc: 'I create initial design concepts, logo sketches, ad creatives, or landing page wireframes within 24-48 hours.',
      icon: Sparkles,
      deliverables: ['Initial Concept Previews', 'Draft Variations', 'Quick Progress Update']
    },
    {
      num: '03',
      title: 'Review & Refinements',
      desc: 'You provide feedback and revisions. I fine-tune typography, colors, copy, and layout until you are 100% happy.',
      icon: Rocket,
      deliverables: ['Dedicated Revisions', 'Detail Polishing', 'Final Approval Check']
    },
    {
      num: '04',
      title: 'Final Delivery & Launch',
      desc: 'You receive full vector source files (AI, SVG, PSD, code) and step-by-step guidance on running your campaign or site.',
      icon: TrendingUp,
      deliverables: ['100% Vector / Source Files', 'Ad Campaign Live Setup', 'Ongoing WhatsApp Support']
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#0A0A0A] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/20 text-[#3b82f6] text-[10px] font-black uppercase tracking-[0.2em]">
            04 / SIMPLE WORKFLOW
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase italic text-white">
            Simple 4-Step <br />
            <span className="text-[#3b82f6]">Freelance Process</span>
          </h2>
          <p className="text-white/60 text-base font-medium">
            Clear communication, fast turnaround times, and direct 1-on-1 collaboration from start to finish.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-[#111111] p-6 border border-white/10 hover:border-[#3b82f6] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-black border border-white/20 flex items-center justify-center text-[#3b82f6] group-hover:scale-105 group-hover:bg-[#3b82f6] group-hover:text-black transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-3xl font-black text-white/20 group-hover:text-[#3b82f6]/40 transition-colors font-mono">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-black uppercase tracking-tight text-white mb-2 group-hover:text-[#3b82f6] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-xs leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                {/* Deliverable pills */}
                <div className="pt-4 border-t border-white/10 space-y-1.5 font-mono">
                  {step.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[10px] text-white/70">
                      <CheckCircle2 className="w-3 h-3 text-[#3b82f6] shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-black uppercase tracking-[0.2em] bg-black border border-white/20 text-white hover:bg-[#3b82f6] hover:text-black hover:border-[#3b82f6] transition-all cursor-pointer"
          >
            <span>Start Step 1: Request Free Audit Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
