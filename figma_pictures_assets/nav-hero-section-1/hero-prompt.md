Build Prompt — Hero Section (Thedigiorb)
Build the hero section of the landing page exactly as described below. Use placeholder images for now (any neutral gray boxes or simple <div> with bg-muted will do) — I'll swap in the real assets myself afterward. Do not generate or fetch any images.

Tech & Setup
React + TypeScript + TailwindCSS
Framer Motion for animations
All colors via semantic CSS tokens in index.css / Tailwind theme — no hardcoded hex in components
Fully responsive (desktop-first, then tablet & mobile)
Respect prefers-reduced-motion
Design Tokens (add to design system)
--background: vibrant orange (approx oklch(0.70 0.19 45)) — solid, saturated, full-bleed
--foreground: pure white
--primary: white (for primary CTA pill)
--primary-foreground: near-black
--secondary: deeper orange/coral gradient for secondary CTA
--card: translucent white over orange (white / 10–15% opacity, backdrop-blur)
--card-border: white / 20%
Radius: large pill (9999px) for buttons, 2xl (~24px) for cards
Typography:
Display: a bold condensed sans-serif (e.g. Anton, Bebas Neue, or Archivo Black) — massive, tight leading
Body & nav: clean geometric sans (e.g. Inter / Manrope)
Layout (Desktop)
Single full-viewport-height section, orange background with a subtle grid pattern overlay behind the subject.

┌─────────────────────────────────────────────────────────────────┐
│ [Logo Thedigiorb]   Home  Services  Portfolio/Work  About  Contact   [tw][in][ig] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Design.                  [PLACEHOLDER IMAGE — subject]         │
│  Develop.                                                       │
│  Deploy.                              ┌──────────┬──────────┐   │
│                                       │  400+    │ [img]    │   │
│  From idea to launch, we              │ Trusted  │  800+    │   │
│  design, develop, and deliver         │ Partner  │ Projects │   │
│  high-performance digital             │ [logos]  │ launched │   │
│  products that help businesses        │ [Book a  │ worldwide│   │
│  scale faster and smarter.            │   Call]  │          │   │
│                                       └──────────┴──────────┘   │
│                                       ┌─────────────────────┐   │
│  [ START NOW ]  [ LEARN MORE ]        │ Contact by Email    │   │
│                                       │ Enter your email…   │   │
│                                       │ [tw][ig][in]        │   │
│                                       │ [ your email →   ]  │   │
│                                       └─────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
Components to build
Top Nav

Left: circular logo placeholder + "Thedigiorb" wordmark (white)
Center: links — Home, Services, Portfolio / Work, About Us, Contact us (white, medium weight, hover: subtle underline animation)
Right: 3 circular social icon buttons (Twitter, LinkedIn, Instagram) with thin white border
Left Content Block

Headline: "Design." / "Develop." / "Deploy." — stacked, each on its own line, massive condensed white text, very tight line-height (~0.9), each word ends with a period
Subcopy paragraph (max-width ~480px)
Two CTAs side-by-side:
START NOW — white pill, dark text
LEARN MORE — orange gradient pill, white text
Center Subject Image

Placeholder box (transparent-cutout style) positioned center, slightly right, extending from top to bottom of section. Use bg-white/5 with dashed border + label "Subject Image" until I replace it.
Right Stats + Email Card Stack (glass cards, backdrop-blur-xl, translucent white border)

Card A — Trusted Partner: big "400 +", label "Trusted Partner", row of 6 partner logo placeholders, white pill button "Book a Call"
Card B (next to A) — small portrait placeholder image with overlay "800 + Projects successfully launched worldwide"
Card C — "Contact by Email": label, helper text, 3 social icon circles, email input with arrow submit button (rounded pill input, semi-transparent)
Animations (Framer Motion)
Section entrance: stagger children, opacity 0 → 1, y: 20 → 0, spring { stiffness: 300, damping: 25 }
Headline words: stagger 0.08s each, slight x: -20 → 0
Glass cards: fade + scale 0.96 → 1, stagger 0.1s, slight delay after headline
CTAs hover: scale: 1.03, tap: scale: 0.97
Social icons hover: rotate 10° + scale 1.1
Subtle floating animation on the subject image (y: ±8px, 4s ease-in-out infinite)
Rules
Use placeholder divs for every image (logo, subject, partner logos, small portrait, social icons) — label them clearly so I can find/replace
Do not invent copy beyond what's shown above
Do not build any section other than this hero
Keep code modular: Hero.tsx, Navbar.tsx, StatsCard.tsx, EmailCard.tsx
Semantic HTML: <header>, <nav>, <section>, single <h1> for the headline
Confirm tech stack assumptions before starting if anything is unclear
When done, show me the hero rendered. I'll review and tell you the next section to build.