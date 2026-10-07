# ROHAN // Software Engineer & Systems Architect Portfolio

A premium developer portfolio website engineered with a **dark glassmorphism + futuristic developer theme**.

---

## 🌟 Aesthetic & Design Architecture

- **Theme**: Dark Developer × Luxury Glass × Futuristic 3D × Cinematic × Professional
- **Palette**: Deep Obsidian & Charcoal (`#050608`, `#0a0c12`), Electric Cyan (`#00f0ff`), Cyber Violet (`#8b5cf6`), Terminal Emerald (`#10b981`)
- **Typography**: 
  - Display: `Syne` (Bold, architectural)
  - Headings & Badges: `Space Grotesk` (Tech display)
  - Monospace & Code: `JetBrains Mono`
  - Body Text: `Plus Jakarta Sans`
- **Glassmorphism**: Multi-layer backdrop blur (`20px`), subtle translucent borders (`rgba(255, 255, 255, 0.08)`), top specular highlights, and glowing shadows.
- **Visuals**: Includes Rohan's portrait integrated into a sci-fi HUD frame with floating glass holographic telemetry badges and scanlines.

---

## 🚀 Key Features

1. **Semantic HTML5 Structure**:
   - `<header>`: Fixed frosted glass navigation with status pulse, active scroll spy, resume sync, audio toggle, and mobile drawer.
   - `<main>`:
     - `Hero`: Bold typography, hollow watermark text, rotating role typewriter, interactive 3D portrait card, and CTA group.
     - `About Me`: Narrative dossier, four engineering pillars, and an **interactive sandbox terminal** (type `help`, `skills`, `projects`, `contact`, `stack`, `clear`).
     - `Skills`: Interactive category filtering with proficiency meters and experience tags.
     - `Experience / Timeline`: Glowing vertical circuit timeline with metric-focused bullet points and tech pills.
     - `Projects`: Category filters, bespoke high-res project mockups, and an **Architecture Deep-Dive Modal** with JSON specs, architecture notes, and code snippets.
     - `Education`: Degree information, specialized coursework, capstone highlight, and professional credentials.
     - `Achievements`: Hackathon grand prize, open-source impact (10k+ stars), publications, and keynote speaking.
     - `Contact`: 1-click email copy to clipboard, PGP key fingerprint, social links, and an encrypted transmission form with real-time feedback.
   - `<footer>`: Live updating UTC runtime clock, uptime telemetry, system map, and back to top button.

2. **Interactive 3D & Micro-Interactions**:
   - **Three.js Background**: High-performance 3D particle constellation and floating wireframe geometric polyhedron with mouse parallax.
   - **3D Physics Tilt**: Real-time perspective tilt on cards based on cursor coordinates.
   - **Cyber Web Audio Synthesizer**: Pure Web Audio API procedural sound feedback (toggleable via the header button).
   - **Custom Cyber Cursor**: Glowing dot with trailing frosted ring and hover magnetism.
   - **Toast Notifications**: Floating glass toast notifications for clipboard actions, audio toggles, and form submissions.

---

## 📂 Project Structure

```text
ROHAN's portfolio/
├── index.html                 # Semantic HTML5 document with all sections
├── style.css                  # Dark glassmorphic design system and responsive styles
├── main.js                    # Three.js canvas, 3D tilt, audio synth, terminal, modal
├── README.md                  # Documentation and customization guide
└── assets/
    └── images/
        ├── rohan-hero.png     # Rohan's hero portrait image
        ├── project-nexus.jpg  # NexusOS telemetry dashboard
        ├── project-aether.jpg # AetherAI neural code visualizer
        ├── project-quantum.jpg# QuantumVault zero-trust security console
        └── project-hyperion.jpg# Hyperion HFT order book terminal
```

---

## 💻 Running Locally

You can run this site using any local static file server:

### Option 1: Python
```bash
python -m http.server 8080
```
Then navigate to: `http://localhost:8080`

### Option 2: Node.js (npx serve)
```bash
npx -y serve -p 8080
```

---

## 🛠️ Customization

- **Updating Contact Info**: Edit the `#email-address` and social links in the `<!-- CONTACT SECTION -->` inside [index.html](file:///c:/Users/HP/Desktop/ROHAN's%20portfolio/index.html).
- **Adding Projects**: Add new project objects to `projectsData` in [main.js](file:///c:/Users/HP/Desktop/ROHAN's%20portfolio/main.js) and corresponding article cards in [index.html](file:///c:/Users/HP/Desktop/ROHAN's%20portfolio/index.html).
- **Tuning Colors**: Adjust CSS custom properties (`--accent-cyan`, `--accent-violet`, `--bg-base`) at the top of [style.css](file:///c:/Users/HP/Desktop/ROHAN's%20portfolio/style.css).
