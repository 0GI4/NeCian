const router = require('express').Router();
const { Advertisment, Image } = require('../../db/models');

router.post('/:cardId/changeup/:currentImageIndex', async (req, res) => {
  try {
    const { cardId, currentImageIndex } = req.params;
    const advertisment = await Advertisment.findByPk(cardId, {
      include: [{ model: Image }],
    });

    if (!advertisment) {
      return res.status(404).json({ message: 'Объявление не найдено' });
    }

    const images = advertisment.Images.reverse();
    // const nextImageIndex = parseInt(currentImageIndex) % images.length;
    // const ImageIndex = (parseInt(currentImageIndex) + 1) % images.length;

    const nextImage = images[+currentImageIndex + 1];
    if (!nextImage) {
      return res.status(404).json({
        message: 'Будущего изображения не найдено',
        photo: images[0].photo,
        index: 0,
      });
    }

    res.json({ photo: nextImage.photo, index: +currentImageIndex + 1 });
  } catch (error) {
    console.error('Ошибка:', error);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
});

router.post('/:cardId/changedown/:currentImageIndex', async (req, res) => {
  try {
    const { cardId, currentImageIndex } = req.params;
    const advertisment = await Advertisment.findByPk(cardId, {
      include: [Image],
    });

    if (!advertisment) {
      return res.status(404).json({ message: 'Объявление не найдено' });
    }

    const images = advertisment.Images.reverse();
    /*     const prevImageIndex = parseInt(currentImageIndex) % images.length;
    const ImageIndex = (parseInt(currentImageIndex) - 1) % images.length; */
    console.log(images, 'cccccccc');
    const prevImage = images[+currentImageIndex - 1];
    if (!prevImage) {
      return res.status(404).json({
        message: 'Предыдущее изображение не найдено',
        photo: images[images.length - 1].photo,
        index: images.length - 1,
      });
    }

    res.json({ photo: prevImage.photo, index: +currentImageIndex - 1 });
  } catch (error) {
    console.error('Ошибка:', error);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
});

module.exports = router;
