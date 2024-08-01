#!/bin/bash

# Check if the script is run inside a React project directory
if [ ! -f package.json ]; then
  echo "This script should be run inside a React project directory."
  exit 1
fi

echo "Installing Tailwind CSS..."

# Install Tailwind CSS and its peer dependencies
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind CSS
npx tailwindcss init -p

# Create Tailwind configuration files
cat <<EOT > tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOT

# Modify the CSS file to include Tailwind's directives
cat <<EOT > src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
EOT

echo "Tailwind CSS has been installed and configured."

# Optional: Ask the user if they want to start the development server
read -p "Do you want to start the development server now? (y/n): " start_server
if [ "$start_server" = "y" ]; then
  npm start
fi

