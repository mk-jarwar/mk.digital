import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  Target, 
  Palette, 
  Code, 
  ShieldCheck, 
  CheckCircle2, 
  Star,
  Zap,
  Layers,
  Activity,
  DollarSign
} from 'lucide-react';

interface HeroProps {
  onOpenContact: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'ads' | 'design' | 'web'>('ads');

  const pillTags = [
    { num: '01', label: 'Meta Ads Strategy', category: 'meta_ads' },
    { num: '02', label: 'Brand & Logo Design', category: 'logo_design' },
    { num: '03', label: 'Front-End Web Dev', category: 'web_design' },
  ];

  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-radial-gradient">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#3b82f6]/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-white/20 bg-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-white/80">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]"></span>
              </span>
              <span>
                Emerging Freelancer — Open For New Projects (2025)
              </span>
            </div>

            {/* Main Headline - Bold Typography Theme */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-[84px] leading-[0.88] font-black tracking-tighter uppercase italic text-white">
                Digital <br />
                <span className="text-[#3b82f6]">Growth</span> <br />
                Freelancer
              </h1>
              
              <p className="text-white/60 text-base sm:text-lg max-w-xl font-medium leading-relaxed pt-2">
                Fresh ideas, full dedication, and budget-friendly Meta Ads, custom brand design, and modern front-end web pages crafted to help small businesses and creators grow.
              </p>
            </div>

            {/* Circular Numbered Service Rows */}
            <div className="space-y-3.5 pt-2">
              {pillTags.map((item) => (
                <div 
                  key={item.num}
                  onClick={() => onOpenContact(item.category)}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-xs font-mono font-bold text-white/80 group-hover:border-[#3b82f6] group-hover:text-[#3b82f6] group-hover:bg-[#3b82f6]/10 transition-all">
                    {item.num}
                  </div>
                  <span className="uppercase text-xs tracking-widest font-bold text-white/80 group-hover:text-[#3b82f6] transition-colors">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Dual Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                id="hero-primary-cta"
                onClick={() => onOpenContact()}
                className="flex items-center justify-center gap-2.5 px-8 py-4 font-black text-xs uppercase tracking-[0.2em] bg-[#3b82f6] text-black hover:bg-white transition-all shadow-xl hover:scale-[1.02] cursor-pointer"
              >
                <span>Start Project Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="hero-portfolio-cta"
                href="#portfolio"
                className="flex items-center justify-center gap-2 px-8 py-4 font-bold text-xs uppercase tracking-widest bg-black border border-white/20 text-white hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all"
              >
                <span>View Case Studies</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-3xl font-heading font-black text-white tracking-tighter">100%</div>
                <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Personal Effort</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-black text-[#3b82f6] tracking-tighter">24-48h</div>
                <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Fast Delivery</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-black text-white tracking-tighter">1-on-1</div>
                <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Direct Support</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-black text-[#3b82f6] tracking-tighter">From $50</div>
                <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Starter Pricing</div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Showcase Grid Container */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative bg-[#111111] border border-white/15 p-6 shadow-2xl space-y-6">
                
                {/* Header with mini tab switcher */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]"></span>
                    <span className="text-[11px] text-white/60 font-mono font-bold uppercase tracking-wider">MK.LIVE_ENGINE</span>
                  </div>
                  <div className="flex items-center gap-1 bg-black p-1 border border-white/10 text-[10px] font-bold uppercase tracking-wider">
                    <button
                      onClick={() => setActiveTab('ads')}
                      className={`px-2.5 py-1 transition-all cursor-pointer ${
                        activeTab === 'ads' ? 'bg-[#3b82f6] text-black font-black' : 'text-white/50 hover:text-white'
                      }`}
                    >
                      Ads
                    </button>
                    <button
                      onClick={() => setActiveTab('design')}
                      className={`px-2.5 py-1 transition-all cursor-pointer ${
                        activeTab === 'design' ? 'bg-[#3b82f6] text-black font-black' : 'text-white/50 hover:text-white'
                      }`}
                    >
                      Brand
                    </button>
                    <button
                      onClick={() => setActiveTab('web')}
                      className={`px-2.5 py-1 transition-all cursor-pointer ${
                        activeTab === 'web' ? 'bg-[#3b82f6] text-black font-black' : 'text-white/50 hover:text-white'
                      }`}
                    >
                      Web
                    </button>
                  </div>
                </div>

                {/* Tab 1: Meta Ads Dashboard Mockup */}
                {activeTab === 'ads' && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Active Campaign</div>
                        <div className="text-sm font-black text-white uppercase tracking-tight flex items-center gap-1.5 mt-0.5">
                          <Target className="w-4 h-4 text-[#3b82f6]" />
                          Store Ad Test (Meta Setup)
                        </div>
                      </div>
                      <span className="px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest bg-[#3b82f6]/10 border border-[#3b82f6]/40 text-[#3b82f6]">
                        ACTIVE
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="bg-black p-3 border border-white/10 text-center">
                        <div className="text-[10px] uppercase tracking-wider text-white/40 font-bold">ROAS</div>
                        <div className="text-lg font-black text-[#3b82f6] tracking-tight">4.2x</div>
                        <div className="text-[9px] text-white/60 font-mono">Profitable</div>
                      </div>
                      <div className="bg-black p-3 border border-white/10 text-center">
                        <div className="text-[10px] uppercase tracking-wider text-white/40 font-bold">Test Spend</div>
                        <div className="text-lg font-black text-white tracking-tight">$320</div>
                        <div className="text-[9px] text-white/40 font-mono">Low CPA</div>
                      </div>
                      <div className="bg-black p-3 border border-white/10 text-center">
                        <div className="text-[10px] uppercase tracking-wider text-white/40 font-bold">Sales</div>
                        <div className="text-lg font-black text-white tracking-tight">$1.35k</div>
                        <div className="text-[9px] text-[#3b82f6] font-mono">48 Orders</div>
                      </div>
                    </div>

                    {/* Funnel Progress Simulation */}
                    <div className="bg-black p-3.5 border border-white/10 space-y-2">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                        <span className="text-white/70">Top of Funnel (CTR 3.4%)</span>
                        <span className="text-[#3b82f6] font-mono">142k Views</span>
                      </div>
                      <div className="w-full bg-white/10 h-1.5 overflow-hidden">
                        <div className="bg-[#3b82f6] h-full w-[85%]"></div>
                      </div>
                      <div className="flex justify-between text-xs pt-1">
                        <span className="text-white/40 font-medium">Purchases & Retargeting</span>
                        <span className="text-white font-mono font-bold">1,420 Orders</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Brand / Logo Mockup */}
                {activeTab === 'design' && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Identity Suite</div>
                        <div className="text-sm font-black text-white uppercase tracking-tight flex items-center gap-1.5 mt-0.5">
                          <Sparkles className="w-4 h-4 text-[#3b82f6]" />
                          Vanguard Cyber Monogram
                        </div>
                      </div>
                      <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-white/5 border border-white/20 text-white">
                        Vector Master
                      </span>
                    </div>

                    {/* Logo Graphic Canvas Visual */}
                    <div className="h-32 bg-black border border-white/10 flex items-center justify-center relative overflow-hidden group">
                      <div className="w-16 h-16 bg-[#3b82f6] p-0.5 flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                        <div className="w-full h-full bg-black flex items-center justify-center">
                          <span className="text-2xl font-black font-heading text-white">
                            V
                          </span>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 text-[10px] text-white/30 font-mono">
                        HEX: #3B82F6 | #0A0A0A
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-black p-2.5 border border-white/10 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3b82f6] shrink-0" />
                        <span className="text-white/80 font-bold uppercase text-[10px] tracking-wider">Scalable Vector (AI, SVG)</span>
                      </div>
                      <div className="bg-black p-2.5 border border-white/10 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3b82f6] shrink-0" />
                        <span className="text-white/80 font-bold uppercase text-[10px] tracking-wider">Brand Styleguide</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Front-End Code */}
                {activeTab === 'web' && (
                  <div className="space-y-3 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-white/60 font-mono font-bold uppercase">React 19 + Tailwind CSS</div>
                      <span className="text-[11px] text-[#3b82f6] font-mono font-bold">100/100 SPEED</span>
                    </div>
                    <div className="bg-black p-3.5 border border-white/10 font-mono text-[11px] text-white/80 space-y-1 overflow-x-auto leading-relaxed">
                      <div><span className="text-[#3b82f6]">const</span> <span className="text-white">GrowthEngine</span> = () =&gt; &#123;</div>
                      <div className="pl-3"><span className="text-[#3b82f6]">return</span> (</div>
                      <div className="pl-6">&lt;<span className="text-[#3b82f6]">BoldContainer</span> <span className="text-white/60">theme</span>=<span className="text-white">"BoldTypography"</span>&gt;</div>
                      <div className="pl-9">&lt;<span className="text-white">HighConversionFunnel</span> <span className="text-white/60">roas</span>=&#123;<span className="text-[#3b82f6]">5.62</span>&#125; /&gt;</div>
                      <div className="pl-6">&lt;/<span className="text-[#3b82f6]">BoldContainer</span>&gt;</div>
                      <div className="pl-3">);</div>
                      <div>&#125;;</div>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-white/40 pt-1">
                      <span className="flex items-center gap-1 text-[#3b82f6]">
                        <Zap className="w-3.5 h-3.5" /> 0.3s First Contentful Paint
                      </span>
                      <span>Zero Layout Shift</span>
                    </div>
                  </div>
                )}

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-white text-black flex items-center justify-center text-xs font-black">
                      MK
                    </div>
                    <div className="text-xs">
                      <span className="font-bold text-white uppercase text-[11px] tracking-wider block">Full Creative Suite</span>
                      <span className="text-[10px] text-white/40 font-mono">Verified Delivery</span>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenContact(activeTab === 'ads' ? 'meta_ads' : activeTab === 'design' ? 'logo_design' : 'web_design')}
                    className="px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] bg-[#3b82f6] text-black hover:bg-white transition-all cursor-pointer"
                  >
                    Hire
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
