# 🏡 PremiumHomes – Real Estate Platform with React, ShadCN, Motion

A modern and elegant real estate platform built with **React**, **TypeScript**, **ShadCN UI**, and **Framer Motion**. Designed for showcasing, exploring, and managing premium properties with responsiveness, animation, and a refined user experience.

---

## 🚀 Features

- 🧭 Tab-based property category search (Buy, Rent, Commercial, etc.)
- 🔍 Smart search with dropdown filters
- 🗺️ Embedded Google Map 
- 📄 Insight/blog listing and detail pages
- 💬 FAQ accordion with ShadCN
- 🧠 Testimonials with auto-sliding carousel
- 🧾 Property submission modal (ShadCN)
- 🎨 Light theme UI with Tailwind
- 🧱 Modular, scalable folder structure
- 📱 Fully responsive and animated with Motion

---

## 📁 Folder Structure

```bash
src/
├── api/                        # API service layer
├── asserts/                   # Static assets (e.g. logo)
├── components/
│   ├── home/                  # Hero, Featured sections
│   ├── layout/                # Header, Footer
│   ├── property/              # PropertyCard, PropertyFormModel, etc.
│   └── ui/                    # MapEmbed and reusable UI
├── constants/                 # Static text/data constants
│   ├── about.ts
│   ├── contact.ts
│   └── company.ts
├── data/                      # Static data files
│   ├── faq.ts
│   ├── insights.ts
│   └── properties.ts
├── hooks/                     # Custom React hooks (if any)
├── lib/                       # Utility functions
│   └── utils.ts
├── pages/                     # Route pages
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── HomePage.tsx
│   ├── InsightsPage.tsx
│   ├── PropertyDetailPage.tsx
│   └── PropertiesPage.tsx
├── store/                     # Global state (if using)
├── types/                     # TypeScript interfaces/types
│   └── property.ts
├── App.tsx                    # App entry
├── main.tsx                   # Main React render file
├── index.tsx
├── App.css
├── index.css
├── vite-env.d.ts              # Vite environment
```

---

## ⚙️ Tech Stack

| Tech            | Purpose                                  |
|------------------|-------------------------------------------|
| **React**        | UI library for building interfaces        |
| **TypeScript**   | Type-safe development                    |
| **Tailwind CSS** | Utility-first CSS framework              |
| **ShadCN UI**    | Modern, accessible component library     |
| **Framer Motion**| Animations for smooth interactions       |
| **Lucide Icons** | Icon set for modern UIs                  |
| **Vite**         | Fast bundler and development server      |

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/premium-homes.git
cd premium-homes
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.



---

## 🌐 Pages

| Route                    | Description                         |
|--------------------------|-------------------------------------|
| `/`                      | Home page                          |
| `/about`                 | About the company and team         |
| `/contact`               | Contact form                       |
| `/insights`              | Insights/blog listing              |
| `/insights/:id`          | Insight/blog detail                |
| `/properties`            | Property listing                   |
| `/properties/:id`        | Property detail                    |

---

## 📸 UI Components (ShadCN)

- **Modal** – Property listing form
- **Accordion** – FAQ section
- **Cards** – Property cards, team members, testimonials
- **Select** – Property type dropdown
- **Button** – Reusable CTAs
- **Badge** – Labels, status tags

---

## 📦 Included Datasets

- `data/properties.ts` – Sample property listings
- `data/insights.ts` – Blog/insight articles
- `data/faq.ts` – Frequently asked questions

---




