const jwt = require('jsonwebtoken');
require('dotenv').config();
function generateToken(userId) {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET || '9340179767',
    { expiresIn: '7d' } 
  );
}

module.exports = generateToken;
