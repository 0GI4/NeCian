const React = require('react');

function FilterHouse({ categories }) {
  return (
    <form className="FormFilter">
      <select className="FilterHouse" name="select">
        <option name="drk" value={0}>
          Все категории
        </option>
        {categories.map((category) => (
          <option name="drk" value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <button>Найти</button>
    </form>
  );
}

module.exports = FilterHouse;
