@echo off
REM ===========================
REM Auto Deploy & Start Local Server for My Locksmith Site
REM ===========================

REM Navigate to project folder
cd /d "C:\Users\ERAN\Downloads\mylocksmithsite (1)"

REM Clean old installs
echo Cleaning old installs...
rmdir /s /q node_modules
del /f /q package-lock.json

REM Clear npm cache
echo Clearing npm cache...
npm cache clean --force

REM Install dependencies
echo Installing dependencies...
npm install --legacy-peer-deps

REM Run audit fixes
echo Running audit fixes...
npm audit fix --force

REM Commit & push to GitHub
echo Committing and pushing changes...
git add .
git commit -m "Auto deploy: %date% %time%"
git push origin main

REM Start local dev server
echo Starting local development server...
npm run dev
pause
