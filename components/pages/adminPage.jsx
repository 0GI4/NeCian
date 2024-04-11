const React = require('react');
const Layout = require('../Layout');
const AddAdv = require('../ui/addAdv');
const AdvertismentCard = require('../ui/AdvertismentCard');

module.exports = function adminPage({
  advertisments,
  title,
  user,
  categories,
}) {
  return (
    <Layout title={title} user={user}>
      <AddAdv user={user} /* categories={categories} */ />
      <div className="listAdmin">
        {advertisments.map((el) => (
          <div
            key={el.id}
            className="card"
            data-id={el.id}
            style={{ width: '18rem', margin: '20px' }}
          >
            <AdvertismentCard advertisment={el} />
            {user && <button className="del">Удалить</button>}
            {user && (
              <button className="del upd updateBtn" data-id={el.id}>
                Изменить
              </button>
            )}
            {user && (
              <form
                className={`updateForm formUpdate${el.id} hidden`}
                data-id={el.id}
              >
                <input
                  type="text"
                  name="description"
                  placeholder="Описание"
                  defaultValue={el.description}
                />
                <input
                  type="text"
                  name="price"
                  placeholder="Цена"
                  defaultValue={el.price}
                />
                <button type="submit" className="saveUpdate" data-id={el.id}>
                  Сохранить
                </button>
              </form>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
};
