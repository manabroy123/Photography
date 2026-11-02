# Light & Lens — Extreme Macro Photography Portfolio

A modern, sleek, and minimalist single-page macro photography portfolio website built with **Next.js (App Router)**, **Tailwind CSS**, and **Lucide React**.

Showcasing the work of **Manab Roy**—a macro photographer by passion and a Software Project Manager by profession.

---

## ✨ Features & Updates

- **Black & Light Yellow Aesthetic**:
  - Deep black background (`#080808`) and surfaces (`#111111`).
  - Warm, radiant light yellow accents (`#fef08a` / `#fef9c3`) for highlights, borders, glowing focus rings, category badges, and interactive CTAs.
  - Light yellow text selection (`::selection { background: #fef08a; color: #080808; }`).
- **Brand Identity**:
  - Logo: **Light & Lens** with an editorial ampersand accent and tagline (*Macro by Manab Roy*).
- **Showcase Gallery (Local Photos)**:
  - Curated plates from the local `photos/` library featuring jumping spiders, blowfly dew bubbles, Fibonacci fern spirals, compound eyes, glistening snails, and iridescent jewel bugs.
  - Interactive **category filter tabs** (*Arthropods*, *Dew & Optics*, *Botanical Geometry*, *Gastropods & Reptiles*, and *Full Archive*).
  - High-magnification badges (`1:1 – 5:1 Optics`) and hover zoom effects.
  - Interactive **Lightbox Modal** with optical specs and keyboard shortcuts (<kbd>Esc</kbd>, <kbd>←</kbd>, <kbd>→</kbd>).
- **About the Photographer**:
  - Features the **`manab-roy-field-expedition`** portrait on location with field gear.
  - Highlights his dual identity: combining the structured precision of software project management with the patience and micro-focus of extreme macro wildlife photography.
  - Macro equipment breakdown (Laowa 100mm 2X Ultra Macro, Twin Diffused Macro Flash rig, Focusing Rails).
  - Field ethics: 100% wild and live in-situ specimens.
- **Operational Contact Form**:
  - Real `/api/contact` Next.js route handler with server-side validation.
  - Interactive client-side states: transmission spinner, error alerts, and reference ID confirmation.
  - Persistent inquiry logging saved to `data/inquiries.json`.
  - Direct mailto fallback and social links.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **UI Library**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Inter](https://fonts.google.com/specimen/Inter)
- **Deployment**: [Vercel](https://vercel.com/) (Zero configuration needed)

---

## 🚀 Running the Project

### Development Server

The development server is running at:
```bash
http://localhost:3000
```

To run manually:
```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```text
├── public/
│   └── photos/                         # Real macro specimen photographs
│       ├── macro-blowfly-dew-bubble.jpg
│       ├── macro-dewy-purple-buds.jpg
│       ├── macro-fibonacci-fern-spiral.jpg
│       ├── macro-fly-dewdrop-eye.jpg
│       ├── macro-garden-lizard-portrait.jpg
│       ├── macro-glistening-spiral-snail.jpg
│       ├── macro-iridescent-jewel-bug.jpg
│       ├── macro-jumping-spider-predator.jpg
│       ├── macro-lynx-spider-stalk.png
│       ├── macro-red-hornet-mandibles.jpg
│       ├── macro-scarlet-dragonfly.jpg
│       └── manab-roy-field-expedition.jpg  # Photographer field portrait
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts            # Operational contact form API handler
│   │   ├── globals.css                 # Dark theme & light yellow scrollbar
│   │   ├── layout.tsx                  # Light & Lens branding & metadata
│   │   └── page.tsx                    # Main single-page application entry
│   ├── components/
│   │   ├── Header.tsx                  # "Light & Lens" logo & navigation
│   │   ├── Hero.tsx                    # Macro headline & bio tagline
│   │   ├── Gallery.tsx                 # Real photo grid & category filters
│   │   ├── LightboxModal.tsx           # Fullscreen viewer with optical specs
│   │   ├── About.tsx                   # Manab Roy field portrait & dual life
│   │   ├── Contact.tsx                 # Operational form & direct contact
│   │   └── Footer.tsx                  # Minimalist footer & back-to-top
│   └── data/
│       └── portfolioData.ts            # Specimen metadata & photographer details
├── data/
│   └── inquiries.json                  # Persistent store for contact inquiries
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## 📄 License

MIT License — Feel free to customize and use for your own portfolio.
