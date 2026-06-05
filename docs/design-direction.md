# System Weaver Design Direction

## Purpose

This document captures the current visual language of the app as a lightweight brief for asset creation. The product should feel like a forward-deployed AI operations team: technical, embedded, precise, and quietly powerful.

## Core Impression

System Weaver lives in a dark, high-contrast interface with luminous system accents. The look should suggest connected workflows, deployed capability, operational intelligence, and senior technical craft.

Use language from systems, networks, threads, nodes, operational stacks, maps, and deployment paths. Avoid generic SaaS gloss, cartoon AI mascots, soft productivity illustrations, and stock imagery.

## Color Palette

Colors are defined in `src/index.css` as HSL tokens.

| Role           | Token                      | HSL            | Approx Hex | Use                                          |
| -------------- | -------------------------- | -------------- | ---------- | -------------------------------------------- |
| Background     | `--background`             | `240 20% 3%`   | `#060609`  | Page background, deep canvas                 |
| Foreground     | `--foreground`             | `30 10% 90%`   | `#e8e5e1`  | Primary text                                 |
| Card           | `--card`                   | `240 15% 6%`   | `#0d0d12`  | Panels, diagrams, contained modules          |
| Muted          | `--muted`                  | `240 10% 12%`  | `#1b1b22`  | Subtle surfaces                              |
| Border         | `--border`                 | `240 10% 14%`  | `#202027`  | Thin dividers, card edges                    |
| Muted text     | `--muted-foreground`       | `220 10% 50%`  | `#73798c`  | Secondary copy                               |
| Primary teal   | `--primary`                | `160 63% 50%`  | `#2fd09a`  | System activation, connections, primary CTAs |
| Accent magenta | `--accent` / `--secondary` | `347 100% 61%` | `#ff3863`  | RaidGuild brand accent, contrast calls       |
| Violet glow    | utility only               | `263 76% 66%`  | `#b866ea`  | Occasional atmospheric/heritage glow         |

### Color Usage

- Teal is the main operational color: active states, agent nodes, connection lines, primary emphasis.
- Magenta is the brand/energy accent: RaidGuild references, secondary CTAs, contrast details.
- Violet is a supporting glow/sigil color, not a main product color.
- Keep the app mostly near-black, off-white, muted blue-gray, and thin neon accents.
- Use glow sparingly: `text-shadow` and `box-shadow` should feel like signal, not decoration.

## Typography

The Tailwind config defines three font families:

| Role    | Font           | Use                                                 |
| ------- | -------------- | --------------------------------------------------- |
| Heading | Space Grotesk  | Headlines, section titles, card titles, buttons     |
| Body    | Inter          | Paragraph copy and general UI text                  |
| Mono    | JetBrains Mono | Labels, steps, tags, diagnostics, workflow metadata |

### Type Direction

- Headlines are bold, compact, and technical with tight line heights.
- Eyebrow labels are uppercase mono with wide tracking, usually teal or magenta.
- Body copy is restrained and readable, mostly muted foreground.
- Buttons use uppercase Space Grotesk with wider tracking.
- Avoid playful, handwritten, overly rounded, or luxury editorial type treatments.

## Shape And Layout

The current UI uses a disciplined, angular system:

- Border radius is small: `--radius: 0.25rem`; most cards/buttons use `rounded-sm`.
- Borders are thin and low-contrast.
- Cards are dark translucent panels: `bg-card/30`, `bg-card/50`, or `bg-card/80`.
- Layouts are spacious, section-based, and centered with max widths around `max-w-7xl`, `max-w-5xl`, `max-w-4xl`, and `max-w-3xl`.
- Dividers are often 1px horizontal gradients fading to transparent.
- Avoid chunky rounded cards, soft blob backgrounds, heavy shadows, and bright filled surfaces.

## Visual Motifs

Assets should build around these motifs:

- Nodes and connections: small square or circular nodes linked by thin teal lines.
- Threads and weaving: horizontal/vertical connector lines, dashed paths, subtle meshes.
- Operational maps: workflows, stacks, dependencies, checkpoints, handoffs.
- Deployment paths: step sequences, timelines, progression ladders.
- Sigils/geometric marks: faint RaidGuild heritage geometry using magenta/violet/teal.
- Noise texture: very subtle monochrome grain over the dark background.

## Motion Direction

The app uses Framer Motion for gentle system-like motion:

- Fade and rise on section entry.
- Thin lines draw or pulse into place.
- Nodes float slightly or pulse opacity.
- Hover states lift cards by a few pixels and brighten borders.
- Motion should feel like live infrastructure becoming visible, not like playful animation.

## Asset Guidance

Good assets for this direction:

- Dark technical diagrams with real node/thread structure.
- Abstract workflow maps that could plausibly represent business systems.
- Thin-line geometric sigils and deployment charts.
- Subtle grain/noise overlays.
- Small icon sets using simple line geometry.
- Background meshes that stay faint enough for text readability.

Avoid:

- Generic AI robot heads, brains, circuit-board cliches, and chatbot bubbles.
- Friendly pastel SaaS illustrations.
- Large glossy 3D objects.
- Heavy gradients or one-color purple/blue atmospheres.
- Photography that feels like generic office/team stock.
- Overly magical fantasy styling, despite the RaidGuild name.

## Composition Notes

- Keep the product/service message in the foreground; assets should support, not compete.
- Use negative space heavily.
- Prefer thin-line technical detail over dense decorative fills.
- Let teal identify the active or transformed state.
- Let magenta/violet identify RaidGuild origin, contrast, or secondary emphasis.
- Diagrams should be legible at large screen sizes and still read as texture when scaled down.

## Current Look Summary

System Weaver is a dark, technical, neon-accented operating-system aesthetic for embedded AI capability. It should feel senior, precise, deployable, and a little arcane around the edges, with RaidGuild energy expressed through restrained magenta/violet geometry rather than fantasy illustration.
