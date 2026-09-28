# 🚀 MK Growth & Creative Studio (MK Digital Ads)

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A high-converting, modern freelance portfolio and client acquisition platform engineered for **Digital Marketing, Meta Ads Management, Custom Vector Logo Design, Social Media Creatives, and Responsive Front-End Web Development**.

Includes an interactive **Meta Ads ROAS Calculator**, **Multi-Service Scope & Bundle Builder**, **Dual-Currency Switcher (USD & PKR)**, **Deep Case Study Modals**, and **Direct WhatsApp Lead Routing**.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [How to Publish this Project on GitHub](#-how-to-publish-this-project-on-github-step-by-step)
- [Local Development Setup](#-local-development-setup)
- [Deployment Guide (Vercel, Netlify, GitHub Pages)](#-deployment-guide)
- [How to Customize Your Personal Details](#-how-to-customize-your-details)
- [Project Directory Structure](#-project-directory-structure)
- [License](#-license)

---

## ✨ Features

- **🎯 Meta Ads Campaign Simulator**: Interactive return on ad spend (ROAS) and profit margin calculator.
- **⚡ Custom Bundle Builder**: Multi-select service packages with automatic bundle discounts and timeline estimates.
- **💱 Dual Currency Switcher**: Switch between **USD ($)** and **PKR (Rs)** with dynamic pricing across all modules.
- **📂 Portfolio Case Studies**: High-resolution showcase with detailed modals covering client brief, architecture, deliverables, and testimonials.
- **💬 Direct WhatsApp Conversion**: Floating and in-form one-click WhatsApp routing with pre-filled, formatted project briefs.
- **📬 Strategy Inquiry Form**: Interactive contact form with confetti celebrations, instant copy-to-clipboard, and direct response triggers.
- **📱 100% Mobile Responsive**: Ultra-clean dark theme with fluid typography (`Syne`, `Plus Jakarta Sans`, `Space Grotesk`).

---

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations & Effects**: [Motion](https://motion.dev/) & [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 🐙 How to Publish this Project on GitHub (Step-by-Step)

Follow these simple steps in your terminal or VS Code to push this project directly to your GitHub account:

### Step 1: Create a New Repository on GitHub
1. Go to [GitHub.com](https://github.com) and log in.
2. Click the **`+`** icon at the top right and select **"New repository"**.
3. Repository name: `mk-digital-ads` (or any name you prefer).
4. Description: `Premium portfolio and client acquisition platform for Meta Ads, Design & Web Development`.
5. Keep it **Public** (or Private).
6. **Do NOT** check "Initialize this repository with a README" (as we already have a complete README and files here).
7. Click **"Create repository"**.

### Step 2: Push from Your Local Terminal
Open your project root directory in your terminal or VS Code and run:

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Add all files to staging
git add .

# 3. Create your first commit
git commit -m "feat: initial release of MK Growth & Creative Studio portfolio"

# 4. Set main branch
git branch -M main

# 5. Link your GitHub remote repository (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/mk-digital-ads.git

# 6. Push to GitHub
git push -u origin main
```

> **Urdu / Hindi Guide:**
> 1. GitHub par jakar ek new repo banayein (e.g. `mk-digital-ads`).
> 2. Apne terminal mein upar wale 6 commands ek ke baad ek run karein.
> 3. Bas! Aapka complete project GitHub par publish ho jayega.

---

## 💻 Local Development Setup

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or bun or yarn

### Installation
```bash
# Clone your repository
git clone https://github.com/YOUR-USERNAME/mk-digital-ads.git

# Navigate into the directory
cd mk-digital-ads

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open `http://localhost:3000` or `http://localhost:5173` in your browser.

### Other Scripts
```bash
# Production build
npm run build

# Preview production build
npm run preview

# TypeScript check / Lint
npm run lint
```

---

## 🚀 Deployment Guide

### Option 1: Deploy to GitHub Pages (Automatic with GitHub Actions)
1. Push this project to your GitHub repository (e.g. `Portfolio` or `mk-digital-ads` on `https://github.com/muhammad-khan-2t7/Portfolio`).
2. On your repository page, click **Settings** (⚙️) -> **Pages** (in the left sidebar).
3. Under **Build and deployment** -> **Source**, choose: **`GitHub Actions`**.
4. That's it! The automated workflow `.github/workflows/deploy-pages.yml` will automatically build and publish your site at:
   `https://muhammad-khan-2t7.github.io/Portfolio/` (or your repo name).
   *No manual build or gh-pages branch required.*

### Option 2: Deploy on Vercel
1. Go to [Vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **"Add New Project"** and import your GitHub repository.
3. Click **"Deploy"**.

### Option 3: Deploy on Netlify
1. Go to [Netlify.com](https://netlify.com) and import your repo.
2. Build command: `npm run build`, Publish directory: `dist`.

---

## ⚙️ How to Customize Your Details

You can easily customize all your personal and business details in these files:

| Details to Change | File Location |
|---|---|
| **WhatsApp Number & Email** | `src/components/ContactSection.tsx`, `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `src/App.tsx` |
| **Services & Pricing** | `src/data/servicesData.ts` |
| **Portfolio Projects & Case Studies** | `src/data/portfolioData.ts` |
| **Client Testimonials & Reviews** | `src/data/testimonialsData.ts` |
| **Hero Title & Tagline** | `src/components/Hero.tsx` |

---

## 📁 Project Directory Structure

```text
├── .github/
│   └── workflows/
│       └── ci.yml             # GitHub Actions CI workflow
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Responsive navbar with logo & WhatsApp CTA
│   │   ├── Hero.tsx           # High-impact hero section with interactive tabs
│   │   ├── ServicesSection.tsx# 5 Core service modules with currency toggle
│   │   ├── PortfolioSection.tsx# Case studies grid with filtering
│   │   ├── PortfolioModal.tsx # Detailed case study view popup
│   │   ├── RoiCalculator.tsx  # ROAS simulator & custom bundle scope builder
│   │   ├── ProcessSection.tsx # 4-step delivery roadmap
│   │   ├── TestimonialsSection.tsx # Social proof & verified reviews
│   │   ├── ContactSection.tsx # Brief submission & WhatsApp routing
│   │   └── Footer.tsx         # Brand footer with navigation & contact
│   ├── data/
│   │   ├── servicesData.ts    # Service items, pricing & deliverables
│   │   ├── portfolioData.ts   # Case study data & metrics
│   │   └── testimonialsData.ts# Real client feedback
│   ├── types.ts               # TypeScript interfaces & types
│   ├── App.tsx                # Main application component
│   ├── main.tsx               # App entry point
│   └── index.css              # Tailwind CSS styles & animations
├── index.html                 # HTML shell with Google Fonts & SEO tags
├── package.json               # NPM packages & build scripts
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite build configuration
├── .gitignore                 # Files ignored by Git
├── LICENSE                    # MIT License
└── README.md                  # Project documentation & GitHub guide
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute it for personal or commercial projects.

---

Made with ❤️ by [Muhammad Khan](https://wa.me/923700840292)
