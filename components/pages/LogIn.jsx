const React = require('react');
const Layout = require('../Layout');

module.exports = function LogIn({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="regcont">
        <h1 className="regH1">ВХОД</h1>
      </div>
      <div className="regcont">
        <div id="wrapper">
          <form className="logInForm" action="/courses" id="signin">
            <input
              type="email"
              id="user"
              name="email"
              placeholder="Enter email"
            />
            <input
              type="password"
              id="pass"
              name="password"
              placeholder="Enter password"
            />
            <button type="submit">&#xf0da;</button>
          </form>
        </div>
      </div>
      <p className='errRega'></p>
    </Layout>
  );
};
