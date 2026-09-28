import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'meta-ads',
    category: 'meta_ads',
    title: 'Meta Ads Setup & Campaign Management',
    tagline: 'Get your Facebook & Instagram ads launched with proper pixel tracking and targeted audience reach.',
    iconName: 'Target',
    badge: 'Starter Friendly',
    description: 'Hands-on Facebook & Instagram ad campaign setup designed to help your store or service reach real local or global customers without wasting budget.',
    deliverables: [
      'Meta Business Manager & Pixel Tracking Setup',
      'Audience & Interest Research for Your Niche',
      'Catchy Ad Headlines & Compelling Copywriting',
      'A/B Creative & Angle Testing',
      'Daily Budget Monitoring & Optimization',
      'Clear, Easy-to-Understand Weekly Performance Updates'
    ],
    tools: ['Meta Ads Manager', 'Meta Pixel', 'Canva Pro', 'Google Analytics'],
    startingPrice: {
      usd: 40,
      pkr: 10000
    },
    metrics: 'Direct 1-on-1 Setup',
    turnaroundTime: 'Live in 2-3 Days'
  },
  {
    id: 'digital-marketing',
    category: 'digital_marketing',
    title: 'Social Media & Marketing Support',
    tagline: 'Practical digital marketing guidance to build your online presence and engage potential buyers.',
    iconName: 'TrendingUp',
    badge: 'Growth Essentials',
    description: 'Step-by-step digital marketing assistance tailored for new businesses and creators. We organize your social channels, craft posting schedules, and streamline customer inquiries.',
    deliverables: [
      'Social Media Profile & Bio Optimization',
      'Monthly Content Calendar & Post Ideas',
      'Target Audience & Competitor Observation',
      'WhatsApp Business Quick Reply Setup',
      'Hashtag & Organic Engagement Strategy',
      'Actionable Monthly Progress Check-ins'
    ],
    tools: ['Notion', 'Meta Business Suite', 'WhatsApp Business', 'Canva'],
    startingPrice: {
      usd: 50,
      pkr: 12500
    },
    metrics: 'Step-by-Step Guidance',
    turnaroundTime: 'Plan Ready in 3-4 Days'
  },
  {
    id: 'graphic-design',
    category: 'graphic_design',
    title: 'Graphic Design & Ad Creatives',
    tagline: 'Eye-catching social media posts, promotional flyers, and ad creatives that grab attention.',
    iconName: 'Palette',
    badge: 'Fast Turnaround',
    description: 'Clean and modern graphic design assets for your social media channels, product launches, and digital ad campaigns. Designed with modern aesthetics and ready for immediate posting.',
    deliverables: [
      'Custom Social Media Posts (Square & Story format)',
      'Meta Ad Banner Creatives (Static & Carousels)',
      'Promotional Flyers, Discount Banners & Posters',
      'Product Feature Visuals & Highlights',
      'High-Resolution Exports (PNG, JPG, PDF)',
      'Editable Source Files Upon Request'
    ],
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Canva Pro'],
    startingPrice: {
      usd: 30,
      pkr: 7500
    },
    metrics: '24-48h Delivery',
    turnaroundTime: '24-48h Per Set'
  },
  {
    id: 'logo-design',
    category: 'logo_design',
    title: 'Logo Design & Brand Starter Kit',
    tagline: 'Clean, memorable logos and starter color palettes to give your business a professional look.',
    iconName: 'Sparkles',
    badge: '100% Vector Quality',
    description: 'Personalized logo design crafted with attention to detail. Every logo is custom-designed and delivered in crisp vector formats suitable for websites, packaging, social profiles, and print.',
    deliverables: [
      '2-3 Unique Custom Logo Concepts to choose from',
      'Color Palette & Font Pairing Recommendations',
      'Transparent PNGs for Dark and Light Backgrounds',
      'Social Media Profile Avatar & Banner Kit',
      'Full Vector Master Files (AI, SVG, EPS, PDF)',
      'Dedicated Revisions to Perfect Your Design'
    ],
    tools: ['Adobe Illustrator', 'Figma', 'Vector Tools'],
    startingPrice: {
      usd: 45,
      pkr: 11000
    },
    metrics: 'Vector Files Included',
    turnaroundTime: '2-4 Days Delivery'
  },
  {
    id: 'web-design',
    category: 'web_design',
    title: 'Front-End Web Design & Landing Pages',
    tagline: 'Modern, fast, and mobile-friendly landing pages built to showcase your products or services.',
    iconName: 'Code',
    badge: 'Responsive & Fast',
    description: 'Clean front-end web development with responsive design that looks great on mobile phones, tablets, and desktop computers. Fast loading and equipped with direct contact or WhatsApp buttons.',
    deliverables: [
      'Responsive Single-Page Website or Landing Page',
      'Mobile-Friendly UI with Fast Loading Speed',
      'Direct WhatsApp Chat & Contact Form Integration',
      'Clean Code with React, Tailwind CSS, or Modern HTML',
      'Easy Navigation & Clear Call-to-Actions',
      'Full Assistance with Domain & Hosting Deployment'
    ],
    tools: ['React', 'Tailwind CSS', 'TypeScript', 'HTML5 / CSS3', 'Vite', 'Figma'],
    startingPrice: {
      usd: 75,
      pkr: 18000
    },
    metrics: '100% Mobile Responsive',
    turnaroundTime: '3-6 Days Delivery'
  }
];
