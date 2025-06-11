export const generateEmailTemplate = ({ name, email, phone, subject, message }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Form Submission</title>
      </head>
      <body style="
        font-family: 'Poppins', Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #1a1a1a;
      ">
        <div style="
          background-color: #ffffff;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          border: 1px solid rgba(212, 175, 55, 0.2);
        ">
          <!-- Header -->
          <div style="
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #D4AF37;
            position: relative;
          ">
            <div style="
              width: 120px;
              height: 120px;
              margin: 0 auto 15px;
              background-color: #D4AF37;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 24px;
              font-weight: bold;
              color: #fff;
            ">
              S&S
            </div>
            <h1 style="
              color: #D4AF37;
              margin: 0;
              font-size: 28px;
              font-weight: 600;
              letter-spacing: 0.5px;
            ">New Contact Form Submission</h1>
            <p style="
              color: #666;
              margin: 10px 0 0;
              font-size: 16px;
              font-style: italic;
            ">Secret & Spice Restaurant</p>
          </div>

          <!-- Content -->
          <div style="margin-bottom: 30px;">
            <div style="
              background-color: #f8f8f8;
              padding: 20px;
              border-radius: 12px;
              margin-bottom: 20px;
              border: 1px solid rgba(212, 175, 55, 0.1);
            ">
              <h2 style="
                color: #D4AF37;
                margin: 0 0 15px;
                font-size: 20px;
                font-weight: 500;
              ">Contact Details</h2>
              <p style="margin: 12px 0;">
                <strong style="color: #666; font-weight: 500;">Name:</strong>
                <span style="color: #333; margin-left: 8px;">${name}</span>
              </p>
              <p style="margin: 12px 0;">
                <strong style="color: #666; font-weight: 500;">Email:</strong>
                <span style="color: #333; margin-left: 8px;">${email}</span>
              </p>
              <p style="margin: 12px 0;">
                <strong style="color: #666; font-weight: 500;">Phone:</strong>
                <span style="color: #333; margin-left: 8px;">${phone}</span>
              </p>
              <p style="margin: 12px 0;">
                <strong style="color: #666; font-weight: 500;">Subject:</strong>
                <span style="color: #333; margin-left: 8px;">${subject}</span>
              </p>
            </div>

            <div style="
              background-color: #f8f8f8;
              padding: 20px;
              border-radius: 12px;
              border: 1px solid rgba(212, 175, 55, 0.1);
            ">
              <h2 style="
                color: #D4AF37;
                margin: 0 0 15px;
                font-size: 20px;
                font-weight: 500;
              ">Message</h2>
              <p style="
                color: #333;
                margin: 0;
                white-space: pre-wrap;
                line-height: 1.8;
              ">${message}</p>
            </div>
          </div>

          <!-- Footer -->
          <div style="
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid rgba(212, 175, 55, 0.2);
            color: #666;
            font-size: 14px;
          ">
            <p style="margin: 0;">This email was sent from the contact form on Secret & Spice website.</p>
            <p style="margin: 10px 0 0;">
              <a href="mailto:${email}" style="
                color: #D4AF37;
                text-decoration: none;
                font-weight: 500;
                transition: color 0.3s ease;
              ">Reply to ${name}</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
}; 