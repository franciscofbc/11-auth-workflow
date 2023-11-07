const sendEmail = require('./sendEmail');

const sendVerificationEmail = async ({
  name,
  email,
  verificationToken,
  origin,
}) => {
  const msg =
    '<p>please confirm your email by clicking on the following link: </p>';

  return sendEmail({
    to: email,
    subject: 'email confirmation',
    html: `<h4>hello, ${name}</h4> 
    ${msg}`,
  });
};

module.exports = sendVerificationEmail;
