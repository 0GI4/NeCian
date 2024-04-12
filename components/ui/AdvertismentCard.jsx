const React = require('react');

module.exports = function AdvertismentCard({ advertisment, user }) {
  return (
    <a href={`/advertisments/${advertisment.id}`} className="advertisment-card">
      <div className="advertisment-images">
        {advertisment.Images.map((image, index) => (
          <img
            key={index}
            src={image.photo}
            alt={`Фото ${index + 1}`}
          />
        ))}
      </div>
      <p className={`price${advertisment.id}`}>{advertisment.price} ₽</p>
      <h2>
        <em className={`description${advertisment.id}`}>
          {advertisment.description}
        </em>
      </h2>
    </a>
  );
};
