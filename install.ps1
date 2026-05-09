# Requires PowerShell 5+ and Windows 10 1709+ (winget)
$ErrorActionPreference = "Stop"

function Refresh-Path {
  $env:PATH = [System.Environment]::GetEnvironmentVariable("PATH", "Machine") + ";" +
              [System.Environment]::GetEnvironmentVariable("PATH", "User")
}

# Install Git if missing
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Write-Host "Installing Git..."
  winget install -e --id Git.Git --silent
  Refresh-Path
}

# Install Node.js LTS if missing
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Host "Installing Node.js LTS..."
  winget install -e --id OpenJS.NodeJS.LTS --silent
  Refresh-Path
}

# Clone
Write-Host "Cloning Aether..."
git clone https://github.com/StilyanX/aether.git
Set-Location aether

# Install dependencies
Write-Host "Installing dependencies..."
npm install

# Start
Write-Host ""
Write-Host "Opening Aether at http://localhost:8000"
npm run dev
