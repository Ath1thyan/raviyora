import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { generateEmailTemplate } from './src/utils/emailTemplate.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({ 
        success: false,
        message: 'All fields are required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false,
        message: 'Invalid email format' 
      });
    }

    // Create a transporter using Mailtrap credentials (API token method)
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      auth: {
        user: process.env.MAILTRAP_USER, // should be 'api' or 'smtp@mailtrap.io'
        pass: process.env.MAILTRAP_TOKEN // API token
      }
    });

    // Verify transporter configuration
    await transporter.verify();

    // Email content for admin
    const mailOptionsAdmin = {
      from: `"Secret & Spice Contact Form" <${process.env.FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      html: generateEmailTemplate({ name, email, phone, subject, message }),
      replyTo: email
    };

    // Email content for user (confirmation)
    const mailOptionsUser = {
      from: `"Secret & Spice" <${process.env.FROM_EMAIL}>`,
      to: email,
      subject: "Thank you for contacting Secret & Spice!",
      html: `
        <div style="font-family: 'Poppins', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #1a1a1a; color: #333;">
          <div style="background: #fff; border-radius: 16px; padding: 30px; text-align: center;">
            <h1 style="color: #D4AF37;">Thank You, ${name}!</h1>
            <p>We have received your message and will get back to you soon.</p>
            <p style="margin-top: 24px; color: #666; font-size: 15px;">Secret & Spice Restaurant<br/>Team</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptionsAdmin);
    await transporter.sendMail(mailOptionsUser);

    console.log('Email sent successfully');
    return res.status(200).json({ 
      success: true,
      message: 'Email sent successfully' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      success: false,
      message: 'Error sending email',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 