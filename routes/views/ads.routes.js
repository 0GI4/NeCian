const router = require('express').Router();
const { User, Advertisment, Category, Like } = require('../../db/models');
const AdsList = require('../../components/pages/AdsList');

router.get('/', async (req, res) => {
  try {
    const advertisments = await Advertisment.findAll({
      order: [['id', 'ASC']],
    });

    const ads = await Advertisment.findAll({
      include: [{ model: Like }],
    });

    const categories = await Category.findAll();
    const document = res.renderComponent(AdsList, {
      title: 'Объявления',
      advertisments,
      categories,
      ads,
    });
    res.send(document);
  } catch (error) {
    console.error('Ошибка при получении списка объявлений:', error);
    res.status(500).send('Внутренняя ошибка сервера');
  }
});

/* router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const advertismentList = await Advertisment.findAll({
    where: { categoryId: id },
  });
  res.send(advertismentList)
}); */

module.exports = router;
