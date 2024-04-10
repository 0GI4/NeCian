const React = require('react');
const Layout = require('./Layout');

function Registration({ title }) {
  return (
    <Layout title={title}>
      <div className="regcont">
        <h1 className="regH1">РЕГИСТРАЦИЯ</h1>
      </div>
      <div className="regcont">
        <div id="wrapper">
          <form className="registrForm" id="signin">
            <input type="text" id="user" name="name" placeholder="Enter name" />
            <input
              type="email"
              id="email"
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
        <p className='errRega'></p>
      </div>
    </Layout>
  );
}

module.exports = Registration;
