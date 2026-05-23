# Australia Nusantara Heritage Centre

A modern React reimagining of the Australia Nusantara Heritage Centre website. The experience is built with Vite, React, and local visual assets, ready to deploy through Vercel from a GitHub repository.

## What is included

- React single-page site with sections for About, Stories, Footprints, Research, Events, and Donate
- No shopping section, per project direction
- Responsive navigation and mobile-friendly layouts
- Data-driven story, timeline, research, and partner content
- Generated Nusantara/Australia cultural backgrounds in `public/images`
- CSS-built editorial archive/map-inspired textures for supporting sections
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
- `src/main.jsx` - React application and content
- `src/styles.css` - global styling and responsive layouts
- `public/images/` - generated deployment-ready image assets
- `vercel.json` - Vercel fallback rewrite
- `package.json` - scripts and dependencies
