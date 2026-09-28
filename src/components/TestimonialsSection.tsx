import React from 'react';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  MapPin, 
  Building2,
  Linkedin
} from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0A0A0A] relative border-t border-white/10 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#3b82f6]/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/20 text-[#3b82f6] text-[10px] font-black uppercase tracking-[0.2em]">
            <Star className="w-3 h-3 fill-[#3b82f6] text-[#3b82f6]" />
            <span>05 / CLIENT FEEDBACK</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase italic text-white">
            Real Feedback from <br />
            <span className="text-[#3b82f6]">Early Clients</span>
          </h2>
          <p className="text-white/60 text-base font-medium">
            Honest feedback from business owners and creators who worked with me on their brand design, Meta ad setups, and web pages.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-[#111111] p-6 sm:p-7 border border-white/10 hover:border-[#3b82f6] transition-all duration-300 flex flex-col justify-between group hover:shadow-xl"
            >
              <div>
                {/* Header: Stars & Service Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#3b82f6] text-[#3b82f6]" />
                    ))}
                  </div>
                  <span className="px-2 py-0.5 text-[9px] font-black uppercase tracking-wider bg-black border border-white/20 text-[#3b82f6]">
                    {t.service}
                  </span>
                </div>

                {/* Content Quote */}
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{t.content}"
                </p>
              </div>

              {/* Client Profile */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3.5">
                <div className="flex items-center gap-3.5 min-w-0">
                  <img 
                    src={t.avatar} 
                    alt={t.name}
                    className="w-10 h-10 object-cover border border-white/20 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-black uppercase tracking-tight text-white truncate">{t.name}</span>
                      {t.verified && (
                        <span title="Verified Client">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#3b82f6] shrink-0" />
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-white/50 truncate font-mono">
                      {t.role} • {t.company}
                    </div>
                    <div className="text-[10px] text-white/40 flex items-center gap-1 mt-0.5 font-mono uppercase">
                      <MapPin className="w-3 h-3 text-[#3b82f6]" />
                      <span>{t.location}</span>
                    </div>
                  </div>
                </div>

                {t.linkedinUrl && (
                  <a
                    href={t.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 hover:bg-[#3b82f6]/20 border border-white/20 hover:border-[#3b82f6] text-white/60 hover:text-[#3b82f6] transition-colors shrink-0"
                    title="View LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
