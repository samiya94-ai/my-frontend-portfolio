# Samiya Mansuri — Frontend Developer Portfolio

A responsive portfolio built with Next.js, React, and CSS. The original plain HTML/CSS/JavaScript version is retained at the repository root as a lightweight static fallback; the Next.js application lives in `app/`.

## Run locally

Requirements: Node.js 18.18 or newer and npm.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. To verify a production build:

```bash
npm run build
npm start
```

## Project structure

- `app/page.jsx` — interactive portfolio page and project showcase
- `app/layout.jsx` — shared document layout and SEO metadata
- `app/globals.css` — responsive visual design
- `index.html`, `style.css`, `script.js` — original standalone static site (retained)

## Portfolio content and accuracy

The project section presents **InternHub** as an in-development concept, based only on the information provided: a student-focused internship finder portal exploring dashboards and internship discovery. It does not claim that a finished product, live demo, or public source repository is available. Replace the status and add real demo/repository links when those become available. Add actual certificate issuers, dates, credential URLs, resume, or other project details as you have them.

## Deploy

For the Next.js version, import this repository into Vercel (or another Next.js-compatible host), use the default Next.js build settings, and deploy. The static root `index.html` remains available for simple static hosting, but it does not use the Next.js app. Do not configure GitHub Pages to publish the repository root if you want to serve the Next.js application; use a Next.js-compatible deployment or configure a static export separately.

## Personal links

The LinkedIn profile link is included in the page. Update it if your profile URL changes. There are no placeholder GitHub project links in the InternHub card.
