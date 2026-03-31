
# SaaS Platform Website Design

This is a code bundle for SaaS Platform Website Design. The original project is available at https://www.figma.com/design/5vOZWrSJQC7EXTDk7lLHC4/SaaS-Platform-Website-Design.

## Quick Start

### Development
```bash
npm install    # Install dependencies
npm run dev    # Start development server
```

### Production Build
```bash
npm run build   # Build for production
npm run preview # Preview production build locally
```

## Deployment

This project is **ready for Netlify deployment** with a custom domain.

### Quick Deploy Steps:
1. Push code to GitHub/GitLab/Bitbucket
2. Connect repository to Netlify (netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Connect your custom domain (unishark.in)

**For detailed deployment instructions, see [NETLIFY_DEPLOYMENT_GUIDE.md](./NETLIFY_DEPLOYMENT_GUIDE.md)**

## Features

- ✅ React + TypeScript
- ✅ Vite for fast builds
- ✅ Tailwind CSS for styling
- ✅ React Router for navigation
- ✅ Radix UI components
- ✅ Netlify-ready with SPA routing
- ✅ Security headers configured
- ✅ Performance optimized

## Project Structure

```
src/
├── app/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── data/          # Static data
│   └── routes.ts      # Route definitions
├── assets/            # Images and static files
└── styles/            # Global styles
```
  