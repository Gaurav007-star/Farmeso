# 🌾 Farm Technology Landing Page — master.md
UI/UX Replica Master Specification  
Tech Stack: React (Vite Latest) + TailwindCSS (Latest) + shadcn/ui (Latest)

---

## 🎯 Objective

Create a pixel-accurate replica of the provided agriculture technology landing page.

### Requirements

- React (latest via Vite)
- TailwindCSS latest version
- shadcn/ui latest version
- Lucide React icons
- Framer Motion (animations)
- Embla Carousel (hero thumbnails)
- Fully responsive
- Mobile-first
- Accessible semantic HTML
- Reusable component architecture
- Grid-based layout
- No inline styles

---

## 📦 Global Page Structure

App Layout
 ├── Navbar
 ├── HeroSection
 ├── ServicesOverview
 ├── SolutionsGrid
 ├── BenefitsSection
 ├── PartnersSection
 ├── SplitInnovationSection
 ├── TestimonialsSection
 ├── AiFeatureSection
 ├── BlogInsightsSection
 ├── FinalCTASection
 └── Footer

---

## 🧱 Section Specifications

### 1️⃣ Navbar

Layout:
- max-w-7xl mx-auto px-6 py-4
- flex items-center justify-between

Left:
- Logo
- Navigation Links (Home, About, Services, Insights)

Right:
- Primary CTA Button
- Optional Search Icon

Mobile:
- Sheet component
- Hamburger Menu

Components:
- Button
- Sheet
- NavigationMenu

---

### 2️⃣ Hero Section

Layout:
- section.relative.h-[90vh]
- full-width farming aerial background
- dark gradient overlay

Content:
- Large Headline
- Supporting Text
- Primary CTA Button
- Secondary Button

Extra:
- Bottom-right thumbnail carousel

Components:
- Button
- Carousel
- Badge

---

### 3️⃣ Services Overview

Title:
"We Blend Agricultural Expertise With Technology To Transform In Tillage"

Tags:
AI Tech, IoT, Data, Drone, Crop, Soil, Analytics

Layout:
- flex flex-wrap gap-3

Components:
- Badge

---

### 4️⃣ Practical Solutions Grid

Layout:
- grid md:grid-cols-3 gap-6

Cards:
1 Large Feature Card
- image background
- gradient overlay
- title
- category
- description

2 Medium Cards
- Supply Chain Support
- Revolutionary Agriculture

Structure:
div.relative rounded-2xl overflow-hidden
image
overlay
absolute bottom content

---

### 5️⃣ Benefits Section

Title:
"Modern Solutions & Lasting Benefits For Farmers"

Layout:
- grid md:grid-cols-3 gap-6

Card:
- Number label
- Image background
- Title
- Description
- Dark overlay
- Portrait format

---

### 6️⃣ Partners Section

Layout:
- flex flex-wrap justify-center gap-10

Behavior:
- grayscale logos
- hover removes grayscale

---

### 7️⃣ Split Innovation Section

Layout:
- grid md:grid-cols-2 items-center

Left:
- large farming machinery image

Right:
- beige background panel
- stacked headline
- subtext
- CTA button

---

### 8️⃣ Testimonials Section

Layout:
- section.py-24 bg-muted
- grid md:grid-cols-3 gap-6

Left Column:
- Section Title
- Slider indicator dots

Testimonial Card:
Card
 Quote Icon
 Text
 Divider
 Author
  Avatar
  Name
  Role

Components:
- Card
- Avatar
- Separator

---

### 9️⃣ AI Feature Section

Layout:
- grid md:grid-cols-2 gap-12 items-center

Left:
- crop bale image

Right:
Title:
"AI Enables Plant-Level Detection"

Feature Item Structure:
flex gap-4
icon
title
description

Features:
- Crop Monitoring
- Pest Detection
- Yield Forecasting

---

### 🔟 Blog Insights Section

Title:
"Latest Insights And Tips From Our Experts"

Layout:
- grid md:grid-cols-2 gap-6

Blog Card:
Card
 Image Background
 Category Badge
 Blog Title
 Author + Date

---

### 1️⃣1️⃣ Final CTA Section

Layout:
- full-width farming background image
- dark gradient overlay
- left-aligned content

Content:
- Large Headline
- CTA Button

---

### 1️⃣2️⃣ Footer

Layout:
- grid md:grid-cols-4 gap-12

Columns:
1 Logo + Social Icons
2 Solutions Links
3 Company Links
4 Newsletter Form

Newsletter:
- Input
- Button

Bottom Bar:
- flex justify-between
- copyright
- legal links

---

## 🎨 Design Tokens

Colors:
primary: green-700
accent: amber-400
background: neutral-50
card: white
text: neutral-900
muted: neutral-500

Radius:
rounded-2xl
rounded-xl

Shadows:
shadow-md
shadow-lg

---

## 🧩 Required Dependencies

- shadcn/ui
- tailwindcss
- lucide-react
- framer-motion
- embla-carousel-react
- clsx
- tailwind-merge

---

## 📁 Suggested Folder Structure

src/
 components/
  layout/
  sections/
  cards/
  ui/
 pages/
 hooks/
 lib/
 assets/

---

## 🧠 Component Naming Convention

Navbar.tsx
HeroSection.tsx
ServicesOverview.tsx
SolutionsGrid.tsx
BenefitsSection.tsx
PartnersSection.tsx
SplitInnovationSection.tsx
TestimonialsSection.tsx
AiFeatureSection.tsx
BlogInsightsSection.tsx
FinalCTASection.tsx
Footer.tsx

---

## ⚙️ Technical Rules

- Responsive breakpoints required
- Mobile-first implementation
- Reusable card components
- Semantic HTML tags
- Accessible ARIA attributes
- Lazy loading images
- Framer motion scroll animations
- Consistent spacing scale
- No inline styles
- Tailwind utility classes only

---

## 🚀 Final Instruction

Implement a clean, modern agriculture technology SaaS landing page matching this structure exactly.

Focus on:
- visual hierarchy
- grid-based layout
- reusable components
- consistent spacing
- scalable architecture
- performance optimization

---
