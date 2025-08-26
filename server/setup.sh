#!/bin/bash

# Create .env file with the correct configuration
cat > .env << 'EOF'
# Server Configuration
PORT=5000
FRONTEND_URL=http://localhost:5173

# Email Configuration
EMAIL_USER=houseonthecloudsspiti@gmail.com
EMAIL_PASS=Hotel@2025

# Security
NODE_ENV=development
EOF

echo "✅ .env file created successfully!"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo "✅ Setup complete!"
echo "🚀 To start the server, run: npm run dev"

