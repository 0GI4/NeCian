const router = require('express').Router();
const { Advertisment, Category, Image } = require('../../db/models');
const adminPage = require('../../components/pages/adminPage');

router.get('/', async (req, res) => {
  try {
    const advertisments = await Advertisment.findAll(
      {
        include: [
          {
            model: Image,
          },
        ],
      },
      {
        order: [['id', 'ASC']],
      }
    );

    if (res.locals.user) {
      if (res.locals.user.isAdmin) {
        const categories = await Category.findAll();
        const document = res.renderComponent(adminPage, {
          title: 'Объявления',
          advertisments,
          categories,
        });
        res.send(document);
      } else {
        res.redirect('/');
      }
    } else {
      res.redirect('/');
    }
  } catch (error) {
    console.error('Ошибка при получении списка объявлений:', error);
    res.status(500).send('Внутренняя ошибка сервера');
  }
});

module.exports = router;
