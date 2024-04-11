const router = require('express').Router();
const { Advertisment } = require('../../db/models');

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
    const [updated] = await Advertisment.update({ description, price }, { where: { id } });

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


module.exports = router;
