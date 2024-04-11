const listAdmin = document.querySelector('.listAdmin');
const addAdvertismentForm = document.querySelector('.addAdvertismentForm')


if (listAdmin) {
  listAdmin.addEventListener('click', async (e) => {
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
}

if (listAdmin) {
  listAdmin.addEventListener('click', async (e) => {
    if (e.target.classList.contains('del')) {
      try {
        const card = e.target.closest('.card');
        const cardId = card.dataset.id;
        const del = confirm('Вы точно хотите удалить объявление');
        if (del) {
          const response = await fetch(`/api/admin/${cardId}`, {
            method: 'DELETE',
          });
          const data = await response.json();
          if (data.message === 'Success') {
            card.remove();
          }
        }
      } catch (error) {
        console.error('Ошибка при удалении карточки:', error);
      }
    }
  });
}


if (addAdvertismentForm) {
  addAdvertismentForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { category, price,  }
  })
}
