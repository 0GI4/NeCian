const router = require('express').Router();
const Favorites = require('../../components/pages/Favorites');
const { Like } = require('../../db/models');

router.put('/:adsId', async (req, res) => {
  try {
    const like = await Like.findOne({
      where: { carId: Number(req.params.carId), userId: 2 },
    });
    if (like) {
      await Like.destroy({
        where: { carId: Number(req.params.carId), userId: 2 },
      });
    } else {
      await Like.create({
        carId: Number(req.params.carId),
        userId: 2,
      });
    }
    const likeArr = await Like.findAll({
      raw: true,
      where: { carId: Number(req.params.carId) },
    });
    res.status(200).json({ quantityLikes: likeArr.length, message: 'ok' });
  } catch (e) {
    res.status(500).json(e.message);
  }
});

module.exports = router;
