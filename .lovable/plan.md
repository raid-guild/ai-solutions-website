

# The System Weavers — Homepage Implementation Plan

## Design System
- **Background**: Deep charcoal (#0a0a0f) with subtle noise texture
- **Primary text**: Soft off-white (#e8e6e3)
- **Accent 1**: Electric teal (#2dd4a8)
- **Accent 2**: Arcane violet (#8b5cf6)
- **Secondary**: Muted gray-green (#6b7c6e)
- **Headings**: Space Grotesk (sharp, modern, slightly mystical)
- **Body**: Inter (clean sans-serif)
- **Mono accents**: JetBrains Mono (system feel)
- **Border radius**: Minimal (2-4px) for that precise, systems feel

## Sections to Build (9 sections + global elements)

### Global Elements
- Sticky minimal navbar with logo text "The System Weavers" + "Request a Raid" CTA
- Thin connector lines between sections using SVG/CSS
- Scroll-triggered animations using Framer Motion (intersection observer based)
- Subtle ambient "thread" lines as background decorative elements

### 1. Hero Section (Full-screen, split layout)
- Left: Headline, subheadline, 3 support points, 2 CTAs (teal primary, outlined secondary)
- Right: Animated node-and-thread diagram with floating labeled nodes (CRM, Docs, Inbox, Agent, etc.) connected by animated SVG lines
- Threads animate on load, "tighten" on scroll

### 2. The Shift — Why This Exists
- Centered narrow column, strong typography hierarchy
- Broken/incomplete thread diagram as faint background
- Bullet points styled distinctly (dim, indicating pain points)
- Closing line highlighted with accent color

### 3. What We Do — System Weaving (3-column grid)
- Section intro with headline + sub
- 3 pillar cards: Identify, Weave, Operate — each with icon/node, copy, and micro-points
- Horizontal thread lines connecting the three columns
- Hover: threads glow and animate outward

### 4. What This Looks Like (Before → After)
- 4 alternating rows with split cards
- Before side: dimmed/muted styling
- After side: highlighted with teal accent glow
- Animated transformation line/arrow between states

### 5. How We Work — Embedded (Split layout)
- Left: Copy with headline, body, key points
- Right: Horizontal timeline diagram (Embed → Map → Build → Operate → Optimize) with persistent thread connections

### 6. The System Stack (Layered vertical diagram)
- 5 stacked layers: Interfaces, Agents, Context, Integrations, Evaluation
- Vertical thread lines connecting layers
- Subtle pulsing glow effect through layers (CSS animation)

### 7. Engagement Model (2×2 grid)
- 4 module-style cards with hover elevation + connecting lines
- Workflow Audit, System Deployment, Agent Operations, Embedded Weaver
- Inline CTA: "Start with an Audit"

### 8. Why Raid Guild (Centered + grid)
- Headline, body copy, 3 supporting points
- Subtle guild sigil/geometric motif as background
- Network visualization of contributor nodes

### 9. Final CTA — Join the Weave (Full-width, high contrast)
- Fully connected woven network as background with subtle glow + ambient motion
- Bold headline, sub copy, 2 CTAs
- Most visually complete "system" state

## Technical Approach
- Single-page React app with section components
- Framer Motion for scroll-triggered animations and hover effects
- Custom SVG components for thread/node diagrams
- CSS animations for ambient glow and pulse effects
- Fully responsive (3-col → stacked on mobile, split → stacked)
- Google Fonts: Space Grotesk, Inter, JetBrains Mono

