const router = require('express').Router();
const Favorites = require('../../components/pages/Favorites');
const { Advertisment, Like } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const { id } = res.locals.user;
    const likes = await Like.findAll({
      where: { userId: id },
      include: [{ model: Advertisment }],
    });
    const ads = await Advertisment.findAll({
      include: [{ model: Like }],
    });

    const advertisments = likes.map((like) => like.Advertisment);

    const document = res.renderComponent(Favorites, {
      title: 'Избранное',
      advertisments,
      user: res.locals.user,
      ads,
    });
    res.send(document);
  } catch (error) {
    console.error('Error fetching favorites:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
