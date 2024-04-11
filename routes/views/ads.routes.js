const router = require("express").Router();
const { Advertisment, Category, Image } = require("../../db/models");
const AdsList = require("../../components/pages/AdsList");
const FilterHouse = require("../../components/ui/FilterHouse");
const AdvertismentCard = require("../../components/ui/AdvertismentCard");

router.get("/", async (req, res) => {
  try {
    const advertisments = await Advertisment.findAll(
      {
        include: [
          {
            model: Image
          },
        ],
      },
      {
        order: [["id", "ASC"]],
      }
    );

    const categories = await Category.findAll();
    const document = res.renderComponent(AdsList, {
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


router.get("/:id/category", async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Advertisment.findAll({
      where: { categoryId: id },
    });
    console.log(category);
    res.json(category); // Отправляем данные как JSON
  } catch (error) {
    console.error("Ошибка при получении объявлений по категории:", error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

router.post('/', async (req, res) => {
  try {
    
  } catch ({ message }) {
    res.json({ message: 'Н'})
    
  }
  const { category, price, description, photo } = req.body;
  if (!category.trim() || !price.trim() || !description.trim() || !photo.trim()) {
    res.json({ message: 'Заполните, пожалуйста, все поля'})
  } else { 
    const advertisment = await Advertisment.create({ category, price, description, photo })
    const html = res.renderComponent(AdvertismentCard, { advertisment }, { doctype: false })
    res.json({ html, message: 'success'})
  }
})

module.exports = router;
