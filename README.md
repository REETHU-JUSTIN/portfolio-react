# Reethu Justin — Developer Portfolio (React)

A modern, responsive developer portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.
Single scrolling page: Hero · About · Skills · Experience · Projects · Certifications · Contact · Footer.
Features dark/light mode (saved), smooth scrolling, active-section nav, scroll-reveal animations, and a terminal-style hero.

---

## 1. What you need first

Install **Node.js (v18 or newer)** if you don't have it: https://nodejs.org (pick the "LTS" version).
To check it's installed, open a terminal and run:

```bash
node -v
npm -v
```

Both should print a version number.

## 2. Run it locally

In a terminal, from inside this `portfolio-react` folder:

```bash
npm install      # installs dependencies (run once)
npm run dev      # starts the dev server
```

Then open the URL it prints (usually **http://localhost:5173**). Edits hot-reload instantly.

## 3. Add your resume PDF

Put your resume file at **`public/resume.pdf`**. The "Résumé ↓" and "Download résumé" buttons already point to `/resume.pdf`.

## 4. Things to personalize

Almost all content lives in **`src/data/portfolio.js`** — edit text there, no JSX needed:
- **`LINKS.email`** — currently a placeholder `reethu.justin@email.com`. Put your real email.
- `LINKS.github`, `LINKS.linkedin`, `LINKS.phone` — already set from your resume.
- `SKILLS`, `EXPERIENCE`, `PROJECTS`, `CERTIFICATIONS`, `EDUCATION` — edit freely.

## 5. Build for production

```bash
npm run build    # outputs static files to dist/
npm run preview  # preview the production build locally
```

## 6. Put it on GitHub

```bash
git init
git add .
git commit -m "Initial commit: portfolio"
# create an empty repo on github.com, then:
git remote add origin https://github.com/REETHU-JUSTIN/portfolio.git
git branch -M main
git push -u origin main
```

## 7. Deploy on Vercel (free)

1. Go to https://vercel.com and sign in with GitHub.
2. **Add New → Project**, import your `portfolio` repo.
3. Vercel auto-detects Vite — just click **Deploy**. (Framework preset: *Vite*; Build command `npm run build`; Output dir `dist`.)
4. You'll get a live URL like `https://portfolio-xxx.vercel.app`. Add it to your resume.

---

## Project structure

```
portfolio-react/
├─ index.html                 # Vite entry; loads Google Fonts (IBM Plex Sans + Mono)
├─ package.json               # dependencies + scripts
├─ vite.config.js
├─ tailwind.config.js         # colors mapped to CSS variables; darkMode: 'class'
├─ postcss.config.js
├─ public/
│  └─ resume.pdf              # ← add your PDF here
└─ src/
   ├─ main.jsx                # React entry + Router
   ├─ App.jsx                 # page layout (Navbar → sections → Footer)
   ├─ index.css               # Tailwind + light/dark CSS variables + keyframes
   ├─ data/portfolio.js       # ALL content (edit here)
   ├─ hooks/
   │  ├─ useTheme.js          # dark/light toggle + localStorage
   │  └─ useActiveSection.js  # IntersectionObserver → active nav link
   └─ components/
      ├─ Navbar.jsx
      ├─ Hero.jsx             # terminal / code motif
      ├─ Section.jsx          # Framer Motion scroll-reveal wrapper + Eyebrow label
      ├─ About.jsx
      ├─ Skills.jsx
      ├─ Experience.jsx
      ├─ Projects.jsx
      ├─ Certifications.jsx
      ├─ Contact.jsx
      └─ Footer.jsx
```

## Key React concepts used

- **Components**: each section is its own component in `src/components/`, composed in `App.jsx`.
- **Props + data mapping**: content arrays in `data/portfolio.js` are `.map()`-ed into JSX, so adding a skill/project = adding an object.
- **Custom hooks**: `useTheme` (state + `useEffect` to sync `localStorage` and the `.dark` class) and `useActiveSection` (sets up an `IntersectionObserver`, cleans it up on unmount).
- **Theming**: dark/light done with CSS variables flipped by a `.dark` class on `<html>`; Tailwind colors point at those variables (`tailwind.config.js`), so one class swaps the whole palette.
- **Animation**: `framer-motion`'s `whileInView` drives the fade-up reveal; it respects `prefers-reduced-motion` automatically.
- **Routing**: `BrowserRouter` is wired in `main.jsx` so you can add real routes (e.g. project detail pages) later; the portfolio itself uses in-page `#anchor` links.
