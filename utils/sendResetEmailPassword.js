const sendEmail = require('./sendEmail');

const sendResetEmailPassword = async ({
  name,
  email,
  verificationToken,
  origin,
}) => {
  const resetURL = `${origin}/user/reset-password?token=${verificationToken}&email=${email}`;

  const msg = `<p>please reset password by clicking on the following link: 
  <a href="${resetURL}">reset password</a></p> `;

  return sendEmail({
    to: email,
    subject: 'reset password',
    html: `<h4>hello, ${name}</h4> 
    ${msg}`,
  });
};

module.exports = sendResetEmailPassword;
