const router = require('express').Router();
const Router404 = require('../../components/pages/Router404.jsx');

router.get('/', (req, res) => {
  const document = res.renderComponent(Router404, {
    title: 'main',
  });

  res.send(document);
});
module.exports = router;
