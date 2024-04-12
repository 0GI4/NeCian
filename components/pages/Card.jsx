const React = require('react');
const Layout = require('../Layout');
const AdvertismentCard = require('../ui/AdvertismentCard');

module.exports = function Card({ title, user, advertisment }) {
  const likeCount = advertisment.Likes ? advertisment.Likes.length : 0;
  // Проверяем, зарегистрирован ли пользователь перед проверкой лайков
  const isLikedByUser =
    user &&
    advertisment.Likes &&
    advertisment.Likes.some((like) => like.userId === user.id);

  return (
    <Layout title={title} user={user}>
      <div
        key={advertisment.id}
        data-id={advertisment.id}
        className="card"
        style={{ width: '18rem', margin: '20px' }}
      >
        <AdvertismentCard
          key={advertisment.id}
          advertisment={advertisment}
          user={user}
        />
        <div className={`quantityLikes${advertisment.id}`}>{likeCount}</div>
        <button className="like-button">{isLikedByUser ? '❤️' : '🤍'}</button>
      </div>
    </Layout>
  );
};
