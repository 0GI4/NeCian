const listphoto = document.querySelector('.advertismentList');

if (listphoto) {
  listphoto.addEventListener('click', async (event) => {
    if (event.target.classList.contains('next')) {
      try {
        const card = event.target.closest('.card');
        const cardId = card.dataset.id;
        const img = card.querySelector('.adsImage');
        const currentImageIndex = parseInt(img.getAttribute('data-id'));
        const response = await fetch(
          `/api/photo/${cardId}/changeup/${currentImageIndex}`,
          {
            method: 'POST',
          }
        );
        const data = await response.json();
        console.log(data);
        img.src = data.photo;
        img.setAttribute('data-id', data.index);
      } catch (error) {
        console.error('Ошибка:', error);
      }
    } else if (event.target.classList.contains('back')) {
      try {
        const card = event.target.closest('.card');
        const cardId = card.dataset.id;
        const img = card.querySelector('.adsImage');
        const currentImageIndex = parseInt(img.getAttribute('data-id'));

        const response = await fetch(
          `/api/photo/${cardId}/changedown/${currentImageIndex}`,
          {
            method: 'POST',
          }
        );
        const data = await response.json();
        console.log(data);
        img.src = data.photo;
        img.setAttribute('data-id', data.index);
      } catch (error) {
        console.error('Ошибка:', error);
      }
    }
  });
}
