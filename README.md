# ELVIE Landing Page — Design Prototype

Production-quality landing page prototype for ELVIE, an AI-powered radiology workspace.
Implements four distinct visual themes in a single app with a theme switcher.

## Setup

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Production build
```

## Four Visual Themes

Switch between themes using the dropdown in the top navigation or footer.
Theme persists in `localStorage` across sessions.

### 1. Clinical Precision
**Aesthetic:** Medical-device trust. Light background, navy/teal palette, dot-grid texture.
**Typography:** Instrument Serif (display) + DM Sans (body)
**Target:** Hospital administrators, clinical IT, enterprise evaluators
**Feel:** Epic Systems / Philips HealthSuite / Stripe / Linear

### 2. Dark Command Center
**Aesthetic:** Radiology workstation, AI control room. Deep dark (#060c14), cyan glow (#00d4e8).
**Typography:** Syne (display + body) + JetBrains Mono (data/mono)
**Target:** Radiologists, technical users, PACS engineers
**Feel:** Mission control meets clinical PACS, with subtle scan-line texture

### 3. Signal Atlas
**Aesthetic:** Clinical intelligence network, cosmic/orbital. Deep navy gradient, amber (#f59e0b) + indigo (#818cf8).
**Typography:** Cormorant Garamond (display) + Outfit (body)
**Target:** Platform vision storytelling, investors, researchers
**Feel:** Elegant data atlas — patient node at center, all clinical signals orbiting

### 4. Shared Review
**Aesthetic:** Collaborative clinical workspace. Warm off-white (#fafaf9), indigo + teal.
**Typography:** Lora (display) + Nunito (body)
**Target:** Clinicians, multi-disciplinary teams, patient-centered care
**Feel:** Figma/Loom meets clinical SaaS — timeline-driven collaboration

## Page Sections

1. **Hero** — Theme-specific artwork (workspace mockup / CT viewer / orbital diagram / collaboration)
2. **Problem** — Clinical information fragmentation across 8 siloed systems
3. **Unified Workspace** — Three-panel layout: DICOM viewer + report panel + AI chat
4. **AI-Powered Report Understanding** — Upload/OCR to finding extraction to navigation targets
5. **Report-to-Image Navigation** — Click finding, viewer opens at exact series/image/anatomy
6. **Report-Aware AI Chat** — Interactive demo with preset prompts and animated responses
7. **Beyond Imaging** — Full patient story: imaging + pathology + labs + notes + AI
8. **Future Capabilities** — Longitudinal tracking, cross-document intelligence, finding localization
9. **Target Users** — Radiologist, Clinician, Researcher persona cards
10. **Design Principles** — Human-centered, explainable, incremental, browser-first, open
11. **Final CTA** — "From Findings to Understanding"

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, static export capable) |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion v12 |
| Icons | Lucide React |
| Fonts | Google Fonts (Instrument Serif, DM Sans, Syne, JetBrains Mono, Cormorant Garamond, Outfit, Lora, Nunito) |
| Theme | CSS custom properties on data-theme attribute, localStorage persistence |

## Theme System

Themes are driven by CSS custom properties on `[data-theme="..."]` selectors in `app/globals.css`.
Switching sets `data-theme` on `<html>` and saves to `localStorage`.
CSS transitions provide smooth cross-theme animation.

Hero visuals are theme-specific SVG React components selected conditionally per theme.

## File Structure

```
elvie-landing-dev/
├── app/
│   ├── globals.css              # All theme variables + base styles
│   ├── layout.tsx               # Root layout with ThemeProvider
│   └── page.tsx                 # Page composition
├── components/
│   ├── theme/
│   │   ├── ThemeProvider.tsx    # Context + localStorage
│   │   └── ThemeSwitcher.tsx    # Dropdown UI
│   ├── layout/
│   │   ├── Nav.tsx              # Fixed nav with theme switcher
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx             # 4 theme-specific hero variants
│       ├── Problem.tsx
│       ├── UnifiedWorkspace.tsx
│       ├── ReportUnderstanding.tsx
│       ├── ReportToImage.tsx    # Interactive finding to image demo
│       ├── AIChat.tsx           # Live interactive chat demo
│       ├── BeyondImaging.tsx
│       ├── FutureCapabilities.tsx
│       ├── TargetUsers.tsx
│       ├── DesignPrinciples.tsx
│       └── FinalCTA.tsx
└── data/
    └── elvieContent.ts          # Shared content model
```
