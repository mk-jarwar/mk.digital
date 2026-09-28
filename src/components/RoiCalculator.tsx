import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Sparkles, 
  CheckSquare, 
  Square, 
  ArrowRight, 
  Clock,
  Layers,
  Percent
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ServiceCategory } from '../types';

interface RoiCalculatorProps {
  onApplyEstimateToContact: (data: {
    selectedServices: string[];
    budgetEstimate: string;
    timelineEstimate: string;
  }) => void;
  currency: 'USD' | 'PKR';
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ 
  onApplyEstimateToContact,
  currency
}) => {
  const [calcMode, setCalcMode] = useState<'roi' | 'bundle'>('roi');

  // ROI Calculator State
  const [adSpend, setAdSpend] = useState<number>(200); // USD
  const [expectedRoas, setExpectedRoas] = useState<number>(3.5);
  const [marginPercent, setMarginPercent] = useState<number>(50);

  // Bundle Estimator State
  const [selectedPacks, setSelectedPacks] = useState<Record<string, boolean>>({
    meta_ads: true,
    ad_creatives: true,
    logo_branding: false,
    web_landing: true,
    whatsapp_crm: false,
  });

  const exchangeRate = 280; // 1 USD = 280 PKR approx

  // Calculations for ROI tab
  const projectedRevenue = Math.round(adSpend * expectedRoas);
  const grossProfit = Math.round(projectedRevenue * (marginPercent / 100));
  const netAdProfit = Math.max(0, grossProfit - adSpend);

  // Bundle Items
  const bundleOptions = [
    {
      id: 'meta_ads',
      name: 'Meta Ads Setup & Pixel Integration',
      category: 'meta_ads',
      usdPrice: 40,
      pkrPrice: 10000,
      days: '2-3 days',
      desc: 'Campaign setup, interest research, pixel installation & weekly performance review.'
    },
    {
      id: 'ad_creatives',
      name: 'Social Media Ad Creatives Pack (8 Graphics)',
      category: 'graphic_design',
      usdPrice: 30,
      pkrPrice: 7500,
      days: '1-2 days',
      desc: 'Clean static banners, story formats & eye-catching promotional designs.'
    },
    {
      id: 'logo_branding',
      name: 'Logo Design & Starter Identity Kit',
      category: 'logo_design',
      usdPrice: 45,
      pkrPrice: 11000,
      days: '2-3 days',
      desc: 'Custom vector logo concepts, color codes, transparent PNGs & font pairings.'
    },
    {
      id: 'web_landing',
      name: 'Modern Responsive Landing Page (React)',
      category: 'web_design',
      usdPrice: 75,
      pkrPrice: 18000,
      days: '3-5 days',
      desc: 'Fast, mobile-friendly landing page with WhatsApp chat & contact form.'
    },
    {
      id: 'whatsapp_crm',
      name: 'WhatsApp Quick Lead Chat Setup',
      category: 'digital_marketing',
      usdPrice: 25,
      pkrPrice: 6000,
      days: '1 day',
      desc: 'Pre-filled WhatsApp click-to-chat links & greeting auto-responses.'
    }
  ];

  const toggleBundleItem = (id: string) => {
    setSelectedPacks(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Calculate Bundle Totals
  const activeBundleItems = bundleOptions.filter(b => selectedPacks[b.id]);
  const rawUsdTotal = activeBundleItems.reduce((sum, item) => sum + item.usdPrice, 0);
  const rawPkrTotal = activeBundleItems.reduce((sum, item) => sum + item.pkrPrice, 0);

  // Apply bundle discount if 2 or more items
  const discountRate = activeBundleItems.length >= 3 ? 0.20 : activeBundleItems.length === 2 ? 0.10 : 0;
  const finalUsdTotal = Math.round(rawUsdTotal * (1 - discountRate));
  const finalPkrTotal = Math.round(rawPkrTotal * (1 - discountRate));

  const maxEstimatedDays = activeBundleItems.length > 0
    ? activeBundleItems.length * 3 + 2
    : 0;

  const handleApplyScope = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const serviceNames = activeBundleItems.map(i => i.name);
    const budgetStr = currency === 'USD' ? `$${finalUsdTotal} USD` : `Rs ${finalPkrTotal.toLocaleString()} PKR`;
    const timelineStr = `Estimated ${maxEstimatedDays} Business Days`;

    onApplyEstimateToContact({
      selectedServices: serviceNames,
      budgetEstimate: budgetStr,
      timelineEstimate: timelineStr,
    });
  };

  return (
    <section id="calculator" className="py-24 bg-[#0A0A0A] border-t border-white/10 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#3b82f6]/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/20 text-[#3b82f6] text-[10px] font-black uppercase tracking-[0.2em]">
            03 / ESTIMATOR & PRICING
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase italic text-white">
            Campaign Simulation & <br />
            <span className="text-[#3b82f6]">Package Scope Builder</span>
          </h2>
          <p className="text-white/60 text-base font-medium">
            Test realistic ad campaign returns or customize an affordable multi-service package with clear timelines.
          </p>

          {/* Mode Switcher Buttons */}
          <div className="inline-flex p-1.5 bg-black border border-white/20 mt-4">
            <button
              onClick={() => setCalcMode('roi')}
              className={`px-5 py-2 text-xs sm:text-sm font-black uppercase tracking-wider transition-all cursor-pointer ${
                calcMode === 'roi' 
                  ? 'bg-[#3b82f6] text-black shadow-md' 
                  : 'text-white/50 hover:text-white'
              }`}
            >
              Meta Ads ROI Estimator
            </button>
            <button
              onClick={() => setCalcMode('bundle')}
              className={`px-5 py-2 text-xs sm:text-sm font-black uppercase tracking-wider transition-all cursor-pointer ${
                calcMode === 'bundle' 
                  ? 'bg-[#3b82f6] text-black shadow-md' 
                  : 'text-white/50 hover:text-white'
              }`}
            >
              Custom Package Builder
            </button>
          </div>
        </div>

        {/* Tab 1: Meta Ads ROI Simulator */}
        {calcMode === 'roi' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            
            {/* Slider Controls */}
            <div className="lg:col-span-6 bg-[#111111] p-6 sm:p-8 border border-white/10 space-y-6">
              <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">PARAMETERS // 01</div>
              <h3 className="text-xl font-black uppercase tracking-tight text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#3b82f6]" />
                Campaign Test Parameters
              </h3>

              {/* Monthly Ad Budget Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                  <span className="text-white/70">Test Ad Spend Budget</span>
                  <span className="font-black text-[#3b82f6] font-mono text-sm">
                    {currency === 'USD' ? `$${adSpend.toLocaleString()}` : `Rs ${(adSpend * exchangeRate).toLocaleString()}`}
                  </span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={2000}
                  step={25}
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full h-2 bg-black rounded-none appearance-none cursor-pointer accent-[#3b82f6]"
                />
                <div className="flex justify-between text-[10px] font-mono text-white/40">
                  <span>{currency === 'USD' ? '$50' : 'Rs 14k'} (Micro Test)</span>
                  <span>{currency === 'USD' ? '$2,000' : 'Rs 560k'} (Scale)</span>
                </div>
              </div>

              {/* Target ROAS Multiplier Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                  <span className="text-white/70">Target ROAS Multiplier</span>
                  <span className="font-black text-[#3b82f6] font-mono text-sm">{expectedRoas}x Return</span>
                </div>
                <input
                  type="range"
                  min={1.5}
                  max={6.0}
                  step={0.1}
                  value={expectedRoas}
                  onChange={(e) => setExpectedRoas(Number(e.target.value))}
                  className="w-full h-2 bg-black rounded-none appearance-none cursor-pointer accent-[#3b82f6]"
                />
                <div className="flex justify-between text-[10px] font-mono text-white/40">
                  <span>1.5x (Break-even)</span>
                  <span>3.5x (Target Goal)</span>
                  <span>6.0x (High Return)</span>
                </div>
              </div>

              {/* Product Gross Margin % */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                  <span className="text-white/70">Product / Profit Margin</span>
                  <span className="font-black text-white font-mono text-sm">{marginPercent}%</span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={85}
                  step={5}
                  value={marginPercent}
                  onChange={(e) => setMarginPercent(Number(e.target.value))}
                  className="w-full h-2 bg-black rounded-none appearance-none cursor-pointer accent-[#3b82f6]"
                />
              </div>

              <div className="text-xs text-white/50 bg-black p-3.5 border border-white/10 font-mono">
                Calculated with proper pixel tracking, interest research, and eye-catching ad creatives.
              </div>
            </div>

            {/* Projected Output Card */}
            <div className="lg:col-span-6 bg-black p-6 sm:p-8 border border-[#3b82f6]/40 relative shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-black text-[#3b82f6] uppercase tracking-widest">
                  Estimated Campaign Outcome
                </span>
                <span className="px-2.5 py-1 text-[10px] font-black uppercase tracking-widest bg-white/5 border border-white/20 text-white">
                  REALISTIC ESTIMATE
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold block">Projected Gross Revenue</span>
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                    {currency === 'USD' ? `$${projectedRevenue.toLocaleString()}` : `Rs ${(projectedRevenue * exchangeRate).toLocaleString()}`}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-[#111111] p-3.5 border border-white/10">
                    <span className="text-[10px] text-white/40 uppercase tracking-wider block font-bold">Estimated Net Profit</span>
                    <span className="text-2xl font-black text-[#3b82f6] tracking-tight">
                      +{currency === 'USD' ? `$${netAdProfit.toLocaleString()}` : `Rs ${(netAdProfit * exchangeRate).toLocaleString()}`}
                    </span>
                  </div>
                  <div className="bg-[#111111] p-3.5 border border-white/10">
                    <span className="text-[10px] text-white/40 uppercase tracking-wider block font-bold">Estimated Return</span>
                    <span className="text-2xl font-black text-white tracking-tight">
                      {expectedRoas}x Return
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  const spendStr = currency === 'USD' ? `$${adSpend} USD` : `Rs ${(adSpend * exchangeRate).toLocaleString()} PKR`;
                  onApplyEstimateToContact({
                    selectedServices: ['Meta Ads & Paid Growth Scaling'],
                    budgetEstimate: `${spendStr} Monthly Spend Target`,
                    timelineEstimate: 'Campaign Launch in 3-5 Days',
                  });
                }}
                className="w-full flex items-center justify-center gap-2 py-4 text-xs font-black uppercase tracking-[0.2em] bg-[#3b82f6] text-black hover:bg-white transition-all shadow-xl cursor-pointer"
              >
                <span>Book Free Meta Strategy Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {/* Tab 2: Custom Project Scope Builder */}
        {calcMode === 'bundle' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
            
            {/* Scope Selection List */}
            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs font-black uppercase tracking-widest text-white/70 mb-2 flex items-center justify-between">
                <span>Select Desired Scope:</span>
                <span className="text-xs text-[#3b82f6] font-mono">
                  {discountRate > 0 ? `⚡ ${discountRate * 100}% BUNDLE DISCOUNT APPLIED` : 'Select 2+ for bundle discount'}
                </span>
              </div>

              {bundleOptions.map((item) => {
                const isChecked = selectedPacks[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleBundleItem(item.id)}
                    className={`p-4 border transition-all cursor-pointer flex items-start gap-3.5 ${
                      isChecked 
                        ? 'bg-[#151515] border-[#3b82f6] shadow-lg shadow-[#3b82f6]/10' 
                        : 'bg-[#0E0E0E] border-white/10 hover:border-white/30'
                    }`}
                  >
                    <button className="mt-0.5 text-[#3b82f6] shrink-0 cursor-pointer">
                      {isChecked ? <CheckSquare className="w-5 h-5 text-[#3b82f6]" /> : <Square className="w-5 h-5 text-white/30" />}
                    </button>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-black uppercase tracking-tight text-white">{item.name}</span>
                        <span className="text-sm font-black text-[#3b82f6] font-mono">
                          {currency === 'USD' ? `$${item.usdPrice}` : `Rs ${item.pkrPrice.toLocaleString()}`}
                        </span>
                      </div>
                      <p className="text-xs text-white/60 mt-1">{item.desc}</p>
                      <div className="text-[10px] text-white/40 mt-1.5 font-mono uppercase tracking-wider">
                        Turnaround: {item.days}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Order Summary & Export */}
            <div className="lg:col-span-5 bg-[#111111] p-6 sm:p-7 border border-white/15 space-y-6 sticky top-24">
              <h4 className="text-sm font-black uppercase tracking-widest text-white flex items-center justify-between">
                <span>Bundle Summary</span>
                <span className="text-xs font-mono text-[#3b82f6]">
                  {activeBundleItems.length} MODULES
                </span>
              </h4>

              {activeBundleItems.length === 0 ? (
                <div className="text-center py-8 text-white/40 text-xs font-mono">
                  Please select at least 1 service to generate estimate.
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-2 border-b border-white/10 pb-4">
                    {activeBundleItems.map((item) => (
                      <div key={item.id} className="flex justify-between text-xs text-white/80">
                        <span className="truncate pr-2">• {item.name.split('(')[0]}</span>
                        <span className="font-mono text-white font-bold">
                          {currency === 'USD' ? `$${item.usdPrice}` : `Rs ${item.pkrPrice.toLocaleString()}`}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Subtotal & Discount */}
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between text-white/40 font-mono">
                      <span>Standard Rate:</span>
                      <span className="line-through">
                        {currency === 'USD' ? `$${rawUsdTotal}` : `Rs ${rawPkrTotal.toLocaleString()}`}
                      </span>
                    </div>

                    {discountRate > 0 && (
                      <div className="flex justify-between text-[#3b82f6] font-bold font-mono">
                        <span>Bundle Savings ({discountRate * 100}% off):</span>
                        <span>
                          -{currency === 'USD' ? `$${rawUsdTotal - finalUsdTotal}` : `Rs ${(rawPkrTotal - finalPkrTotal).toLocaleString()}`}
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between text-white pt-2 border-t border-white/10">
                      <span className="font-black uppercase tracking-wider">Estimated Investment:</span>
                      <span className="text-2xl font-black text-[#3b82f6]">
                        {currency === 'USD' ? `$${finalUsdTotal}` : `Rs ${finalPkrTotal.toLocaleString()}`}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] text-white/50 pt-1 font-mono">
                      <Clock className="w-3.5 h-3.5 text-[#3b82f6]" />
                      <span>Est. Delivery: ~{maxEstimatedDays} Business Days</span>
                    </div>
                  </div>

                  {/* Book CTA */}
                  <button
                    onClick={handleApplyScope}
                    className="w-full flex items-center justify-center gap-2 py-4 text-xs font-black uppercase tracking-[0.2em] bg-[#3b82f6] text-black hover:bg-white transition-all shadow-xl cursor-pointer"
                  >
                    <span>Confirm Scope & Book Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-[10px] text-center text-white/40 font-mono uppercase tracking-wider">
                    Source files • Commercial rights • Milestone assurance
                  </div>
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
