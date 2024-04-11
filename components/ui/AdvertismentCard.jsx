const React = require('react');

module.exports = function AdvertismentCard({ advertisment, images }) {
  return (
    <a href={`/advertisments/${advertisment.id}`}>
      {/* <img src={images.photo} /> */}
      <p className={`price${advertisment.id}`}>{advertisment.price} ₽</p>
      <h2>
        <em className={`description${advertisment.id}`}>
          {advertisment.description}
        </em>
      </h2>
    </a>
  );
};
