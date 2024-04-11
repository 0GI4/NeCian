const router = require("express").Router();
const { Advertisment, Category } = require("../../db/models");
const adminPage = require("../../components/pages/adminPage");

router.get("/", async (req, res) => {
  try {
    const advertisments = await Advertisment.findAll(
      {
        include: [
          {
            model: Image,
          },
        ],
      },
      {
        order: [["id", "ASC"]],
      }
    );
    const categories = await Category.findAll();
    const document = res.renderComponent(adminPage, {
      title: "Объявления",
      advertisments,
      categories,
    });
    res.send(document);
  } catch (error) {
    console.error("Ошибка при получении списка объявлений:", error);
    res.status(500).send("Внутренняя ошибка сервера");
  }
});

module.exports = router;
