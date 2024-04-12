const select = document.querySelector('.FilterHouse');
const form = document.querySelector('.FormFilter');
const advertismentsContainer = document.querySelector('.advertisment-container');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const categoryId = select.value;

    try {
      const res = await fetch(`/ads/${categoryId}/category`);
      const advertisments = await res.json();

      if (advertisments && advertisments.length > 0) {
        advertismentsContainer.innerHTML = '';

        advertisments.forEach((ad) => {
          const card = document.createElement('div');
          card.classList.add('card');
          card.setAttribute('data-id', ad.id);
          card.style.width = '18rem';
          card.style.margin = '20px';
          
          const imageUrl = ad.Images[0].photo
          const advertismentCard = `
              <div>
              <img src="${imageUrl}"/>
                <p>${ad.description}</p>
                <p>${ad.price} ₽</p>
              </div>
            `;

          card.innerHTML = advertismentCard;
          advertismentsContainer.appendChild(card);
        });
      } else {
        console.log('Объявления не найдены');
      }
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  });
}
