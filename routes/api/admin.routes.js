const router = require('express').Router();
const { Advertisment } = require('../../db/models');

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.parasm;
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

module.exports = router;
