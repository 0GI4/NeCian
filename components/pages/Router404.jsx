const React = require('react');
const Layout = require('../Layout');

function Router404({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div
        className="divMazda"

      >

        <div>
          <h1>404 - Страница не найдена</h1>
          <p>Извините, запрашиваемая страница не найдена.</p>
          <img src="/img/video-ezgif.com-video-to-gif-converter.gif" alt="description" />
        </div>

      </div>
    </Layout>
  );
}

module.exports = Router404;
