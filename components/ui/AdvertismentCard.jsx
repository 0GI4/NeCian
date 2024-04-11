const React = require("react");

module.exports = function AdvertismentCard({ advertisment, user }) {
  return (
    <a href={`/advertisments/${advertisment.id}`}>
      <img src={advertisment.Images[0].photo} />
      <p>{advertisment.price} ₽</p>
      <h2>
        <em>{advertisment.description}</em>
      </h2>
    </a>
  );
};
