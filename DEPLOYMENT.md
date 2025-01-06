# Deployment Instructions

## GitHub Repository Setup

1. Go to https://github.com/new
2. Create a new repository:
   - Name: "van-williams-project"
   - Description: "Van Williams Project - React Website"
   - Make it Public
   - Don't initialize with README (we already have our code)
   - Click "Create repository"

3. Push existing code to GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/van-williams-project.git
git branch -M main
git push -u origin main
```
Replace YOUR_USERNAME with your actual GitHub username.

## Render Deployment

1. Go to render.com
2. Sign in with your account
3. Click "New +" and select "Web Service"
4. Connect your GitHub repository
5. Configure the deployment:
   - Choose "Docker" as your runtime
   - Select the branch you want to deploy
   - Set a name for your service
   - Choose your instance type (free tier is fine for testing)
   - Click "Create Web Service"

## What's Configured

The application is set up for production with:
- Multi-stage Docker builds for optimal image size
- Nginx serving static files with proper routing
- Gzip compression enabled
- Proper caching headers for static assets

## Docker Configuration Files

The following files have been set up for deployment:

1. `Dockerfile` - Multi-stage build process
2. `nginx.conf` - Nginx configuration for serving the React app
3. `.dockerignore` - Excludes unnecessary files from the Docker build

Render will automatically:
- Detect the Dockerfile
- Build the Docker image
- Deploy your application
- Provide you with a URL to access your site
