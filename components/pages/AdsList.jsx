const React = require('react');
const Layout = require('../Layout');
const AdvertismentCard = require('../ui/AdvertismentCard');
const FilterHouse = require('../ui/FilterHouse');

module.exports = function AdsList({
  title, user, advertisments, ads,
}) {
  const handleLikeClick = async (advertisementId) => {
    try {
      const res = await fetch(`/likes/${advertisementId}`, {
        method: 'PUT',
      });
      const data = await res.json();
      if (data.message === 'ok') {
        // Обновляем стейт или делаем другие необходимые действия
      }
    } catch (error) {
      console.error('Error liking advertisment:', error);
    }
  };

  return (
    <Layout title={title} user={user}>
      <FilterHouse />
      <div className="advertismentList advertisment-container">
        {advertisments.map((advertisement) => {
          const ad = ads.find((ad) => ad.id === advertisement.id);
          const likeCount = ad ? ad.Likes.length : 0;
          const isLikedByUser = ad && ad.Likes.some((like) => like.userId === user.id);

          return (
            <div
              key={advertisement.id}
              className="card"
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
                className={`like-button ${isLikedByUser ? 'liked' : ''}`}
                onClick={() => handleLikeClick(advertisement.id)}
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
