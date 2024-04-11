const React = require('react');
const Layout = require('../Layout');
const AdvertismentCard = require('../ui/AdvertismentCard');

module.exports = function Favorites({
  title,
  user,
  advertisments,
}) {
  return (
    <Layout title={title} user={user}>
      <div className="advertismentList favorites">
        {advertisments.map((el) => (
          <div
            key={el.id}
            className="card"
            data-id={advertisments.id}
            style={{ width: '18rem', margin: '20px' }}
          >
            <AdvertismentCard
              key={el.id}
              s
              advertisment={el}
              user={user}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};
