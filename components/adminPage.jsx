const React = require('react');
const Layout = require('./Layout');
const AddAdv = require('./addAdv');
const AdvertismentCard = require('./AdvertismentCard');

module.exports = function adminPage({
  advertisment, title, category, user, image,
}) {
  return (
    <Layout title={title} user={user}>
      <AddAdv category={category} user={user} />
      <div className="listAdmin">
        {advertisment.map((el) => (
          <div className="card">
            <AdvertismentCard advertisment={el} image={image} />
            {user && user.isAdmin && <button className="del">Удалить</button>}
          </div>
        ))}
      </div>
    </Layout>
  );
};
