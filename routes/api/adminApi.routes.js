const router = require('express').Router();
const { Advertisment, Image } = require('../../db/models');
const AdvertismentCard = require('../../components/ui/AdvertismentCard');
const fileupload = require('../../utils/fileupload');

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const value = await Advertisment.destroy({
      where: {
        id,
      },
    });
    if (value) {
      res.status(200).json({ message: 'Success' });
    } else {
      res.status(404).json({ message: 'Failed' });
    }
  } catch (error) {
    console.error('Ошибка при удалении объявления:', error);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description, price } = req.body;
    const [updated] = await Advertisment.update(
      { description, price },
      { where: { id } }
    );
    if (updated) {
      res.status(200).json({ message: 'ok' });
    } else {
      res.status(404).json({ message: 'Объявление не найдено' });
    }
  } catch (error) {
    console.error('Ошибка при обновлении объявления:', error);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { categoryId, price, description } = req.body;
    let files = req.files ? req.files.url : null;

    if (!categoryId.trim() || !price.trim() || !description.trim() || !files) {
      res.json({ message: 'Заполните, пожалуйста, все поля' });
    }

    const advertisment = await Advertisment.create({
      categoryId,
      price,
      description,
    });

    if (!Array.isArray(files)) {
      files = [files];
    }

    const imageUploadPromises = files.map(async (file) => {
      const photo = await fileupload(file); // Предполагаем, что fileupload это функция загрузки файла
      return Image.create({
        photo,
        adsId: advertisment.id, // Убедитесь, что adsId - это корректное название внешнего ключа для вашей модели
      });
    });

    await Promise.all(imageUploadPromises);

    const advertismentWithImages = await Advertisment.findByPk(
      advertisment.id,
      {
        include: [Image],
      }
    );

    const html = res.renderComponent(
      AdvertismentCard,
      { advertisment: advertismentWithImages },
      { doctype: false }
    );
    res.json({ html, message: 'success' });
  } catch (error) {
    console.error('Ошибка при создании объявления:', error);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
});

module.exports = router;
