const nodemailer = require('nodemailer');

const sendResetEmail = async (to, link) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
  });

  await transporter.sendMail({
    from: `"SoftSell Support" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Password Reset Request",
    html: `
      <p>Click below to reset your password. This link is valid for 15 minutes:</p>
      <a href="${link}">${link}</a>
    `
  });
};

module.exports = sendResetEmail;
