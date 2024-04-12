const router = require('express').Router();
const {
  User,
  Advertisment,
  Category,
  Like,
  Image,
} = require('../../db/models');
const AdsList = require('../../components/pages/AdsList');
const FilterHouse = require('../../components/ui/FilterHouse');

router.get('/', async (req, res) => {
  try {
    const advertisments = await Advertisment.findAll({
      include: [
        {
          model: Like,
        },
        {
          model: Image,
        },
      ],
      order: [['id', 'ASC']],
    });

    const categories = await Category.findAll();

    const document = res.renderComponent(AdsList, {
      title: 'Объявления',
      advertisments,
      categories,
      ads: advertisments, // Теперь это те же самые объявления с включенными лайками и изображениями
    });
    res.send(document);
  } catch (error) {
    console.error('Ошибка при получении списка объявлений:', error);
    res.status(500).send('Внутренняя ошибка сервера');
  }
});

router.get('/:id/category', async (req, res) => {
  try {
    const { id } = req.params;
    if (id === '0') {
      const category = await Advertisment.findAll();
      res.json(category);
    } else {
      const category = await Advertisment.findAll({
        where: { categoryId: id },
      });
      if (category.length) {
        res.json(category);
      } else {
        console.log(category.length);
        res.json('Вариантов по заданным параметрам нет');
      }
    }
  } catch (error) {
    console.error('Ошибка при получении объявлений по категории:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = router;
