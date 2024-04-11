const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { User } = require('../../db/models');
const { generateTokens } = require('../../utils/authUtils');
const jwtConfig = require('../../config/jwtConfig');

router.post('/registration', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (name.trim() && email.trim() && password.trim()) {
      let user = await User.findOne({ where: { email } });
      if (!user) {
        const hash = await bcrypt.hash(password, 10);
        user = await User.create({ name, email, password: hash });
        const { accessToken, refreshToken } = generateTokens({
          user: {
            id: user.id,
            email: user.email,
            name: user.name,
          },
        });
        res.cookie('access', accessToken, {
          httpOnly: true,
          maxAge: jwtConfig.access.expiresIn,
        });
        res.cookie('refresh', refreshToken, {
          httpOnly: true,
          maxAge: jwtConfig.refresh.expiresIn,
        });
        res.status(201).json({ message: 'ok' });
      } else {
        res.status(400).json({ message: 'такой пользователь уже существует' });
      }
    } else {
      res.status(400).json({ message: 'заполните все поля' });
    }
  } catch ({ message }) {
    console.log(message);
    res.status(500).json(message);
  }
});

router.post('/login', async (req, res) => {
  try {
    if (req.body.email.trim() && req.body.password.trim()) {
      const user = await User.findOne({ where: { email: req.body.email } });

      if (user) {
        const isSame = await bcrypt.compare(req.body.password, user.password);

        if (isSame) {
          const { accessToken, refreshToken } = generateTokens({
            user: { id: user.id, email: user.email, name: user.name },
          });
          res.cookie('access', accessToken, {
            httpOnly: true,
            maxAge: jwtConfig.access.expiresIn,
          });
          res.cookie('refresh', refreshToken, {
            httpOnly: true,
            maxAge: jwtConfig.refresh.expiresIn,
          });
          res.status(201).json({ message: 'ok' });
        } else {
          res.status(400).json({
            message:
              'Такого пользователя не существует,либо email или пароль не верен',
          });
        }
      } else {
        res.status(400).json({
          message:
            'Такого пользователя не существует,либо email или пароль не верен',
        });
      }
    } else {
      res.status(400).json({ message: 'Заполните все поля' });
    }
  } catch ({ message }) {
    console.log(message);
    res.status(500).json(message);
  }
});

router.get('/logout', (req, res) => {
  res.clearCookie(jwtConfig.refresh.type).clearCookie(jwtConfig.access.type);
  res.locals.user = undefined;
  res.redirect('/');
});

module.exports = router;
