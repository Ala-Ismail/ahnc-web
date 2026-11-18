# Australia Nusantara Heritage Centre

A modern React reimagining of the Australia Nusantara Heritage Centre website. The experience is built with Vite, React, and local visual assets, ready to deploy through Vercel from a GitHub repository.

## What is included

- React single-page site with sections for About, Stories, Traditions, Footprints, Events, Research, and Donate
- No shopping section, per project direction
- Responsive navigation and mobile-friendly layouts
- Data-driven stories, historical timeline, events, and research
- Locally served illustrations, credited photographs, and typefaces
- Vercel rewrite config for client-side routing fallback

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deploying With Vercel

1. Push this folder to GitHub.
2. Import the GitHub repository into Vercel.
3. Use the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

## Project Structure

- `index.html` - Vite HTML entry
- `src/main.jsx` - React entry point
- `src/App.jsx` - page sections and interactions
- `src/data/siteContent.js` - stories, traditions, timeline, events, and research
- `src/styles.css` - global styling and responsive layouts
- `public/images/` - optimised illustrations and credited photographs
- `public/fonts/` - local web fonts and their licences
- [`update_2026.md`](update_2026.md) - site audit, design changes, and verification
- `vercel.json` - Vercel fallback rewrite
- `package.json` - scripts and dependencies
