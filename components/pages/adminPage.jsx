const React = require('react');
const Layout = require('../Layout');
const AddAdv = require('../ui/addAdv');
const AdvertismentCard = require('../ui/AdvertismentCard');

module.exports = function adminPage({
  advertisments, title, user, categories,
}) {
  return (
    <Layout title={title} user={user}>
      <AddAdv user={user}/* categories={categories} */ />
      <div className="listAdmin">
        {advertisments.map((el) => (
          <div
            key={el.id}
            className="card"
            data-id={advertisments.id}
            style={{ width: '18rem', margin: '20px' }}
          >
            <AdvertismentCard advertisment={el} />
            { user && <button className="del">Удалить</button>}
            { user && <button className="del upd">Изменить</button>}
          </div>
        ))}
      </div>
    </Layout>
  );
};
