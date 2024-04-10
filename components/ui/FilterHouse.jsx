const React = require("react");

function FilterHouse({ categories }) {
  return (
    <form className="FormFilter">
      <select className="FilterHouse">
        <option headers>Выберите категорию</option>
        {/* {categories.map((category) => (
          <option name = {`${category.id}`} value={category.id}>{category.name}</option>
        ))} */}
        <option value="1">квартира</option>
        <option value="2">дом</option>
        <option value="3">комната</option>
      </select>
      <button>Найти</button>
    </form>
  );
}

module.exports = FilterHouse;
