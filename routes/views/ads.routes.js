const router = require('express').Router();
const {Advertisment} = require("../../db/models/advertisment");
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

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const advertismentList = await Advertisment.findAll({
    where: { categoryId: id },
  });
  res.send(advertismentList)
});

module.exports = router;
