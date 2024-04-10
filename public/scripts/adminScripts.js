const adminList = document.querySelector('.listAdmin');

adminList.addEventListener('click', async (e) => {
  console.log(1);
  if (e.target.classList.contains('updateBtn')) {
    const form = document.querySelector(`.formUpdate${e.target.dataset.id}`);
    form.classList.toggle('hidden');
  }

  if (e.target.classList.contains('saveUpdate')) {
    e.preventDefault();
    const form = e.target.closest('form');
    const { id } = form.dataset;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch(`/api/admin/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.message === 'ok') {
      form.classList.add('hidden');
    }
  }
});
