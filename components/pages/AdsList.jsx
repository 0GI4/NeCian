const React = require('react');
const Layout = require('../Layout');
const AdvertismentCard = require('../ui/AdvertismentCard');
const FilterHouse = require('../ui/FilterHouse');

module.exports = function AdsList({ title, user, advertisments, categories }) {
  return (
    <Layout title={title} user={user}>
      <FilterHouse categories={categories}/>
      <div className="advertismentList advertisment-container">
        {advertisments.map((el) => (
          <div
            key={el.id}
            className="card"
            data-id={advertisments.id}
            style={{ width: '18rem', margin: '20px' }}
          >
            <AdvertismentCard
              key={el.id}
              advertisment={el}
              user={user}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};
