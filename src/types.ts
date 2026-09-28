export type ServiceCategory = 'meta_ads' | 'digital_marketing' | 'graphic_design' | 'logo_design' | 'web_design';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  tagline: string;
  iconName: string;
  badge: string;
  description: string;
  deliverables: string[];
  tools: string[];
  startingPrice: {
    usd: number;
    pkr: number;
  };
  metrics: string;
  turnaroundTime: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  client: string;
  industry: string;
  year: string;
  featured: boolean;
  heroImage: string;
  secondaryImages?: string[];
  metrics: {
    label: string;
    value: string;
    change?: string;
  }[];
  brief: string;
  solution: string;
  deliverables: string[];
  tags: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  liveUrl?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  content: string;
  service: string;
  avatar: string;
  verified: boolean;
  linkedinUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  services: ServiceCategory[];
  budget: string;
  timeline: string;
  projectDetails: string;
}
