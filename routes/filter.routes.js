const Advertisment = require("../db/models/advertisment");

const router = require("express").Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const advertismentList = await Advertisment.findAll({
    where: { categoryId: id },
  });
  res.send(advertismentList)
});

module.exports = router;
