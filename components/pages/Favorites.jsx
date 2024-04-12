// В вашем файле Favorites.js
const React = require('react');
const Layout = require('../Layout');
const AdvertismentCard = require('../ui/AdvertismentCard');

module.exports = function Favorites({
  title,
  user,
  advertisments,
  ads,
}) {
  const likedAdvertisments = advertisments.filter(advertisement =>
    ads.some(ad => ad.id === advertisement.id && ad.Likes.some(like => like.userId === user.id))
  );

  return (
    <Layout title={title} user={user}>
      <div className="advertismentList favorites">
        {likedAdvertisments.map((advertisement) => {
          const ad = ads.find((ad) => ad.id === advertisement.id);
          const likeCount = ad ? ad.Likes.length : 0;
          const isLikedByUser = ad && ad.Likes.some((like) => like.userId === user.id);

          return (
            <div
              key={advertisement.id}
              className="card"
              data-id={advertisement.id}
              style={{ width: '18rem', margin: '20px' }}
            >
              <AdvertismentCard
                key={advertisement.id}
                advertisment={advertisement}
                user={user}
              />
              <div className={`quantityLikes${advertisement.id}`}>
                {likeCount}
              </div>
              <button
                className="like-button"
              >
                {isLikedByUser ? '❤️' : '🤍'}
              </button>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
