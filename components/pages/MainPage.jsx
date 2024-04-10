const React = require("react");
const Layout = require("../Layout");
const AdvertismentCard = require("../ui/AdvertismentCard");

module.exports = function MainPage({ title, user, advertisments }) {
  return (
    <Layout title={title} user={user}>
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
