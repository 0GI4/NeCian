const router = require('express').Router();
const AdvertismentCard = require('../../components/ui/AdvertismentCard');
const {
  User,
  Advertisment,
  Category,
  Like,
  Image,
} = require('../../db/models');
const AdsList = require('../../components/pages/AdsList');
const FilterHouse = require('../../components/ui/FilterHouse');
const Card = require('../../components/pages/Card');

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
      const advertisements = await Advertisment.findAll({
        include: [
          {
            model: Image,
          },
        ],
      });
      res.json(advertisements);
    } else {
      const advertisements = await Advertisment.findAll({
        where: { categoryId: id },
        include: [
          {
            model: Image,
          },
        ],
      });
      if (advertisements.length) {
        res.json(advertisements);
      } else {
        res
          .status(404)
          .json({ message: 'Вариантов по заданным параметрам нет' });
      }
    }
  } catch (error) {
    console.error('Ошибка при получении объявлений по категории:', error);
    res
      .status(500)
      .json({ message: 'Ошибка сервера при получении объявлений' });
  }
});

router.get('/advertisments/:id/page', async (req, res) => {
  try {
    const advertisment = await Advertisment.findOne({
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

    const document = res.renderComponent(Card, {
      title: 'Объявления',
      advertisment,
    });
    res.send(document);
  } catch (error) {
    console.error('Ошибка при получении списка объявлений:', error);
    res.status(500).send('Внутренняя ошибка сервера');
  }
});

module.exports = router;
