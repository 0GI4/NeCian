const router = require('express').Router();

const AdsList = require('../../components/AdsList');

router.get('/', async (req, res) => {
  /* try { */

  const document = res.renderComponent(AdsList, {
    title: 'Объявления',
  });
  res.send(document);
  /* } catch (error) {
    console.error('Ошибка при получении списка объявлений:', error);
    res.status(500).send('Внутренняя ошибка сервера');
  } */
});

module.exports = router;
