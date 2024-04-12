const list = document.querySelector('.advertismentList');
const listFav = document.querySelector('.favorites');

if (list) {
  list.addEventListener('click', async (event) => {
    if (event.target.classList.contains('like-button')) {
      try {
        const card = event.target.closest('.card');
        const cardId = card.dataset.id;
        const likeCountElement = document.querySelector(
          `.quantityLikes${cardId}`
        );
        /* const likeButton = document.querySelector('.like-button'); */
        const response = await fetch(`/api/likes/${cardId}/change`, {
          method: 'PUT',
        });
        const data = await response.json();
        if (data.message === 'Лайк отменен') {
          if (likeCountElement) {
            likeCountElement.innerHTML =
              parseInt(likeCountElement.innerHTML) - 1;
          }

          event.target.innerText = '🤍';
          if (listFav) {
            card.remove();
          }
        } else if (data.message === 'Лайк добавлен') {
          if (likeCountElement) {
            likeCountElement.innerHTML =
              parseInt(likeCountElement.innerHTML) + 1;
          }

          event.target.innerText = '❤️';
        }
      } catch (error) {
        console.error('Error liking advertisment:', error);
      }
    }
  });
}
