const React = require('react');
const NavBar = require('./ui/Navbar');
const Footer = require('./ui/Footer');

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        {/* <link rel="stylesheet" href="/style/navbar.css" /> */}
        <link rel="stylesheet" href="/style/style.css" />
        <link rel="stylesheet" href="/style/styleFilter.css" />
        <link rel="stylesheet" href="/style/viewCard.css" />
        <link rel="stylesheet" href="/style/footer.css" />
        <link rel="stylesheet" href="/style/navbar.css" />
        <link rel="stylesheet" href="/style/logIn.css" />
        <link rel="stylesheet" href="/style/search.css" />
        <script defer src="/scripts/authScripts.js" />
        <script defer src="/scripts/filterHouse.js" />
        <script defer src="/scripts/adminScripts.js" />
        <script defer src="/scripts/likeScripts.js" />
      </head>
      <body>
        <NavBar user={user} />
        {children}
        <Footer />
      </body>
    </html>
  );
};
