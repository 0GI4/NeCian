const React = require('react');

module.exports = function AddAdvertisment({ user }) {
  return (
    user && (
      <div className="courseAddDiv">
        <div className="addCourseText">Добавить новое объявление</div>
        <form className="addCourseForm" method="POST" action="/adminPage">
          <input
            className="add"
            name="category"
            type="text"
            placeholder="Название категории"
            required
          />
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
            type="text"
            placeholder="photo url"
          />
          <button className="addBtn">SUBMIT</button>
        </form>
      </div>
    )
  );
};
