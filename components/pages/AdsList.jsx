const React = require("react");
const Layout = require("../Layout");
const AdvertismentCard = require("../ui/AdvertismentCard");
const FilterHouse = require('../ui/FilterHouse')

module.exports = function AdsList({ title, user, advertisments }) {
  return (
    <Layout title={title} user={user}>
      <FilterHouse/>
      <div className="advertismentList advertisment-container">
        {advertisments.map((el) => (
          <AdvertismentCard
            key={el.id}
            advertisment={el}
            user={user}
          ></AdvertismentCard>
        ))}
      </div>
    </Layout>
  );
};
