const React = require('react');
const NavBar = require('./Navbar');
const Footer = require('./Footer');

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/style/navbar.css" />
        <link rel="stylesheet" href="/style/style.css" />
        <script defer src="/scripts/authScripts.js" />
      </head>
      <body>
        <NavBar user={user} />
        {children}
        <Footer />
      </body>
    </html>
  );
};
