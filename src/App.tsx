import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { RoiCalculator } from './components/RoiCalculator';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MessageSquare } from 'lucide-react';
import { ServiceCategory } from './types';

export default function App() {
  const [currency, setCurrency] = useState<'USD' | 'PKR'>('USD');
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string | undefined>(undefined);
  const [estimateDataForContact, setEstimateDataForContact] = useState<{
    selectedServices: string[];
    budgetEstimate: string;
    timelineEstimate: string;
  } | null>(null);

  const handleOpenContact = (prefilledService?: string) => {
    if (prefilledService) {
      setSelectedServiceForContact(prefilledService);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyEstimate = (data: {
    selectedServices: string[];
    budgetEstimate: string;
    timelineEstimate: string;
  }) => {
    setEstimateDataForContact(data);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFloatingWhatsApp = () => {
    const text = encodeURIComponent("Hi Muhammad! I saw your portfolio website and would like to discuss a project.");
    window.open(`https://wa.me/923700840292?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white bg-grid-pattern selection:bg-[#3b82f6] selection:text-black font-sans">
      
      {/* Navigation */}
      <Navbar 
        onOpenContact={handleOpenContact}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero 
          onOpenContact={handleOpenContact}
        />

        {/* Services Showcase */}
        <ServicesSection 
          onSelectService={(serviceCategory: ServiceCategory) => handleOpenContact(serviceCategory)}
          currency={currency}
          setCurrency={setCurrency}
        />

        {/* Portfolio & Case Studies */}
        <PortfolioSection 
          onSelectService={(serviceCategory: string) => handleOpenContact(serviceCategory)}
        />

        {/* Interactive ROI & Custom Scope Estimator */}
        <RoiCalculator 
          onApplyEstimateToContact={handleApplyEstimate}
          currency={currency}
        />

        {/* 4-Step Process */}
        <ProcessSection 
          onOpenContact={() => handleOpenContact()}
        />

        {/* Testimonials & Social Proof */}
        <TestimonialsSection />

        {/* Contact & Consultation Form */}
        <ContactSection 
          initialService={selectedServiceForContact}
          initialEstimate={estimateDataForContact}
          currency={currency}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenContact={() => handleOpenContact()}
      />

      {/* Floating High-Converting WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center group">
        <button
          onClick={handleFloatingWhatsApp}
          id="floating-whatsapp-cta"
          aria-label="Chat on WhatsApp"
          className="relative flex items-center gap-2.5 px-5 py-3.5 bg-[#3b82f6] hover:bg-[#2563eb] text-black font-black text-[11px] uppercase tracking-[0.2em] rounded-full shadow-2xl shadow-[#3b82f6]/40 hover:scale-105 transition-all duration-300 border border-black/20 cursor-pointer"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black"></span>
          </span>
          <MessageSquare className="w-4 h-4 fill-black" />
          <span className="hidden sm:inline font-black">
            Chat on WhatsApp
          </span>
        </button>
      </div>

    </div>
  );
}
