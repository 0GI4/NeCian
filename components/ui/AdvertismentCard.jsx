const React = require('react');

function AdvertismentCard({ advertisment, user }) {
  let currentImageIndex = 0;
console.log(advertisment.Images,'77777')
  return (
    <div id="advertisment-card-container" className="advertisment-card">
      <div className="advertisment-images">
        <img
          className="adsImage"
          data-id={currentImageIndex}
          src={advertisment.Images[currentImageIndex].photo}
          alt={`Фото ${currentImageIndex + 1}`}
        />
      </div>
      {advertisment.Images.length > 1 && (
        <div className="image-controls">
          <button className="back">Назад</button>
          <button className="next">Вперед</button>
        </div>
      )}
      <p className={`price${advertisment.id}`}>
        {advertisment.price}
        {' '}
        ₽
      </p>
      <h2>
        <em className={`description${advertisment.id}`}>
          {advertisment.description}
        </em>
      </h2>
    </div>
  );
}

module.exports = AdvertismentCard;
