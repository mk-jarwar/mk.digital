import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  Menu, 
  X, 
  ArrowRight,
  PhoneCall,
  Flame,
  Globe
} from 'lucide-react';

interface NavbarProps {
  onOpenContact: (prefilledService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'ROI & Estimator', href: '#calculator' },
    { name: 'Process', href: '#process' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent("Hi Muhammad! I saw your portfolio and I'm interested in discussing a project for Digital Marketing / Design.");
    window.open(`https://wa.me/923700840292?text=${text}`, '_blank');
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/80' 
          : 'bg-[#0A0A0A]/80 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo - Bold Typography Aesthetic */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-white text-black font-black flex items-center justify-center text-base tracking-tighter group-hover:bg-[#3b82f6] transition-colors">
            MK
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-xl tracking-tighter text-white uppercase flex items-center gap-1.5">
              MK DIGITAL ADS
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse"></span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-[#3b82f6] px-3.5 py-1.5 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Quick WhatsApp CTA */}
          <button
            id="nav-whatsapp-btn"
            onClick={handleWhatsAppDirect}
            className="flex items-center gap-2 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-widest bg-transparent border border-white/20 text-white hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#3b82f6]" />
            <span>WhatsApp Chat</span>
          </button>

          {/* Primary Hire CTA */}
          <button
            id="nav-hire-btn"
            onClick={() => onOpenContact()}
            className="flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] bg-[#3b82f6] text-black hover:bg-white hover:text-black transition-all shadow-md cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded bg-black border border-white/20 text-white hover:border-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-white/15 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-bold uppercase tracking-widest text-white/70 hover:text-[#3b82f6] py-2.5 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsAppDirect();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-[11px] font-black uppercase tracking-widest border border-white/20 text-white cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#3b82f6]" />
              Chat on WhatsApp
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-[11px] font-black uppercase tracking-[0.2em] bg-[#3b82f6] text-black cursor-pointer"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
