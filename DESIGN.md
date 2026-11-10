---
name: Obsidian Terminal
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c7c6c6'
  on-secondary: '#303031'
  secondary-container: '#464747'
  on-secondary-container: '#b6b5b5'
  tertiary: '#ffffff'
  on-tertiary: '#003915'
  tertiary-container: '#6bff8f'
  on-tertiary-container: '#007432'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#6bff8f'
  tertiary-fixed-dim: '#4ae176'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005321'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 1.125rem
    fontWeight: '500'
    lineHeight: 1.5rem
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: JetBrains Mono
    fontSize: 1rem
    fontWeight: '500'
    lineHeight: 1.5rem
  section-header:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '700'
    lineHeight: 1rem
    letterSpacing: 0.12em
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.625rem
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.375rem
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '400'
    lineHeight: 0.875rem
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

This design system embodies an uncompromising, ultra-minimalist terminal aesthetic engineered for developers, technical founders, and digital purists. Visual inspiration is drawn directly from command-line interfaces, raw plain-text manifestos, and curated developer portfolio sites. 

The aesthetic is characterized by:
- An absolute void backdrop (`#050505` to `#0a0a0a`) paired with stark `#ededed` primary text for extreme contrast and laser focus.
- Unapologetic density and deliberate horizontal discipline: content lives in a restrained, centered column (max width 600px - 640px) that replicates reading an unadorned terminal stream.
- Zero decorative bloat: no drop shadows, no colorful gradients, no heavy bounding containers, and no artificial cards. Layout is mediated solely through negative space, typographic hierarchy, subtle muted metadata labels, and micro-interactions (e.g., character-like directional arrows `→`, terminal brackets `[ ]`, and subtle hover glows).
- A tone of quiet mastery, technical precision, and restrained confidence.

## Colors

The palette revolves strictly around an absolute deep dark environment, relying on light value steps for hierarchy:

- **Surface Base (`#050505` / `#0a0a0a`)**: The void background canvas. All screens sit on pure dark surfaces with no ambient gradients or texture overlays.
- **Primary / Forefront (`#ededed`)**: High-contrast white/light-gray used for titles, role names, active links, and primary content. Crisp, high-contrast, yet softened slightly from pure `#ffffff` to eliminate eye fatigue.
- **Secondary / Subtext (`#737373` - `#8a8a8a`)**: Mid-tone neutral used for secondary metadata (dates, company qualifiers, sub-labels, and muted section descriptions).
- **Subtle Surface & Borders (`#171717` to `#262626`)**: Micro-borders, chip backgrounds, and inline code pills. Used strictly when boundary definition is required.
- **Terminal Accent / Status (`#22c55e`)**: A phosphor green micro-accent reserved exclusively for "active / currently" pulses, terminal cursor blinks, or live status tags.

## Typography

The typographic engine uses **JetBrains Mono** across all hierarchical roles to enforce the terminal-first, developer-centric identity. 

- **Section Headers:** Defined in full uppercase (`SECTION-HEADER`) with high letter-spacing (`0.12em`), small font size (`0.75rem`), and muted `#737373` color to function like terminal category keys (`CURRENTLY`, `ABOUT`, `PROJECTS`, `SKILLS`).
- **Body Copy:** Set with generous line-height (`1.625rem`) to guarantee effortless readability of short essays, technical statements, and bios against pitch-black backgrounds.
- **Interactive Elements:** Anchors and list titles use medium/semibold weights that transition smoothly from subtle off-white to solid white `#ffffff` on hover.

## Layout & Spacing

The layout is grounded in a centered single-column spine rather than a complex multi-column grid:

- **Max Canvas Width:** Constrained to `580px` (or max `640px` on widescreen desktops) centered with auto horizontal margins.
- **Vertical Spacing Rhythm:**
  - Distinct sections (`CURRENTLY`, `ABOUT`, `PROJECTS`, `FOOTER`) are separated by `space-xl` (`3rem`).
  - Section titles are anchored to their content with `space-sm` (`0.5rem`).
  - Items inside stacked lists (e.g., project rows, work experience) maintain tight vertical spacing of `space-xs` to `space-sm` for an uninterrupted list flow.
- **Responsive Behavior:**
  - **Mobile (<640px):** Outer margins step down to `1rem`. Full width up to screen boundaries minus padding.
  - **Desktop (>=640px):** Stays strictly locked at `580px` centered to evoke the feel of a terminal buffer window on a high-resolution display.

## Elevation & Depth

This system intentionally rejects skeuomorphic shadows and blur-heavy floating planes:

- **Flat Spatial Planes:** Depth is communicated exclusively through layer tones and borders. The canvas is `#050505` / `#0a0a0a`, while interactive rows or hover backgrounds sit at `#121212`.
- **Low-Contrast Outlines & Dividers:** If an element requires delineation, use hairline borders (`1px solid #1c1c1c` or `#262626`). Dividers between items are discouraged in favor of whitespace rhythm, but when required, they are rendered as soft 1px rules (`#171717`).
- **Interactive Shift:** On hover, rows and buttons shift their background to subtle dark surface washes (`rgba(255, 255, 255, 0.04)`) or underline markers, avoiding elevated drop shadows.

## Shapes

The design language favors geometric, restrained corners that feel technical:

- **Corner Radius Scale:**
  - Base interactive elements (buttons, tag badges, avatar frames, hover indicators) use soft corners (`roundedness: 1`, `0.25rem` / `4px`).
  - Status indicators and user avatars can optionally take circular form (`rounded-full`) to create organic contrast against sharp monospaced text blocks.
- **Badge Tags & Chips:** Crisp 3px to 4px corners with thin `1px` subtle bounding borders.

## Components

### Project & Experience Rows
- **Structure:** Clean horizontal item with flex layout. Left side houses an icon/favicon (16x16px or 20x20px), item title in `#ededed`, and optional inline metadata or badge. Right side houses a subtle right-arrow indicator (`→` or `↗`) in `#525252`.
- **States:** Hovering the row smoothly shifts the arrow color to `#ededed` and applies a gentle horizontal nudge (`transform: translateX(2px)`), with optional background highlight of `#121212`.

### Badges & Inline Tags
- **Structure:** Compact inline pills with `space-xs` (0.25rem) vertical padding and `space-sm` (0.5rem) horizontal padding.
- **Styling:** Monospace text in `label-sm`, subtle `#1a1a1a` background, `1px solid #262626` outline, and `#a3a3a3` text color.

### Header & Identity
- **Structure:** Avatar (36px–40px, rounded-full or rounded 4px) paired horizontally with primary title ("Hi, I am Amith.") and subline ("Web Developer from Kerala").
- **Live Status Dot:** A pulsing micro-dot (`#22c55e`, 6px) next to "Currently" or "Available for work" indicating real-time presence.

### Action Buttons & Terminal Links
- **Primary Button:** High-contrast solid white `#ededed` surface with black text `#0a0a0a` in semibold monospace. 
- **Ghost/Text Link:** Neutral `#737373` link transitioning to `#ffffff` on hover with a crisp underline or prefix `>` character.

### Social & Footer Icons
- **Structure:** Horizontal flex row with equal spacing (`space-md`).
- **Styling:** Monochromatic SVG glyphs (GitHub, X/Twitter, LinkedIn, Telegram, Discord, Mail) styled at 16x16px in `#737373`, transitioning to `#ffffff` on cursor focus/hover.