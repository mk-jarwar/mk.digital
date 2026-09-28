import React from 'react';
import { 
  Sparkles, 
  Mail, 
  MessageSquare, 
  ArrowUp, 
  Heart,
  Globe,
  Layers,
  Code,
  Target
} from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/923700840292?text=Hi%20Muhammad,%20I%20visited%20your%20portfolio%20and%20want%20to%20discuss%20a%20project.', '_blank');
  };

  return (
    <footer className="bg-black border-t border-white/10 text-white/50 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white text-black font-black flex items-center justify-center text-sm tracking-tighter">
                MK
              </div>
              <div>
                <span className="font-black uppercase tracking-tight text-base text-white block">
                  Muhammad Khan
                </span>
                <span className="text-[10px] text-white/50 uppercase font-mono tracking-wider">
                  Growth Marketer & Creative Designer
                </span>
              </div>
            </div>

            <p className="text-white/60 text-xs leading-relaxed max-w-sm">
              Helping businesses scale revenue and elevate brand authority with high-converting Meta Ads, memorable vector logos, scroll-stopping ad graphics, and lightning-fast front-end web design.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleWhatsApp}
                className="px-3.5 py-2 bg-[#3b82f6] text-black text-[10px] font-black uppercase tracking-wider hover:bg-white transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp Direct
              </button>

              <a
                href="mailto:mk9548821@gmail.com"
                className="px-3.5 py-2 bg-black border border-white/20 text-white text-[10px] font-black uppercase tracking-wider hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#3b82f6]" />
                mk9548821@gmail.com
              </a>
            </div>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs uppercase font-medium">
              <li>
                <a href="#services" className="hover:text-[#3b82f6] transition-colors">
                  Meta Ads & Paid Scaling
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#3b82f6] transition-colors">
                  Digital Marketing Strategy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#3b82f6] transition-colors">
                  Graphic Design & Creatives
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#3b82f6] transition-colors">
                  Logo & Visual Identity
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#3b82f6] transition-colors">
                  Front-End Web Design
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs uppercase font-medium">
              <li>
                <a href="#portfolio" className="hover:text-[#3b82f6] transition-colors">
                  Case Studies & Proof
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#3b82f6] transition-colors">
                  ROAS Simulator
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#3b82f6] transition-colors">
                  Execution Roadmap
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#3b82f6] transition-colors">
                  Verified Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#3b82f6] transition-colors">
                  Request Strategy Audit
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Guarantee & Direct Action */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
              Assurance
            </h4>
            <div className="p-4 bg-[#111111] border border-white/15 space-y-2">
              <div className="text-white font-black text-xs uppercase tracking-tight flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#3b82f6]" />
                100% Quality Guarantee
              </div>
              <p className="text-[11px] text-white/50 leading-relaxed">
                Full vector master source files, commercial usage rights, and revision support on all project deliveries.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-[10px] font-mono uppercase tracking-wider">
          <div>
            © {new Date().getFullYear()} Muhammad Khan. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Meta Ads • Brand Identity • Web Engineering</span>
            <button
              onClick={scrollToTop}
              className="px-3 py-1 bg-[#111111] border border-white/10 hover:border-white/30 text-white transition-all flex items-center gap-1 cursor-pointer"
              title="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
