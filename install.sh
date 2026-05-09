#!/bin/bash
set -e

# Install git if missing
if ! command -v git &>/dev/null; then
  if command -v apt &>/dev/null; then
    sudo apt install -y git
  elif command -v dnf &>/dev/null; then
    sudo dnf install -y git
  elif command -v pacman &>/dev/null; then
    sudo pacman -S --noconfirm git
  elif command -v brew &>/dev/null; then
    brew install git
  else
    echo "Git not found. Install it from https://git-scm.com then re-run this script."
    exit 1
  fi
fi

# Install Node.js via nvm if missing
if ! command -v node &>/dev/null; then
  echo "Installing nvm + Node.js LTS..."
  curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  export NVM_DIR="$HOME/.nvm"
  # shellcheck source=/dev/null
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  nvm install --lts
  nvm use --lts
else
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
fi

# Clone
echo "Cloning Aether..."
git clone https://github.com/StilyanX/aether.git
cd aether

# Install dependencies
echo "Installing dependencies..."
npm install

# Start
echo ""
echo "Opening Aether at http://localhost:8000"
npm run dev
