const React = require('react');
const Layout = require('./Layout');

module.exports = function AdsList({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div>This is site </div>
    </Layout>
  );
};
