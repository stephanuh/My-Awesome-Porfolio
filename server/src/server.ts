import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-netlify-domain.netlify.app'] 
    : ['http://localhost:3000'],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Types for form data
interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

// Contact form endpoint
app.post('/api/contact', async (req: Request, res: Response) => {
  console.log('Contact form submission received:', req.body);
  const { name, email, subject, message } = req.body as ContactFormData;
  
  try {
    console.log('Attempting to send email...');
    console.log('Using email:', process.env.EMAIL_USER);
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });
    
    // Send email to me when someone submits the form
    const info = await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER as string,
      replyTo: email,
      subject: `Portfolio Contact: ${subject || 'New Message'}`,
      html: `
        <h3>New message from your portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });
    
    console.log('Email sent successfully:', info.messageId);
    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  
  app.get('*', (_: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.get('/api/status', (req: Request, res: Response) => {
  res.json({ status: 'Server is running properly' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});