<<<<<<< HEAD
# ABTalks — 60-Day Coding Challenge Platform

A mobile-first, production-quality web application built for Indian college students participating in the ABTalks 60-Day Coding Challenge. Designed with an encouraging editorial aesthetic, distinct visual identity, and thoughtful features like **Tonight's Finish Line** and **Done Looks Like**.

## Route Map

```text
/
/dashboard
/day/12
```

## Features

- **Mobile-First Design (390px Viewport)**: Optimized for late-night viewing on mobile devices with zero horizontal scroll, thumb-friendly tap targets, and crisp hierarchy.
- **Thoughtful UX Features**:
  - **"Tonight's Finish Line"** (`/dashboard`): Reduces cognitive fatigue late at night by breaking down today's build into ~75 min bite-sized milestones.
  - **"Done Looks Like"** (`/day/12`): Provides concrete acceptance criteria so students know when their code is ready to ship.
- **Interactive Proof Submission**: GitHub commit URL and LinkedIn post URL verification with immediate progress calculation and celebration confetti.
- **Evaluator State Switcher Bar**: Floating control bar allowing one-click previewing of *Normal*, *First Day (Day 1)*, *Missed Day (Day 9)*, and *Empty Profile* edge states.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Library**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Canvas Confetti

## Local Setup & Development

1. Clone or navigate to project directory:
   ```bash
   cd abtalks
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

5. Start production server:
   ```bash
   npm run start
   ```

## Design System

- **Background**: Warm Off-White (`#FAF8F5`)
- **Foreground**: Near-Black (`#141517`)
- **Primary Accent**: Electric Indigo (`#4F46E5`)
- **Success State**: Emerald Green (`#10B981`)
- **Motivation State**: Warm Amber (`#F59E0B`)
- **Typography**: Plus Jakarta Sans

