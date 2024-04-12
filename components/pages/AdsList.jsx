const React = require('react');
const Layout = require('../Layout');
const AdvertismentCard = require('../ui/AdvertismentCard');
const FilterHouse = require('../ui/FilterHouse');

module.exports = function AdsList({ title, user, advertisments, categories }) {

  return (
    <Layout title={title} user={user}>
      <FilterHouse categories={categories} />
      <div className="advertismentList advertisment-container">
        {advertisments.map((advertisement) => {
          const likeCount = advertisement.Likes
            ? advertisement.Likes.length
            : 0;
          // Проверяем, зарегистрирован ли пользователь перед проверкой лайков
          const isLikedByUser =
            user &&
            advertisement.Likes &&
            advertisement.Likes.some((like) => like.userId === user.id);

          return (
            <div
              key={advertisement.id}
              data-id={advertisement.id}
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
              {user && (
                <button className="like-button">
                  {isLikedByUser ? '❤️' : '🤍'}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
