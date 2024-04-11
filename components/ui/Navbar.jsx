const React = require('react');

module.exports = function Navbar({ user }) {
  return (
    <div className="nav">
      <img className='ourLogo' src="/img/logo.png" alt="" />
      <a href="/">Объявления</a>
      {user && user.isAdmin === true && <a href="/admin">Кабинет</a>}
      {user ? (
        <a href="/favorites">Избранное</a>
      ) : (
        <a href="/auth/registration">Регистрация</a>
      )}
      {user ? (
        <a href="/api/auth/logout">Выход</a>
      ) : (
        <a href="/auth/login">Войти</a>
      )}
    </div>
  );
};
