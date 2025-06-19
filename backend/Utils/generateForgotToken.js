const crypto = require('crypto');

function generateForgotToken() {
  return crypto.randomBytes(32).toString('hex'); // 64-character token
}
module.exports = generateForgotToken;