# Netlify Deployment Guide

## Prerequisites
1. **Node.js** (v18+ recommended) installed on your machine
2. **Git** repository initialized
3. **Netlify Account** (free at netlify.com)
4. **GitHub/GitLab/Bitbucket** repository with your code

## Step 1: Prepare Your Local Build

```bash
# Install dependencies
npm install

# Build the project locally to test
npm run build

# The build output will be in the 'dist' folder
```

## Step 2: Push Code to Git Repository

```bash
git add .
git commit -m "Prepare for Netlify deployment"
git push origin main
```

## Step 3: Deploy to Netlify

### Option A: Deploy via Netlify UI (Recommended)

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com) and sign in
   - Click "New site from Git"
   - Choose your Git provider (GitHub, GitLab, or Bitbucket)
   - Select your repository

2. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - Click "Deploy site"

3. **Wait for Deployment**
   - Netlify will automatically build and deploy your site
   - You'll get a temporary URL (like `xxx.netlify.app`)

### Option B: Deploy via Netlify CLI

```bash
# Install Netlify CLI (if not already installed)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## Step 4: Connect Custom Domain (Unishark.in)

1. **In Netlify Dashboard**
   - Navigate to your deployed site
   - Go to Site settings → Domain management
   - Click "Add domain"
   - Enter `unishark.in`

2. **Configure DNS Records**
   - Netlify will show you the DNS settings to add to your domain registrar
   - Go to your domain registrar (where you bought unishark.in)
   - Add the DNS records provided by Netlify
   - Common registrars: GoDaddy, Namecheap, Domain.com, etc.

3. **Wait for DNS Propagation**
   - DNS changes can take 5 minutes to 48 hours
   - Check status in Netlify dashboard
   - Once verified, your site will be live at `https://unishark.in`

4. **Enable HTTPS** (usually automatic)
   - Netlify provides free SSL certificate via Let's Encrypt
   - Should be automatic once domain is connected

## Step 5: Environment Variables (if needed)

If your app needs environment variables:

1. In Netlify Dashboard
2. Go to Site settings → Build & deploy → Environment
3. Add any necessary variables
4. Redeploy the site

## Troubleshooting

### Issue: Pages show 404 or blank

- **Solution**: Make sure `netlify.toml` has the SPA redirect rule configured
- This redirects all routes to `index.html` for client-side routing

### Issue: Domain not connecting

- **Solution**: 
  - Verify DNS records are correctly added to your registrar
  - Wait for DNS propagation (check with tools like mxtoolbox.com)
  - Check "Domain management" in Netlify for any errors

### Issue: Build fails

- **Solution**:
  - Check build logs in Netlify
  - Run `npm run build` locally to see error messages
  - Ensure all dependencies are installed: `npm install`

### Issue: Styles or images not loading

- **Solution**:
  - Check browser console for 404 errors
  - Verify all assets are in the `src/assets` folder
  - Check that paths use `@` alias correctly

## Files Prepared for Deployment

The following files have been created/configured for Netlify:

- **`netlify.toml`** - Netlify build configuration with:
  - Build command
  - Publish directory
  - SPA routing redirects
  - Security headers
  - Cache headers
  
- **`_redirects`** - Alternative redirect configuration (backup)

- **`vite.config.ts`** - Updated with:
  - Optimized build settings
  - Code splitting for better performance
  - Terser minification

- **`package.json`** - Updated with:
  - `build` script with TypeScript compilation
  - `preview` script for local testing
  - `lint` script for code validation

- **`.gitignore`** - Version control exclusions

## Performance Optimization Tips

1. **Enable Caching**: Already configured in `netlify.toml`
   - Static assets cached for 1 year
   - HTML cached for minimal time

2. **Monitor Performance**: Use Netlify Analytics and Lighthouse

3. **Deploy Preview**: Each PR automatically gets a preview URL

4. **Automatic Deployments**: Every push to `main` triggers automatic deployment

## Next Steps

1. ✅ Local build test: `npm run build`
2. ✅ Push to Git repo
3. ✅ Connect to Netlify
4. ✅ Configure custom domain
5. ✅ Monitor deployment

## Useful Links

- [Netlify Documentation](https://docs.netlify.com)
- [Vite Build Guide](https://vitejs.dev/guide/build.html)
- [React Router on Netlify](https://docs.netlify.com/routing/overview/)
- [Domain management](https://docs.netlify.com/domains-https/custom-domains/)

---

**Questions?** Check Netlify's support or documentation at docs.netlify.com
