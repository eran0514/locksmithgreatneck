#!/bin/bash
# Auto Deploy & Preview Script for My Locksmith Site

# Navigate to project folder
cd "/c/Users/ERAN/Downloads/mylocksmithsite (1)/"

# Clean old installs
rm -rf node_modules package-lock.json
npm cache clean --force

# Install dependencies
npm install --legacy-peer-deps

# Run audit fixes
npm audit fix --force

# Add, commit, and push changes
git add .
git commit -m "Auto deploy: $(date '+%Y-%m-%d %H:%M:%S')"
git push origin main

# Start local dev server
npm run dev




