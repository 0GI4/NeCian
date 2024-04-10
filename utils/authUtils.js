// require('dotenv').config();
const jwt = require('jsonwebtoken');
const jwtConfig = require('../../презы/code/2phase/221 bcrypt cookie JWT IDOR/config/jwtConfig');

const generateTokens = (payload) => ({
  accessToken: jwt.sign(payload, 'access', { expiresIn: jwtConfig.access.expiresIn }),
  refreshToken: jwt.sign(payload, 'refresh', { expiresIn: jwtConfig.refresh.expiresIn }),
});

module.exports = { generateTokens };
