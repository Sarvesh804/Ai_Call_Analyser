const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/', async (req, res) => {
  const { email, eid, password } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER, // Replace with your email
      pass: process.env.MAIL_PASS,  // Replace with your email password or app-specific password
    },
  });

  let mailOptions = {
    from: process.env.MAIL_USER,
    to: email,
    subject: 'Welcome to the Company',
    html: `
      <p>Your login credentials are as follows:</p>
      <ul>
        <li><strong>EID:</strong> ${eid}</li>
        <li><strong>Password:</strong> ${password}</li>
      </ul>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Welcome email sent!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ error: 'Failed to send email' });
  }
});

module.exports = router;
