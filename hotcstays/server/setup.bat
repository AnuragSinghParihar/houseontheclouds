@echo off

echo Creating .env file...

(
echo # Server Configuration
echo PORT=5000
echo FRONTEND_URL=http://localhost:5173
echo.
echo # Email Configuration
echo EMAIL_USER=houseonthecloudsspiti@gmail.com
echo EMAIL_PASS=Hotel@2025
echo.
echo # Security
echo NODE_ENV=development
) > .env

echo ✅ .env file created successfully!

echo 📦 Installing dependencies...
npm install

echo ✅ Setup complete!
echo 🚀 To start the server, run: npm run dev
pause

