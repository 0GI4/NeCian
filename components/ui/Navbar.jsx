const React = require('react');

module.exports = function Navbar({ user }) {
  return (
    <div className="nav">
      <img src="/img/logo.png" alt="" />
      <a href="/">Объявления</a>
      {user ? <a href="/favorites">Избранное</a> : <a href="/auth/registration">Регистрация</a>}
      {user ? <a href="/api/auth/logout">Выход</a> : <a href="/auth/login">Войти</a>}
    </div>
  );
};
