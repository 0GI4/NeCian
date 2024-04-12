const React = require('react');

module.exports = function AdvertismentCard({ advertisment, user }) {
  return (
    <a href={`/advertisments/${advertisment.id}/page`}>
      <img src={advertisment.Images[0].photo} />
      <p className={`price${advertisment.id}`}>{advertisment.price} ₽</p>
      <h2>
        <em className={`description${advertisment.id}`}>
          {advertisment.description}
        </em>
      </h2>
    </a>
  );
};
