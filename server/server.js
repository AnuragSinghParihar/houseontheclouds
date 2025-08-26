const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many contact form submissions from this IP, please try again later.'
});
app.use('/api/contact', limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'houseonthecloudsspiti@gmail.com',
      pass: process.env.EMAIL_PASS // This should be an app password from Gmail
    }
  });
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      subject,
      message,
      checkIn,
      checkOut,
      guests,
      roomPreference
    } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields (name, email, subject, message)'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Create email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #b61f1f; text-align: center; margin-bottom: 30px;">New Contact Form Submission</h2>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #333; margin-bottom: 10px;">Contact Information:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; line-height: 1.6;">${message}</p>
          </div>

          ${checkIn || checkOut || guests || roomPreference ? `
          <div style="margin-bottom: 20px;">
            <h3 style="color: #333; margin-bottom: 10px;">Booking Details:</h3>
            ${checkIn ? `<p><strong>Check-in Date:</strong> ${checkIn}</p>` : ''}
            ${checkOut ? `<p><strong>Check-out Date:</strong> ${checkOut}</p>` : ''}
            ${guests ? `<p><strong>Number of Guests:</strong> ${guests}</p>` : ''}
            ${roomPreference ? `<p><strong>Room Preference:</strong> ${roomPreference}</p>` : ''}
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 14px;">
            <p>This message was sent from the House on the Clouds website contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          </div>
        </div>
      </div>
    `;

    // Create transporter
    const transporter = createTransporter();

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER || 'houseonthecloudsspiti@gmail.com',
      to: 'houseonthecloudsspiti@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: emailContent,
      replyTo: email // This allows you to reply directly to the sender
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send auto-reply to customer
    const autoReplyContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #b61f1f; text-align: center; margin-bottom: 30px;">Thank You for Contacting Us!</h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for reaching out to House on the Clouds. We have received your message and will get back to you within 2-4 hours.</p>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h4 style="margin-top: 0; color: #333;">Your Message Details:</h4>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}</p>
          </div>
          
          <p>If you have any urgent inquiries, please feel free to call us at <strong>+91 9805848433</strong>.</p>
          
          <p>Best regards,<br>
          <strong>House on the Clouds Team</strong><br>
          Spiti Valley, Himachal Pradesh</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 12px;">
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      </div>
    `;

    const autoReplyOptions = {
      from: process.env.EMAIL_USER || 'houseonthecloudsspiti@gmail.com',
      to: email,
      subject: 'Thank you for contacting House on the Clouds',
      html: autoReplyContent
    };

    await transporter.sendMail(autoReplyOptions);

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully! We will get back to you within 2-4 hours.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again later or call us at +91 9805848433.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
  console.log(`Contact endpoint: http://localhost:${PORT}/api/contact`);
});

