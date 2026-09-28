import { PortfolioItem } from '../types';

export const portfolioData: PortfolioItem[] = [
  {
    id: 'case-meta-ads-ecommerce',
    title: 'Aura Luxe Boutique — Targeted Meta Ad Campaign Setup',
    category: 'meta_ads',
    categoryLabel: 'Meta Ads & Growth',
    client: 'Aura Luxe Boutique',
    industry: 'Fashion & E-Commerce',
    year: '2025',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80'
    ],
    metrics: [
      { label: 'Orders Generated', value: '48 Orders' },
      { label: 'Campaign ROAS', value: '4.2x', change: '+85%' },
      { label: 'Ad Spend Tested', value: '$320' },
      { label: 'Pixel Setup', value: '100% Verified' }
    ],
    brief: 'A new boutique store needed help setting up their Meta Business Manager, installing the Meta Pixel on their store, and launching their very first test ad campaign.',
    solution: 'Configured Meta Ads Manager properly, created 6 custom ad creatives in Canva and Photoshop, targeted warm fashion interest groups, and monitored daily spend to ensure positive return on spend.',
    deliverables: [
      'Meta Pixel Installation & Custom Event Tracking',
      '6 Custom Square & Story Ad Creatives',
      'Audience Interest & Location Targeting',
      'Engaging Ad Copy & Call-to-Action Buttons',
      'Weekly Spend & Performance Summary'
    ],
    tags: ['Meta Ads', 'Pixel Setup', 'E-Commerce', 'Ad Creatives'],
    testimonial: {
      quote: 'Muhammad helped us set up our first ad campaign with great care. He was always available on WhatsApp and gave us very honest advice on budget.',
      author: 'Farhan Q.',
      role: 'Store Owner'
    }
  },
  {
    id: 'case-logo-vanguard-tech',
    title: 'Vanguard Tech — Modern Vector Logo & Starter Brand Kit',
    category: 'logo_design',
    categoryLabel: 'Logo & Visual Identity',
    client: 'Vanguard Cyber Tech',
    industry: 'Tech & IT Services',
    year: '2025',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
    ],
    metrics: [
      { label: 'Concepts Explored', value: '3 Concepts' },
      { label: 'Vector Formats', value: 'AI, SVG, EPS' },
      { label: 'Turnaround Time', value: '3 Days' },
      { label: 'Client Satisfaction', value: '100%' }
    ],
    brief: 'An emerging tech startup required a clean, geometric vector monogram logo for their software products, website header, and business cards.',
    solution: 'Sketched and finalized a minimalist shield-and-node vector mark in Adobe Illustrator with complementary color codes (HEX/RGB) and export files for both dark and light backgrounds.',
    deliverables: [
      'Primary Vector Logo Design (AI, SVG, EPS, PNG)',
      'Dark & Light Mode Variations',
      'Brand Color Palette & Font Recommendations',
      'Social Media Profile Avatar Kit'
    ],
    tags: ['Logo Design', 'Vector Art', 'Illustrator', 'Brand Identity'],
    testimonial: {
      quote: 'Great communication and fast revisions. He understood the minimalist style we wanted right from the start.',
      author: 'Zainab M.',
      role: 'Founder, Vanguard'
    }
  },
  {
    id: 'case-web-nova-studio',
    title: 'Nova Studio — Fast Responsive Front-End Landing Page',
    category: 'web_design',
    categoryLabel: 'Front-End Web Dev',
    client: 'Nova Studio',
    industry: 'Creative Services',
    year: '2025',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80'
    ],
    metrics: [
      { label: 'PageSpeed Score', value: '98/100' },
      { label: 'Mobile Score', value: '100%' },
      { label: 'Build Time', value: '4 Days' },
      { label: 'Tech Stack', value: 'React + Tailwind' }
    ],
    brief: 'A creative freelancer studio wanted a lightweight, mobile-responsive single-page website to showcase their service packages and receive client inquiries directly on WhatsApp.',
    solution: 'Coded a clean, modern landing page with React and Tailwind CSS featuring smooth scroll navigation, an interactive quote calculator, and instant WhatsApp chat routing.',
    deliverables: [
      'Mobile-First Responsive Web Design',
      'Interactive Service Estimate Calculator',
      'WhatsApp Quick Chat Button',
      'Clean Code with Zero Bloat'
    ],
    tags: ['React', 'Tailwind CSS', 'Web Design', 'Landing Page'],
    testimonial: {
      quote: 'The website is super fast on phones and looks really clean. Muhammad also helped us set it up on our custom domain without extra hassle.',
      author: 'David C.',
      role: 'Creative Director'
    }
  },
  {
    id: 'case-graphics-fitpulse',
    title: 'FitPulse Nutrition — Social Media Ad Banner Set',
    category: 'graphic_design',
    categoryLabel: 'Graphic Design & Creatives',
    client: 'FitPulse Supplements',
    industry: 'Health & Wellness',
    year: '2024',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80'
    ],
    metrics: [
      { label: 'Graphics Designed', value: '12 Banners' },
      { label: 'Delivery Time', value: '48 Hours' },
      { label: 'Revisions Made', value: '2 Rounds' },
      { label: 'Export Quality', value: 'Full HD / 300 DPI' }
    ],
    brief: 'A health brand needed a fresh pack of promotional ad banners and Instagram feed posts for their upcoming discount promotion.',
    solution: 'Designed 12 bold, eye-catching social media graphics with clear typography, vibrant product cutouts, and prominent discount badges in Photoshop.',
    deliverables: [
      '8 Square Feed Posts (1080x1080)',
      '4 Vertical Story Banners (1080x1920)',
      'High-Resolution PNG and JPG files',
      'Source PSD Files'
    ],
    tags: ['Graphic Design', 'Ad Creatives', 'Photoshop', 'Social Media'],
    testimonial: {
      quote: 'Super fast delivery and the banner graphics looked fresh and energetic. Exactly what we needed for our Instagram promo.',
      author: 'Hamza T.',
      role: 'Marketing Lead'
    }
  },
  {
    id: 'case-marketing-urban-bites',
    title: 'Urban Bistro — Local Meta Ads & WhatsApp Setup',
    category: 'digital_marketing',
    categoryLabel: 'Digital Marketing Support',
    client: 'Urban Bites Cafe',
    industry: 'Food & Hospitality',
    year: '2024',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80'
    ],
    metrics: [
      { label: 'Local Ad Reach', value: '24k Local Users' },
      { label: 'WhatsApp Inquiries', value: '80+ Chats' },
      { label: 'Ad Budget Spent', value: 'PKR 15,000' },
      { label: 'Cost Per Chat', value: 'Low / Cost-Effective' }
    ],
    brief: 'A local neighborhood cafe wanted to attract nearby residents for weekend dining and receive table inquiries over WhatsApp.',
    solution: 'Set up a local radius Meta ad campaign with appetizing food photos and a direct click-to-WhatsApp message button with pre-filled greeting text.',
    deliverables: [
      'Radius Geotargeted Meta Ad Campaign',
      'Click-to-WhatsApp Chat Link Integration',
      'Promotional Weekend Menu Graphic Banners',
      'Step-by-Step Guidance on Managing Inquiries'
    ],
    tags: ['Digital Marketing', 'Local Ads', 'WhatsApp', 'Cafe'],
    testimonial: {
      quote: 'We started getting genuine customer messages on WhatsApp from people living in our neighborhood within 2 days of running the ads.',
      author: 'Bilal S.',
      role: 'Cafe Owner'
    }
  },
  {
    id: 'case-brand-zenith-realty',
    title: 'Zenith Studio — Starter Logo & Clean Identity Concept',
    category: 'logo_design',
    categoryLabel: 'Branding & Identity',
    client: 'Zenith Studio Concept',
    industry: 'Architecture & Design',
    year: '2024',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    ],
    metrics: [
      { label: 'Concepts Created', value: '3 Variations' },
      { label: 'File Types', value: 'AI, SVG, PDF, PNG' },
      { label: 'Color Schemes', value: 'Dark & Light' },
      { label: 'Resolution', value: 'Infinite Vector' }
    ],
    brief: 'An interior design consultancy needed a simple, elegant geometric logo and basic stationery template for invoices and proposals.',
    solution: 'Crafted a minimal architectural lettermark with sharp lines, neutral gray-blue color accents, and exported print-ready PDF and high-res vector files.',
    deliverables: [
      'Custom Geometric Lettermark Logo',
      'Print-Ready Invoice & Proposal Header Template',
      'Vector Master Assets & High-Res PNGs',
      'Clear Space & Font Guidelines'
    ],
    tags: ['Logo Design', 'Branding', 'Vector Art', 'Stationery'],
    testimonial: {
      quote: 'Neat, professional work. The vector files were organized cleanly and easy to use on our documents.',
      author: 'Saad M.',
      role: 'Studio Associate'
    }
  }
];
