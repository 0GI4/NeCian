const React = require("react");

module.exports = function AddAdvertisment({ user, categories }) {
  return (
    user && (
      <div className="adsAddDiv">
        <div className="addAdvertismentText">Добавить новое объявление</div>
        <form className="addAdvertismentForm" method="POST" action="/adminPage">
          <select
            className="add"
            name="category"
            id="categoryId"
            type="text"
            placeholder="Название категории"
            required
          >
            <option key={3} value={3}>
              Все категории{" "}
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <input className="add" name="price" type="text" placeholder="Цена" />
          <input
            className="add"
            name="description"
            type="text"
            placeholder="Описание категории"
          />
          <input
            className="add"
            name="photo"
            type="file"
            placeholder="photo url"
            multiple
          />
          <button className="addBtn">SUBMIT</button>
        </form>
      </div>
    )
  );
};
