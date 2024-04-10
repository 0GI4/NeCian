const React = require("react");

module.exports = function AdvertismentCard({ advertisment, images }) {
  return (
    <a href={`/advertisments/${advertisment.id}`}>
      {<img src={images.photo} />}
      <p>{advertisment.price} ₽</p>
      <h2>
        <em>{advertisment.description}</em>
      </h2>
    </a>
  );
};
