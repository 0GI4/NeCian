const router = require('express').Router();
const LogIn = require('../../components/LogIn');
const Registration = require('../../components/Registration');
const jwtConfig = require('../../config/jwtConfig');

router.get('/registration', (req, res) => {
  const html = res.renderComponent(Registration, {
    title: 'Registration',
  });
  res.send(html);
});

router.get('/login', (req, res) => {
  const html = res.renderComponent(LogIn, {
    title: 'Log in',
  });
  res.send(html);
});
module.exports = router;
