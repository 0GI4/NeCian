const React = require("react");

module.exports = function AdvertismentCard({ advertisment, images }) {
  return (
    <div
      className="card"
      data-id={advertisment.id}
      style={{ width: "18rem", margin: "20px" }}
    >
      <div>
        <a href={`/advertisments/${advertisment.id}`}>
          <img src={images.photo} />
          <p>{advertisment.price} ₽</p>
          <h2>
            <em>{advertisment.description}</em>
          </h2>
        </a>
      </div>
    </div>
  );
};
