const React = require('react');
const Layout = require('./Layout');
const FilterHouse = require('./FilterHouse')

module.exports = function AdsList({ title, user }) {
  return (
    <Layout title={title} user={user}>
       <FilterHouse/>
      <div>This is site </div>
    </Layout>
  );
};
