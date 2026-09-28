import React, { useState, useEffect } from 'react';
import { 
  Send, 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  Sparkles,
  Copy,
  Check,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ServiceCategory } from '../types';

interface ContactSectionProps {
  initialService?: string;
  initialEstimate?: {
    selectedServices: string[];
    budgetEstimate: string;
    timelineEstimate: string;
  } | null;
  currency: 'USD' | 'PKR';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  initialService,
  initialEstimate,
  currency
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneOrWhatsApp: '',
    businessName: '',
    budget: '$30 - $75',
    timeline: 'Within 3-5 Days',
    message: '',
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Meta Ads & Paid Growth',
    'Graphic Design & Creatives'
  ]);

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Apply initial props if passed from other sections
  useEffect(() => {
    if (initialService) {
      const serviceMapping: Record<string, string> = {
        meta_ads: 'Meta Ads & Paid Growth',
        digital_marketing: 'Digital Marketing & Strategy',
        graphic_design: 'Graphic Design & Creatives',
        logo_design: 'Logo Design & Brand Identity',
        web_design: 'Front-End Web Design & Dev',
      };
      const mapped = serviceMapping[initialService] || initialService;
      if (!selectedServices.includes(mapped)) {
        setSelectedServices([mapped]);
      }
    }
  }, [initialService]);

  useEffect(() => {
    if (initialEstimate) {
      if (initialEstimate.selectedServices.length > 0) {
        setSelectedServices(initialEstimate.selectedServices);
      }
      setFormData(prev => ({
        ...prev,
        budget: initialEstimate.budgetEstimate,
        timeline: initialEstimate.timelineEstimate,
      }));
    }
  }, [initialEstimate]);

  const serviceOptions = [
    'Meta Ads & Paid Growth',
    'Digital Marketing & Strategy',
    'Graphic Design & Creatives',
    'Logo Design & Brand Identity',
    'Front-End Web Design & Dev',
    'Full Brand & Ads Bundle Pack',
  ];

  const budgetOptions = currency === 'USD' 
    ? ['$30 - $75', '$75 - $150', '$150 - $300', '$300+']
    : ['Rs 5,000 - 15,000', 'Rs 15,000 - 35,000', 'Rs 35,000 - 75,000', 'Rs 75,000+'];

  const timelineOptions = [
    'Urgent (1-2 Days)',
    'Within 3-5 Days',
    'Within 1-2 Weeks',
    'Flexible'
  ];

  const faqs = [
    {
      q: 'How quickly can we start and complete a project?',
      a: 'We can start immediately! Simple ad creatives and logos are typically drafted within 24-48 hours. Meta ad setup or responsive landing pages take 2-4 days.'
    },
    {
      q: 'What budget do I need for Meta Ads test spend?',
      a: 'You can begin testing with as little as $5 to $10/day (or ~Rs 1,000 to 2,500 PKR/day) to test your audience response, receive WhatsApp inquiries, and validate your offer.'
    },
    {
      q: 'Do you provide full editable source files?',
      a: 'Yes, 100%! All logo and graphic design projects include vector master files (AI, SVG, EPS, transparent PNGs). Web projects include clean source code with full ownership.'
    },
    {
      q: 'How does payment work for clients?',
      a: 'Payment is simple and milestone-based. I accept EasyPaisa, JazzCash, Local Bank Transfers / Raast (Pakistan), as well as Wise and Payoneer for remote/international clients.'
    }
  ];

  const toggleService = (svc: string) => {
    if (selectedServices.includes(svc)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== svc));
      }
    } else {
      setSelectedServices([...selectedServices, svc]);
    }
  };

  const generateWhatsAppMessage = () => {
    const lines = [
      `Hi Muhammad! I would like to discuss a project:`,
      `• Name: ${formData.name || 'Client'}`,
      `• Business: ${formData.businessName || 'Business Inquiry'}`,
      `• Services Needed: ${selectedServices.join(', ')}`,
      `• Budget: ${formData.budget}`,
      `• Timeline: ${formData.timeline}`,
      formData.message ? `• Note: ${formData.message}` : '',
    ].filter(Boolean);
    return lines.join('\n');
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(generateWhatsAppMessage());
    window.open(`https://wa.me/923700840292?text=${text}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  const handleCopyInquiry = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0A] relative border-t border-white/10 overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-[#3b82f6]/10 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/20 text-[#3b82f6] text-[10px] font-black uppercase tracking-[0.2em]">
            <Sparkles className="w-3 h-3" />
            <span>06 / INITIATE ENGAGEMENT</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase italic text-white">
            Scale Revenue & <br />
            <span className="text-[#3b82f6]">Build Your Brand</span>
          </h2>
          <p className="text-white/60 text-base font-medium">
            Submit your campaign or project specifications below for a rapid response within 2 hours, or start directly on WhatsApp.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & FAQs */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Box */}
            <div className="bg-[#111111] p-6 sm:p-7 border border-white/10 space-y-5">
              <h3 className="text-base font-black uppercase tracking-widest text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#3b82f6]" />
                Direct Communication
              </h3>

              <div className="space-y-4 text-sm">
                {/* Email */}
                <a 
                  href="mailto:mk9548821@gmail.com"
                  className="flex items-center gap-3.5 p-3 bg-black border border-white/15 hover:border-[#3b82f6] transition-all text-white/80 hover:text-white group"
                >
                  <div className="w-10 h-10 bg-[#181818] border border-white/20 flex items-center justify-center text-[#3b82f6] group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block font-mono uppercase tracking-wider">Email Direct</span>
                    <span className="font-bold text-white text-xs">mk9548821@gmail.com</span>
                  </div>
                </a>

                {/* WhatsApp Direct */}
                <div 
                  onClick={handleWhatsAppSend}
                  className="flex items-center justify-between p-3.5 bg-black border border-[#3b82f6]/50 hover:border-[#3b82f6] transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 bg-[#3b82f6] flex items-center justify-center text-black font-bold group-hover:scale-105 transition-transform">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#3b82f6] block font-mono uppercase tracking-wider font-bold">Fast-Track WhatsApp</span>
                      <span className="font-black text-white text-xs tracking-tight">+92 370 0840292</span>
                    </div>
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#3b82f6] flex items-center gap-1">
                    Live <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Availability & Location */}
                <div className="p-3.5 bg-black border border-white/10 space-y-2 text-xs text-white/50 font-mono">
                  <div className="flex items-center gap-2 text-white/70">
                    <Clock className="w-3.5 h-3.5 text-[#3b82f6] shrink-0" />
                    <span>Response Speed: &lt; 2 Hours Guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <MapPin className="w-3.5 h-3.5 text-[#3b82f6] shrink-0" />
                    <span>Serving Worldwide (US, UAE, UK, PK)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Accordion FAQs */}
            <div className="bg-[#111111] p-6 border border-white/10 space-y-4">
              <h4 className="text-sm font-black uppercase tracking-widest text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#3b82f6]" />
                Frequently Answered
              </h4>

              <div className="space-y-2">
                {faqs.map((faq, idx) => (
                  <div 
                    key={idx}
                    className="border border-white/10 overflow-hidden bg-black"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-3.5 text-left text-xs font-bold uppercase tracking-tight text-white hover:text-[#3b82f6] flex items-center justify-between gap-2 transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown 
                        className={`w-4 h-4 text-white/40 shrink-0 transition-transform ${
                          openFaq === idx ? 'rotate-180 text-[#3b82f6]' : ''
                        }`} 
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="p-3.5 pt-0 text-xs text-white/60 leading-relaxed border-t border-white/10 bg-black animate-in fade-in duration-150">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation & Project Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#111111] p-6 sm:p-8 border border-white/15 shadow-2xl relative">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <h3 className="text-base font-black uppercase tracking-widest text-white">
                      Submit Project Brief
                    </h3>
                    <span className="text-xs text-[#3b82f6] font-mono font-bold">
                      ⚡ Free Strategy Call
                    </span>
                  </div>

                  {/* Multi-Select Services Required */}
                  <div className="space-y-2.5">
                    <label className="text-[10px] font-black text-white/60 uppercase tracking-[0.2em] block">
                      Services Needed (Select multiple):
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {serviceOptions.map((svc) => {
                        const isSelected = selectedServices.includes(svc);
                        return (
                          <button
                            type="button"
                            key={svc}
                            onClick={() => toggleService(svc)}
                            className={`p-3 text-xs font-bold uppercase tracking-tight text-left border transition-all flex items-center justify-between cursor-pointer ${
                              isSelected 
                                ? 'bg-black border-[#3b82f6] text-white shadow-inner' 
                                : 'bg-black border-white/10 text-white/50 hover:text-white hover:border-white/30'
                            }`}
                          >
                            <span>{svc}</span>
                            {isSelected && <Check className="w-4 h-4 text-[#3b82f6] shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Client Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-white/70">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe / Ali Khan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-3 bg-black border border-white/15 text-sm text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-white/70">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-3 bg-black border border-white/15 text-sm text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
                      />
                    </div>
                  </div>

                  {/* WhatsApp/Phone & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-white/70">WhatsApp / Phone</label>
                      <input
                        type="text"
                        placeholder="+92 300 1234567"
                        value={formData.phoneOrWhatsApp}
                        onChange={(e) => setFormData({ ...formData, phoneOrWhatsApp: e.target.value })}
                        className="w-full px-3.5 py-3 bg-black border border-white/15 text-sm text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-white/70">Brand / Business Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Luxe Store"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-3.5 py-3 bg-black border border-white/15 text-sm text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Budget & Timeline Dropdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-white/70">Estimated Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-3 bg-black border border-white/15 text-sm text-white focus:outline-none focus:border-[#3b82f6] cursor-pointer"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-black text-white">{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-white/70">Expected Timeline</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-3 bg-black border border-white/15 text-sm text-white focus:outline-none focus:border-[#3b82f6] cursor-pointer"
                      >
                        {timelineOptions.map((t) => (
                          <option key={t} value={t} className="bg-black text-white">{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-white/70">
                      Project Goals & Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell me about your product, current ad ROAS, desired branding direction, or landing page goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-3 bg-black border border-white/15 text-sm text-white focus:outline-none focus:border-[#3b82f6] transition-colors resize-none"
                    />
                  </div>

                  {/* Actions: Send inquiry & Direct WhatsApp */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      type="submit"
                      id="btn-submit-inquiry"
                      className="w-full sm:w-1/2 flex items-center justify-center gap-2 py-4 text-xs font-black uppercase tracking-[0.2em] bg-[#3b82f6] text-black hover:bg-white transition-all shadow-xl cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      id="btn-send-whatsapp"
                      className="w-full sm:w-1/2 flex items-center justify-center gap-2 py-4 text-xs font-black uppercase tracking-[0.2em] bg-black border border-white/20 text-white hover:bg-white hover:text-black transition-all cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 text-[#3b82f6]" />
                      <span>Send On WhatsApp</span>
                    </button>
                  </div>
                </form>
              ) : (
                /* Submission Confirmation State */
                <div className="text-center py-10 space-y-6 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-[#3b82f6] text-black flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                      Inquiry Received Successfully!
                    </h3>
                    <p className="text-white/70 text-sm max-w-md mx-auto">
                      Thank you <span className="text-[#3b82f6] font-bold">{formData.name || 'valued partner'}</span>. I will review your requirements and respond within 2 hours with a strategic plan and quote.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="p-4 bg-black border border-white/15 text-left text-xs space-y-2 max-w-md mx-auto font-mono">
                    <div className="text-white/40 font-bold uppercase tracking-widest text-[10px]">
                      Project Specification:
                    </div>
                    <div className="text-white/90">
                      • <span className="text-[#3b82f6]">Services:</span> {selectedServices.join(', ')}
                    </div>
                    <div className="text-white/90">
                      • <span className="text-[#3b82f6]">Budget:</span> {formData.budget}
                    </div>
                    <div className="text-white/90">
                      • <span className="text-[#3b82f6]">Timeline:</span> {formData.timeline}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleWhatsAppSend}
                      className="w-full sm:w-auto px-6 py-3.5 text-xs font-black uppercase tracking-[0.2em] bg-[#3b82f6] text-black flex items-center justify-center gap-2 hover:bg-white transition-all shadow-xl cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Speed Up via WhatsApp</span>
                    </button>
                    <button
                      onClick={handleCopyInquiry}
                      className="w-full sm:w-auto px-5 py-3.5 text-xs font-black uppercase tracking-wider bg-black border border-white/20 text-white hover:bg-white hover:text-black flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {copied ? <Check className="w-4 h-4 text-[#3b82f6]" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copied Brief!' : 'Copy Summary'}</span>
                    </button>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-white/40 hover:text-white block mx-auto underline pt-2 font-mono uppercase tracking-wider cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
