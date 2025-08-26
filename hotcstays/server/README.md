# House on the Clouds - Backend Server

This is the backend server for the House on the Clouds website contact form. It handles form submissions and sends emails to the business email.

## Features

- ✅ **Real Email Sending**: Sends contact form submissions to `houseonthecloudsspiti@gmail.com`
- ✅ **Auto-Reply**: Sends confirmation emails to customers
- ✅ **Form Validation**: Server-side validation for all fields
- ✅ **Rate Limiting**: Prevents spam (5 requests per 15 minutes per IP)
- ✅ **Security**: CORS, Helmet, and input validation
- ✅ **Error Handling**: Proper error responses and logging
- ✅ **Professional Email Templates**: Beautiful HTML email templates

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Gmail App Password

1. Go to your Gmail account settings
2. Enable 2-Factor Authentication
3. Generate an App Password:
   - Go to Security → App passwords
   - Select "Mail" and "Other (Custom name)"
   - Name it "House on the Clouds Website"
   - Copy the generated password

### 3. Create Environment File

Copy the example environment file and configure it:

```bash
cp env.example .env
```

Edit `.env` file:

```env
# Server Configuration
PORT=5000
FRONTEND_URL=http://localhost:5173

# Email Configuration
EMAIL_USER=houseonthecloudsspiti@gmail.com
EMAIL_PASS=your_gmail_app_password_here

# Security
NODE_ENV=development
```

**Important**: Replace `your_gmail_app_password_here` with the actual app password from step 2.

### 4. Start the Server

```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### POST `/api/contact`

Handles contact form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "subject": "Booking Inquiry",
  "message": "I would like to book a room...",
  "checkIn": "2024-06-15",
  "checkOut": "2024-06-18",
  "guests": "2",
  "roomPreference": "Dawa"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your message has been sent successfully! We will get back to you within 2-4 hours."
}
```

### GET `/api/health`

Health check endpoint.

**Response:**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

## Email Features

### 1. Business Notification Email
- Sent to: `houseonthecloudsspiti@gmail.com`
- Contains: All form data in a professional HTML template
- Reply-to: Customer's email address for easy replies

### 2. Customer Auto-Reply
- Sent to: Customer's email address
- Contains: Confirmation message with their details
- Professional branding with House on the Clouds styling

## Security Features

- **Rate Limiting**: 5 requests per 15 minutes per IP
- **CORS Protection**: Only allows requests from configured frontend URL
- **Input Validation**: Server-side validation for all fields
- **Helmet**: Security headers
- **Error Handling**: No sensitive information leaked in errors

## Production Deployment

For production deployment:

1. Set `NODE_ENV=production` in `.env`
2. Update `FRONTEND_URL` to your production domain
3. Use a process manager like PM2:
   ```bash
   npm install -g pm2
   pm2 start server.js --name "hotcstays-backend"
   ```

## Troubleshooting

### Email Not Sending
1. Check if Gmail app password is correct
2. Ensure 2-Factor Authentication is enabled
3. Check server logs for error messages

### CORS Errors
1. Verify `FRONTEND_URL` in `.env` matches your frontend URL
2. Check if frontend is running on the correct port

### Rate Limiting
- Default limit is 5 requests per 15 minutes per IP
- Adjust in `server.js` if needed

## Support

For issues or questions, contact the development team or check the server logs for detailed error information.

