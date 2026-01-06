/**
 * Google Apps Script for Portfolio Contact Form
 * 
 * Setup Instructions:
 * 1. Go to script.google.com
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Save the project with a name like "Portfolio Contact Form"
 * 5. Deploy as a web app:
 *    - Click "Deploy" > "New deployment"
 *    - Choose "Web app" as type
 *    - Set execute as "Me"
 *    - Set access to "Anyone"
 *    - Click "Deploy"
 * 6. Copy the web app URL and replace YOUR_GOOGLE_APPS_SCRIPT_URL in Contact.jsx
 * 7. Update the EMAIL_TO constant below with your email
 */

// Configuration
const EMAIL_TO = 'firuzalamingafarullah@gmail.com'; // Your email address
const EMAIL_SUBJECT_PREFIX = '[Portfolio Contact] ';

/**
 * Main function to handle POST requests from the contact form
 */
function doPost(e) {
  try {
    // Get data from form parameters
    const data = {
      name: e.parameter.name || '',
      email: e.parameter.email || '',
      subject: e.parameter.subject || '',
      message: e.parameter.message || ''
    };
    
    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return ContentService
        .createTextOutput('Missing required fields')
        .setMimeType(ContentService.MimeType.TEXT);
    }
    
    // Send email notification
    sendEmailNotification(data);
    
    // Send auto-reply to the sender
    sendAutoReply(data);
    
    // Log the submission (optional)
    logSubmission(data);
    
    return ContentService
      .createTextOutput('Success')
      .setMimeType(ContentService.MimeType.TEXT);
      
  } catch (error) {
    Logger.log('Error processing contact form: ' + error.toString());
    return ContentService
      .createTextOutput('Error: ' + error.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

/**
 * Handle GET requests (for testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ message: 'Portfolio Contact Form API is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Send email notification to you
 */
function sendEmailNotification(data) {
  const subject = EMAIL_SUBJECT_PREFIX + data.subject;
  
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
      </div>
      
      <div style="padding: 20px; background: #f9f9f9;">
        <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Details</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 10px; background: white; border: 1px solid #ddd; font-weight: bold; width: 120px;">Name:</td>
            <td style="padding: 10px; background: white; border: 1px solid #ddd;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background: #f8f9fa; border: 1px solid #ddd; font-weight: bold;">Email:</td>
            <td style="padding: 10px; background: #f8f9fa; border: 1px solid #ddd;">
              <a href="mailto:${data.email}" style="color: #667eea;">${data.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; background: white; border: 1px solid #ddd; font-weight: bold;">Subject:</td>
            <td style="padding: 10px; background: white; border: 1px solid #ddd;">${data.subject}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background: #f8f9fa; border: 1px solid #ddd; font-weight: bold;">Submitted:</td>
            <td style="padding: 10px; background: #f8f9fa; border: 1px solid #ddd;">${new Date().toLocaleString()}</td>
          </tr>
        </table>
        
        <h3 style="color: #333; border-bottom: 1px solid #667eea; padding-bottom: 5px;">Message:</h3>
        <div style="background: white; padding: 15px; border-left: 4px solid #667eea; margin: 10px 0;">
          ${data.message.replace(/\n/g, '<br>')}
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 5px;">
          <p style="margin: 0; color: #1976d2;">
            <strong>Quick Actions:</strong>
            <a href="mailto:${data.email}?subject=Re: ${data.subject}" 
               style="color: #1976d2; text-decoration: none; margin-left: 10px;">Reply to ${data.name}</a>
          </p>
        </div>
      </div>
      
      <div style="background: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
        <p style="margin: 0;">This email was sent from your portfolio contact form</p>
      </div>
    </div>
  `;
  
  const plainBody = `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}
Submitted: ${new Date().toLocaleString()}

Message:
${data.message}

---
Reply to: ${data.email}
  `;
  
  MailApp.sendEmail({
    to: EMAIL_TO,
    subject: subject,
    htmlBody: htmlBody,
    body: plainBody,
    replyTo: data.email
  });
}

/**
 * Send auto-reply to the person who submitted the form
 */
function sendAutoReply(data) {
  const subject = 'Thank you for contacting me!';
  
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">Thank You, ${data.name}!</h1>
      </div>
      
      <div style="padding: 30px; background: #f9f9f9;">
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Hi ${data.name},
        </p>
        
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Thank you for reaching out through my portfolio! I've received your message about 
          "<strong>${data.subject}</strong>" and I appreciate you taking the time to contact me.
        </p>
        
        <div style="background: white; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">What happens next?</h3>
          <ul style="color: #666; line-height: 1.8;">
            <li>I'll review your message carefully</li>
            <li>You can expect a personal response within 24-48 hours</li>
            <li>Feel free to connect with me on LinkedIn in the meantime</li>
          </ul>
        </div>
        
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          In the meantime, feel free to:
        </p>
        
        <div style="text-align: center; margin: 25px 0;">
          <a href="https://linkedin.com/in/firozlamin" 
             style="display: inline-block; background: #0077b5; color: white; padding: 12px 25px; 
                    text-decoration: none; border-radius: 5px; margin: 0 10px;">
            Connect on LinkedIn
          </a>
        </div>
        
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Best regards,<br>
          <strong>Firuz Al Amin Gafarullah</strong><br>
          <span style="color: #666;">B.C.A. in AI & Machine Learning</span><br>
          <span style="color: #666;">Full-stack Developer & UI/UX Designer</span>
        </p>
      </div>
      
      <div style="background: #333; color: white; padding: 20px; text-align: center;">
        <p style="margin: 0; font-size: 14px;">
          📧 firuzalamingafarullah@gmail.com
        </p>
        <p style="margin: 5px 0 0 0; font-size: 12px; color: #ccc;">
          This is an automated response. Please don't reply to this email.
        </p>
      </div>
    </div>
  `;
  
  const plainBody = `
Hi ${data.name},

Thank you for reaching out through my portfolio! I've received your message about "${data.subject}" and I appreciate you taking the time to contact me.

What happens next?
- I'll review your message carefully
- You can expect a personal response within 24-48 hours
- Feel free to connect with me on LinkedIn in the meantime

Best regards,
Firuz Al Amin Gafarullah
B.C.A. in AI & Machine Learning
Full-stack Developer & UI/UX Designer

Email: firuzalamingafarullah@gmail.com
LinkedIn: https://linkedin.com/in/firozlamin

---
This is an automated response. Please don't reply to this email.
  `;
  
  MailApp.sendEmail({
    to: data.email,
    subject: subject,
    htmlBody: htmlBody,
    body: plainBody,
    replyTo: EMAIL_TO
  });
}

/**
 * Log submission to a Google Sheet (optional)
 * Uncomment and modify if you want to track submissions
 */
function logSubmission(data) {
  try {
    // Create or get the spreadsheet
    const spreadsheetName = 'Portfolio Contact Submissions';
    let spreadsheet;
    
    try {
      spreadsheet = SpreadsheetApp.openByName(spreadsheetName);
    } catch (e) {
      // Create new spreadsheet if it doesn't exist
      spreadsheet = SpreadsheetApp.create(spreadsheetName);
      const sheet = spreadsheet.getActiveSheet();
      
      // Add headers
      sheet.getRange(1, 1, 1, 6).setValues([
        ['Timestamp', 'Name', 'Email', 'Subject', 'Message', 'Status']
      ]);
      
      // Format headers
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
      sheet.getRange(1, 1, 1, 6).setBackground('#667eea');
      sheet.getRange(1, 1, 1, 6).setFontColor('white');
    }
    
    const sheet = spreadsheet.getActiveSheet();
    
    // Add the new submission
    sheet.appendRow([
      new Date(),
      data.name,
      data.email,
      data.subject,
      data.message,
      'New'
    ]);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, 6);
    
  } catch (error) {
    console.error('Error logging submission:', error);
    // Don't throw error - logging is optional
  }
}