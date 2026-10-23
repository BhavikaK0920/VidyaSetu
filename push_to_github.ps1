# Script to initialize, commit, and push VidyaSetu to GitHub
$git = "C:\Users\DELL\AppData\Local\Microsoft\WinGet\Packages\Git.MinGit_Microsoft.Winget.Source_8wekyb3d8bbwe\cmd\git.exe"

Write-Host "Using git: $git"
& $git --version

# Init
& $git init

# Configure user
$currentUser = & $git config user.name
if (-not $currentUser) {
    & $git config user.name "BhavikaK0920"
    & $git config user.email "bhavikak0920@users.noreply.github.com"
}

# Add all files
& $git add -A

# Check status
& $git status --short

# Commit
& $git commit -m "VidyaSetu - Multilingual Digital Learning Platform for Rural Government Schools"

# Main branch
& $git branch -M main

# Set remote
& $git remote remove origin 2>$null
& $git remote add origin "https://github.com/BhavikaK0920/VidyaSetu.git"

Write-Host "Remote configured:"
& $git remote -v

# Push
Write-Host "Pushing to https://github.com/BhavikaK0920/VidyaSetu.git..."
& $git push -u origin main
