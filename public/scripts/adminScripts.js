const listAdmin = document.querySelector('.listAdmin');

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
