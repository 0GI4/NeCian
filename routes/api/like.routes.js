const express = require('express');

const router = express.Router();
const { Like } = require('../../db/models');

router.put('/:advertisementId/change', async (req, res) => {
  const { id } = res.locals.user;
  const { advertisementId } = req.params;
  console.log(advertisementId);
  try {
    const like = await Like.findOne({
      where: { adsId: advertisementId, userId: id },
    });
    if (like) {
      await Like.destroy({ where: { adsId: advertisementId, userId: id } });
      res.status(200).json({ message: 'Лайк отменен' });
    } else {
      await Like.create({ adsId: advertisementId, userId: id });
      res.status(200).json({ message: 'Лайк добавлен' });
    }
  } catch (error) {
    console.error('Ошибка обработки лайка:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = router;
