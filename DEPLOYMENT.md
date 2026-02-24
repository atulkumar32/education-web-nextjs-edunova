# EduNova Deployment Guide

## Quick Start

### Development Mode

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build

```bash
npm run build
npm start
```

## Deployment Options

### 1. Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Click "Deploy"

**Environment Variables:**
No environment variables are required for the basic setup.

### 2. Netlify

1. Push your code to GitHub
2. Connect your repository on [Netlify](https://netlify.com)
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Deploy

### 3. Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t edunova .
docker run -p 3000:3000 edunova
```

### 4. Traditional Hosting (VPS/Dedicated Server)

1. Install Node.js 18+ on your server
2. Clone your repository
3. Install dependencies: `npm install`
4. Build the application: `npm run build`
5. Start with PM2:

```bash
npm install -g pm2
pm2 start npm --name "edunova" -- start
pm2 save
pm2 startup
```

## Environment Configuration

### Optional Environment Variables

Create a `.env.local` file for local development:

```env
# API Configuration (if needed in future)
NEXT_PUBLIC_API_URL=https://api.edunova.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## Performance Optimization

### 1. Image Optimization

Replace placeholder emojis with actual images in `/public` folder and use Next.js Image component.

### 2. Enable Compression

Most hosting providers enable gzip/brotli compression by default. For custom servers, configure nginx:

```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
```

### 3. CDN Configuration

Use a CDN for static assets:
- Vercel automatically provides CDN
- For other hosts, use Cloudflare or similar

## Monitoring

### Recommended Tools

- **Vercel Analytics** - Built-in for Vercel deployments
- **Google Analytics** - Add tracking code
- **Sentry** - Error tracking
- **LogRocket** - Session replay

## Security

### Headers Configuration

Add security headers in `next.config.ts`:

```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      }
    ];
  }
};
```

## Troubleshooting

### Build Errors

1. Clear cache: `rm -rf .next node_modules && npm install`
2. Check Node.js version: `node -v` (should be 18+)
3. Verify all dependencies are installed

### Runtime Errors

1. Check browser console for errors
2. Verify all environment variables are set
3. Check server logs

### Performance Issues

1. Enable production mode: `NODE_ENV=production`
2. Optimize images
3. Enable caching headers
4. Use CDN for static assets

## Scaling

### Horizontal Scaling

- Use load balancer (nginx, HAProxy)
- Deploy multiple instances
- Use Redis for session storage

### Database Integration

When adding a database:
1. Use connection pooling
2. Implement caching (Redis)
3. Use read replicas for scaling

## Backup Strategy

1. **Code**: Use Git for version control
2. **Database**: Regular automated backups
3. **User uploads**: Store in S3 or similar
4. **Configuration**: Document all environment variables

## Support

For issues or questions:
- Check the [README.md](./README.md)
- Review Next.js documentation
- Check GitHub issues

---

**Last Updated:** 2024
