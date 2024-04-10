const regForm = document.querySelector('.registrForm');
const logInForm = document.querySelector('.logInForm');

if (regForm) {
  regForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, email, password } = e.target;
    const res = await fetch('/api/auth/registration', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
      }),
    });
    name.value = '';
    email.value = '';
    password.value = '';
    const data = await res.json();
    if (res.ok) {
      window.location.href = '/';
    } else {
      document.querySelector('.errRega').innerHTML = data.message;
    }
  });
}

if (logInForm) {
  logInForm.addEventListener('submit', async (event) => {
    console.log(1);
    event.preventDefault();
    const { email, password } = event.target;
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    email.value = '';
    password.value = '';
    const data = await res.json();
    if (res.ok) {
      window.location.href = '/';
    } else {
      document.querySelector('.errRega').innerHTML = data.message;
    }
  });
}
