import React, { useState } from 'react';
import { 
  Target, 
  TrendingUp, 
  Palette, 
  Sparkles, 
  Code, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Wrench,
  DollarSign
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { ServiceItem, ServiceCategory } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceCategory: ServiceCategory) => void;
  currency: 'USD' | 'PKR';
  setCurrency: (c: 'USD' | 'PKR') => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectService, 
  currency, 
  setCurrency 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const iconMap: Record<string, React.ElementType> = {
    Target,
    TrendingUp,
    Palette,
    Sparkles,
    Code
  };

  const filteredServices = activeCategory === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-[#0A0A0A] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/5 border border-white/20 text-[#3b82f6] text-[10px] font-black uppercase tracking-[0.2em]">
              01 / FREELANCE SERVICES
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase italic text-white">
              Hands-On Skills & <br className="hidden sm:inline" />
              <span className="text-[#3b82f6]">Starter Packages</span>
            </h2>
            <p className="text-white/60 text-base font-medium">
              Affordable, transparent, and dedicated services tailored for small businesses, creators, and new brand launches.
            </p>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-1.5 bg-black p-1.5 border border-white/20 self-start md:self-auto">
            <span className="text-[10px] text-white/50 px-2 font-bold uppercase tracking-widest">Currency:</span>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                currency === 'USD' 
                  ? 'bg-[#3b82f6] text-black shadow-md' 
                  : 'text-white/50 hover:text-white'
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('PKR')}
              className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                currency === 'PKR' 
                  ? 'bg-[#3b82f6] text-black shadow-md' 
                  : 'text-white/50 hover:text-white'
              }`}
            >
              PKR (Rs)
            </button>
          </div>
        </div>

        {/* Services Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-white text-black'
                : 'bg-black border border-white/20 text-white/60 hover:text-white'
            }`}
          >
            All 5 Services
          </button>
          {servicesData.map((s) => (
            <button
              key={s.category}
              onClick={() => setActiveCategory(s.category)}
              className={`px-4 py-2 text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === s.category
                  ? 'bg-[#3b82f6] text-black'
                  : 'bg-black border border-white/20 text-white/60 hover:text-white'
              }`}
            >
              {s.title.split(' & ')[0]}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: ServiceItem, index: number) => {
            const Icon = iconMap[service.iconName] || Target;
            const isExpanded = expandedServiceId === service.id;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="bg-[#111111] p-6 sm:p-7 border border-white/10 hover:border-[#3b82f6] transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl hover:shadow-[#3b82f6]/10 relative overflow-hidden"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-black transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 text-[10px] font-black uppercase tracking-widest bg-black border border-white/20 text-[#3b82f6]">
                      {service.badge}
                    </span>
                  </div>

                  {/* Titles */}
                  <div className="text-[10px] font-mono text-white/40 mb-1">0{index + 1} / MODULE</div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-[#3b82f6] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-5 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Key Metric & Turnaround */}
                  <div className="grid grid-cols-2 gap-2 p-3 bg-black border border-white/10 mb-5 text-xs">
                    <div>
                      <span className="text-white/40 block text-[10px] font-bold uppercase tracking-wider">Benchmark</span>
                      <span className="font-black text-[#3b82f6]">{service.metrics}</span>
                    </div>
                    <div>
                      <span className="text-white/40 block text-[10px] font-bold uppercase tracking-wider">Turnaround</span>
                      <span className="font-bold text-white flex items-center gap-1">
                        <Clock className="w-3 h-3 text-white/40" />
                        {service.turnaroundTime}
                      </span>
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">
                      Key Deliverables:
                    </div>
                    {service.deliverables.slice(0, isExpanded ? undefined : 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-white/80">
                        <CheckCircle className="w-3.5 h-3.5 text-[#3b82f6] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                    {service.deliverables.length > 3 && (
                      <button
                        onClick={() => setExpandedServiceId(isExpanded ? null : service.id)}
                        className="text-xs font-bold text-[#3b82f6] hover:underline pt-1 uppercase tracking-wider cursor-pointer"
                      >
                        {isExpanded ? 'Show less' : `+${service.deliverables.length - 3} more deliverables`}
                      </button>
                    )}
                  </div>

                  {/* Tool Stack Tags */}
                  <div className="mb-6 pt-3 border-t border-white/10">
                    <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-white/40 mb-2">
                      <Wrench className="w-3 h-3" />
                      Tools & Stack:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.tools.map((t, i) => (
                        <span key={i} className="px-2 py-0.5 bg-black border border-white/10 text-white/60 text-[10px] font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Price & Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-2">
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest block font-bold">Starting At</span>
                    <div className="text-lg font-black text-white tracking-tight">
                      {currency === 'USD' ? `$${service.startingPrice.usd}` : `Rs ${service.startingPrice.pkr.toLocaleString()}`}
                      <span className="text-xs text-white/50 font-normal ml-1 font-mono">/ est.</span>
                    </div>
                  </div>

                  <button
                    id={`btn-inquire-${service.id}`}
                    onClick={() => onSelectService(service.category)}
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-black uppercase tracking-[0.15em] bg-[#3b82f6] text-black hover:bg-white transition-all shadow-md cursor-pointer"
                  >
                    <span>Hire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Bundle Banner */}
        <div className="mt-12 bg-black border border-white/20 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-black uppercase tracking-tight text-white flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-[#3b82f6]" />
              Need a Complete Growth Pack? (Ads + Logo + Creatives + Web)
            </h4>
            <p className="text-white/60 text-sm max-w-xl font-medium">
              Save up to 25% by combining full-funnel Meta advertising, complete brand identity, continuous ad creative design, and a responsive web landing page.
            </p>
          </div>
          <a
            href="#calculator"
            className="shrink-0 px-6 py-3.5 text-xs font-black uppercase tracking-[0.2em] bg-[#3b82f6] text-black hover:bg-white transition-all shadow-xl"
          >
            Calculate Bundle Savings
          </a>
        </div>

      </div>
    </section>
  );
};
